import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function PageFrame({
  number,
  section,
  children,
  className,
}: {
  number: number
  section: string
  children: ReactNode
  className?: string
}) {
  return (
    <article className={cn('paper-texture relative flex h-full w-full flex-col p-[5cqi] text-ink', className)}>
      <header className="flex items-center justify-between border-b-[0.6cqi] border-ink pb-[1.4cqi] font-display text-[3.4cqi] tracking-wider">
        <span>{section}</span>
        <span className="text-manga-red">MANIFEST! Vol.777</span>
      </header>
      <div className="flex min-h-0 flex-1 flex-col pt-[3cqi]">{children}</div>
      <footer className="pt-[2cqi] text-center font-display text-[3cqi] tracking-widest">
        {'— '}
        {number}
        {' —'}
      </footer>
    </article>
  )
}

export function SpeechBubble({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'relative rounded-[50%] border-[0.6cqi] border-ink bg-paper px-[5cqi] py-[3cqi] text-center font-bold leading-tight text-ink',
        className,
      )}
    >
      {children}
    </div>
  )
}
