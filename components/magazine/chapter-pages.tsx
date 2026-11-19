import Image from 'next/image'
import type { ReactNode } from 'react'
import { PageFrame, SpeechBubble } from './page-frame'

export function ChapterOpener({
  number,
  chapter,
  title,
  japanese,
  subtitle,
  bubble,
  image,
  alt,
  accent,
}: {
  number: number
  chapter: number
  title: string
  japanese: string
  subtitle: string
  bubble: ReactNode
  image: string
  alt: string
  accent: string
}) {
  return (
    <PageFrame number={number} section={`Chapter ${chapter}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden border-[0.8cqi] border-ink comic-shadow">
        <Image src={image} alt={alt} fill sizes="(min-width: 768px) 520px, 92vw" className="object-cover" />
        <SpeechBubble className="absolute left-[3cqi] top-[3cqi] max-w-[46cqi] text-[3.4cqi]">{bubble}</SpeechBubble>
        <span
          className="absolute bottom-[2cqi] right-[3cqi] font-display text-[6cqi] leading-none text-paper [writing-mode:vertical-rl]"
          aria-hidden="true"
        >
          {japanese}
        </span>
      </div>
      <div className="mt-[3.5cqi] flex items-end justify-between gap-[3cqi]">
        <h2 className={`ink-stroke font-display text-[17cqi] leading-[0.8] tracking-wide ${accent}`}>{title}</h2>
        <p className="max-w-[44cqi] pb-[1cqi] text-right text-[3.2cqi] font-bold leading-snug">{subtitle}</p>
      </div>
    </PageFrame>
  )
}

type Practice = { title: string; body: string }

export function PracticePage({
  number,
  section,
  heading,
  intro,
  practices,
  tip,
  panelColor,
}: {
  number: number
  section: string
  heading: ReactNode
  intro: string
  practices: Practice[]
  tip: string
  panelColor: string
}) {
  return (
    <PageFrame number={number} section={section}>
      <h2 className="font-display text-[9cqi] leading-none tracking-wide">{heading}</h2>
      <p className="mt-[1.5cqi] text-[3.1cqi] leading-relaxed">{intro}</p>

      <ol className="mt-[3cqi] grid flex-1 grid-cols-2 gap-[2.5cqi]">
        {practices.map((practice, index) => (
          <li
            key={practice.title}
            className={`relative flex flex-col overflow-hidden border-[0.6cqi] border-ink p-[2.5cqi] comic-shadow-sm ${
              index % 3 === 0 ? panelColor : 'bg-paper'
            }`}
          >
            <span className="speedlines pointer-events-none absolute inset-0 text-ink/10" aria-hidden="true" />
            <span className="relative grid size-[7cqi] place-items-center rounded-full border-[0.5cqi] border-ink bg-manga-red font-display text-[4cqi] text-paper">
              {index + 1}
            </span>
            <h3 className="relative mt-[1.5cqi] font-display text-[4.6cqi] leading-none tracking-wide">{practice.title}</h3>
            <p className="relative mt-[1.2cqi] text-[2.9cqi] leading-snug">{practice.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-[3cqi] -rotate-1 border-[0.5cqi] border-dashed border-ink bg-gold/30 px-[3cqi] py-[1.8cqi] text-[3cqi] font-bold leading-snug">
        <span className="font-display text-[3.6cqi] text-manga-red">{'Sensei tip: '}</span>
        {tip}
      </p>
    </PageFrame>
  )
}
