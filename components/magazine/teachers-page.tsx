import { Play } from 'lucide-react'
import { youtubeSearchUrl, type Teacher, type Topic } from '@/lib/teachers'
import { PageFrame } from './page-frame'

const topicStyles: Record<Topic, string> = {
  Luck: 'bg-teal text-paper',
  Wealth: 'bg-gold text-ink',
  Happiness: 'bg-blossom text-ink',
}

export function TeachersPage({
  number,
  volume,
  teachers,
}: {
  number: number
  volume: string
  teachers: Teacher[]
}) {
  return (
    <PageFrame number={number} section="Sensei Files">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-[9cqi] leading-none tracking-wide">
          {'Sensei '}
          <span className="text-manga-red">{volume}</span>
        </h2>
        <span className="pb-[0.6cqi] text-[2.6cqi] font-bold">{'Watch on YouTube ↗'}</span>
      </div>

      <ul className="mt-[2.5cqi] flex flex-1 flex-col justify-between gap-[2cqi]">
        {teachers.map((teacher) => (
          <li
            key={teacher.name}
            className="flex items-center gap-[2.5cqi] border-[0.5cqi] border-ink bg-paper px-[2.4cqi] py-[1.8cqi] comic-shadow-sm"
          >
            <div
              className={`relative grid size-[12cqi] shrink-0 place-items-center overflow-hidden rounded-full border-[0.5cqi] border-ink ${topicStyles[teacher.topic]}`}
              aria-hidden="true"
            >
              <span className="halftone absolute inset-0 opacity-20" />
              <span className="relative font-display text-[5cqi]">{teacher.initials}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-[1.5cqi]">
                <h3 className="font-display text-[4.6cqi] leading-none tracking-wide">{teacher.name}</h3>
                <span
                  className={`rounded-full border-[0.3cqi] border-ink px-[1.4cqi] py-[0.2cqi] font-display text-[2.4cqi] tracking-wider ${topicStyles[teacher.topic]}`}
                >
                  {teacher.topic}
                </span>
              </div>
              <p className="mt-[0.8cqi] text-[2.7cqi] leading-snug">{teacher.focus}</p>
            </div>
            <a
              href={youtubeSearchUrl(teacher.search)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch ${teacher.name} videos on YouTube (opens in a new tab)`}
              className="flex shrink-0 items-center gap-[1cqi] border-[0.5cqi] border-ink bg-manga-red px-[2cqi] py-[1.4cqi] font-display text-[3.2cqi] tracking-wider text-paper transition hover:-translate-y-[0.3cqi] hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Play className="size-[3cqi] fill-current" aria-hidden="true" />
              Watch
            </a>
          </li>
        ))}
      </ul>
    </PageFrame>
  )
}
