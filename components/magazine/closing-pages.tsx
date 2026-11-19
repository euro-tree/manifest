import { Scissors } from 'lucide-react'
import { PageFrame } from './page-frame'
import { TocLink } from './toc-link'

const mission = [
  { day: 'Mon', task: 'Write your wish as if it already happened.' },
  { day: 'Tue', task: 'List 10 things you are grateful for — say them out loud.' },
  { day: 'Wed', task: 'Visualize 5 minutes: see it, hear it, feel it.' },
  { day: 'Thu', task: 'Take one bold action toward your goal.' },
  { day: 'Fri', task: 'Give something away: time, money or a compliment.' },
  { day: 'Sat', task: 'Notice every "lucky" sign and write it down.' },
  { day: 'Sun', task: 'Rest, celebrate and let it go. Trust the timing.' },
]

const affirmations = [
  { text: 'Luck finds me everywhere I go.', color: 'bg-teal text-paper' },
  { text: 'Money flows to me with ease.', color: 'bg-gold text-ink' },
  { text: 'I choose joy right now.', color: 'bg-blossom text-ink' },
]

export function RitualPage() {
  return (
    <PageFrame number={11} section="Special Feature">
      <h2 className="font-display text-[9cqi] leading-none tracking-wide">
        {'7-Day '}
        <span className="text-manga-red">Manifest Mission</span>
      </h2>

      <ol className="mt-[3cqi] flex flex-col gap-[1.4cqi]">
        {mission.map((item) => (
          <li key={item.day} className="flex items-center gap-[2.5cqi] border-b-[0.3cqi] border-dashed border-ink/40 pb-[1.2cqi]">
            <span className="w-[10cqi] shrink-0 bg-ink py-[0.6cqi] text-center font-display text-[3.4cqi] tracking-wider text-paper">
              {item.day}
            </span>
            <span className="text-[3cqi] font-bold leading-snug">{item.task}</span>
          </li>
        ))}
      </ol>

      <div className="mt-auto">
        <p className="flex items-center gap-[1.5cqi] font-display text-[3.4cqi] tracking-wider">
          <Scissors className="size-[3.6cqi]" aria-hidden="true" />
          {'Cut-out affirmation cards'}
        </p>
        <ul className="mt-[1.5cqi] grid grid-cols-3 gap-[2cqi]">
          {affirmations.map((card, i) => (
            <li
              key={card.text}
              className={`grid aspect-[3/4] place-items-center border-[0.5cqi] border-dashed border-ink p-[2cqi] text-center font-display text-[3.8cqi] leading-tight tracking-wide ${card.color} ${
                i === 1 ? 'rotate-2' : '-rotate-2'
              }`}
            >
              {card.text}
            </li>
          ))}
        </ul>
      </div>
    </PageFrame>
  )
}

export function BackCoverPage() {
  return (
    <article className="relative flex h-full w-full flex-col overflow-hidden bg-ink p-[6cqi] text-paper">
      <span className="speedlines absolute inset-0 text-paper/15" aria-hidden="true" />
      <span
        className="absolute -left-[10cqi] -top-[10cqi] size-[50cqi] rounded-full bg-manga-red/60 blur-[6cqi]"
        aria-hidden="true"
      />
      <span
        className="absolute -bottom-[12cqi] -right-[8cqi] size-[55cqi] rounded-full bg-gold/40 blur-[6cqi]"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center text-center">
        <p className="font-display text-[4cqi] tracking-[0.3em] text-gold">{'The End?'}</p>
        <h2 className="ink-stroke mt-[2cqi] font-display text-[15cqi] leading-[0.85] tracking-wide text-paper">
          {'To Be'}
          <br />
          <span className="text-manga-red">{'Continued…'}</span>
        </h2>
        <p className="mt-[4cqi] max-w-[70cqi] text-[3.4cqi] leading-relaxed text-paper/85">
          Your next chapter is written by what you imagine, feel and do today. Turn the page of your own story.
        </p>
        <TocLink
          pageIndex={0}
          className="mt-[6cqi] border-[0.6cqi] border-paper bg-gold px-[5cqi] py-[2cqi] font-display text-[4.4cqi] tracking-wider text-ink shadow-[1cqi_1cqi_0_var(--manga-red)] transition hover:-translate-y-[0.4cqi]"
        >
          {'Read again from the cover'}
        </TocLink>
      </div>

      <div className="relative flex items-end justify-between gap-[4cqi]">
        <p className="max-w-[60cqi] text-[2.4cqi] leading-snug text-paper/60">
          For inspiration and entertainment. Not financial, medical or psychological advice. YouTube links open search
          results for each teacher.
        </p>
        <div className="flex flex-col items-end gap-[1cqi] bg-paper p-[1.5cqi] text-ink">
          <div className="barcode h-[8cqi] w-[20cqi]" aria-hidden="true" />
          <span className="font-display text-[2.6cqi] tracking-widest">{'Next issue: Love & Health'}</span>
        </div>
      </div>
    </article>
  )
}
