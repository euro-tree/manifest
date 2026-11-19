'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type BookContextValue = {
  goToPage: (pageIndex: number) => void
}

const BookContext = createContext<BookContextValue | null>(null)

export function useBook() {
  const context = useContext(BookContext)
  if (!context) throw new Error('useBook must be used inside <FlipBook>')
  return context
}

const DESKTOP_QUERY = '(min-width: 768px)'

function subscribeToMedia(callback: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY)
  media.addEventListener('change', callback)
  return () => media.removeEventListener('change', callback)
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeToMedia,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => true,
  )
}

const FLIP_MS = 900
const STAGGER_MS = 90

type Leaf = { front: ReactNode; back: ReactNode | null }

function BlankBack() {
  return (
    <div className="paper-texture relative grid h-full w-full place-items-center text-ink/10">
      <div className="halftone absolute inset-0" aria-hidden="true" />
      <span className="font-display text-[18cqi] tracking-wider">MANIFEST!</span>
    </div>
  )
}

export function FlipBook({ pages }: { pages: ReactNode[] }) {
  const isDesktop = useIsDesktop()
  const [page, setPage] = useState(0)
  const [motion, setMotion] = useState<{ from: number; to: number } | null>(null)
  const motionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartX = useRef<number | null>(null)

  const leaves: Leaf[] = isDesktop
    ? Array.from({ length: Math.ceil(pages.length / 2) }, (_, i) => ({
        front: pages[i * 2],
        back: pages[i * 2 + 1] ?? null,
      }))
    : pages.map((p) => ({ front: p, back: null }))

  const leafCount = leaves.length
  const maxFlipped = isDesktop ? leafCount : leafCount - 1
  const flipped = isDesktop ? Math.floor((page + 1) / 2) : page

  const flipTo = useCallback(
    (target: number) => {
      const next = Math.max(0, Math.min(maxFlipped, target))
      if (next === flipped) return
      const distance = Math.abs(next - flipped)
      setMotion({ from: flipped, to: next })
      setPage(isDesktop ? (next === 0 ? 0 : next * 2 - 1) : next)
      if (motionTimer.current) clearTimeout(motionTimer.current)
      motionTimer.current = setTimeout(() => setMotion(null), FLIP_MS + distance * STAGGER_MS)
    },
    [flipped, isDesktop, maxFlipped],
  )

  const next = useCallback(() => flipTo(flipped + 1), [flipTo, flipped])
  const prev = useCallback(() => flipTo(flipped - 1), [flipTo, flipped])

  const goToPage = useCallback(
    (pageIndex: number) => flipTo(isDesktop ? Math.floor((pageIndex + 1) / 2) : pageIndex),
    [flipTo, isDesktop],
  )

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => () => {
    if (motionTimer.current) clearTimeout(motionTimer.current)
  }, [])

  function handleFaceClick(event: React.MouseEvent, action: () => void) {
    if ((event.target as HTMLElement).closest('a, button')) return
    action()
  }

  let bookShift = '0%'
  if (isDesktop && flipped === 0) bookShift = '-25%'
  if (isDesktop && flipped === leafCount) bookShift = '25%'

  const total = pages.length
  const status = isDesktop
    ? flipped === 0
      ? `Cover, page 1 of ${total}`
      : flipped === leafCount
        ? `Back cover, page ${total} of ${total}`
        : `Pages ${flipped * 2} and ${flipped * 2 + 1} of ${total}`
    : `Page ${flipped + 1} of ${total}`

  const forward = motion ? motion.to > motion.from : true

  return (
    <BookContext.Provider value={{ goToPage }}>
      <div className="flex w-full flex-col items-center gap-5">
        <div
          className="book-stage flex w-full justify-center"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            touchStartX.current = null
            if (dx < -50) next()
            if (dx > 50) prev()
          }}
        >
          <div
            className="book"
            data-mode={isDesktop ? 'spread' : 'single'}
            style={{ transform: `translateX(${bookShift})` }}
            role="region"
            aria-roledescription="flip book"
            aria-label="MANIFEST! magazine"
          >
            {leaves.map((leaf, i) => {
              const isFlipped = i < flipped
              const moving =
                motion !== null && i >= Math.min(motion.from, motion.to) && i < Math.max(motion.from, motion.to)
              const zIndex = moving
                ? forward
                  ? 100 + i
                  : 100 + leafCount - i
                : isFlipped
                  ? i + 1
                  : leafCount - i
              const delay = moving && motion ? (forward ? i - motion.from : motion.from - 1 - i) * STAGGER_MS : 0
              const frontVisible = i === flipped
              const backVisible = isDesktop && i === flipped - 1

              return (
                <div
                  key={`${isDesktop ? 'd' : 'm'}-${i}`}
                  className="leaf"
                  style={{
                    zIndex,
                    transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  <div
                    className="leaf-face cursor-pointer"
                    data-side="front"
                    inert={!frontVisible}
                    aria-hidden={!frontVisible}
                    onClick={(e) => handleFaceClick(e, next)}
                  >
                    {leaf.front}
                  </div>
                  <div
                    className="leaf-face cursor-pointer"
                    data-side="back"
                    inert={!backVisible}
                    aria-hidden={!backVisible}
                    onClick={(e) => handleFaceClick(e, prev)}
                  >
                    {leaf.back ?? <BlankBack />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <nav aria-label="Magazine pages" className="flex items-center gap-3 md:gap-5">
          <PageButton onClick={prev} disabled={flipped === 0} label="Previous page">
            <ChevronLeft className="size-5" aria-hidden="true" />
          </PageButton>
          <p
            className="min-w-44 rounded-sm border-2 border-paper/20 bg-muted px-4 py-2 text-center font-display text-lg tracking-wider text-paper"
            aria-live="polite"
          >
            {status}
          </p>
          <PageButton onClick={next} disabled={flipped === maxFlipped} label="Next page">
            <ChevronRight className="size-5" aria-hidden="true" />
          </PageButton>
        </nav>
      </div>
    </BookContext.Provider>
  )
}

function PageButton({
  onClick,
  disabled,
  label,
  children,
}: {
  onClick: () => void
  disabled: boolean
  label: string
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        'grid size-12 place-items-center rounded-full border-2 border-ink bg-gold text-ink shadow-[3px_3px_0_var(--paper)] transition',
        'hover:-translate-y-0.5 hover:bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:bg-gold',
      )}
    >
      {children}
    </button>
  )
}
