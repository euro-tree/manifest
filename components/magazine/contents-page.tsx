import { PageFrame, SpeechBubble } from './page-frame'
import { TocLink } from './toc-link'

const entries = [
  { label: 'Chapter 1 — Luck', page: 3, pageIndex: 2, color: 'bg-teal' },
  { label: 'Chapter 2 — Wealth', page: 5, pageIndex: 4, color: 'bg-gold' },
  { label: 'Chapter 3 — Happiness', page: 7, pageIndex: 6, color: 'bg-blossom' },
  { label: 'Sensei Files (YouTube)', page: 9, pageIndex: 8, color: 'bg-manga-red' },
  { label: '7-Day Manifest Mission', page: 11, pageIndex: 10, color: 'bg-ink' },
]

export function ContentsPage() {
  return (
    <PageFrame number={2} section="Contents">
      <h2 className="font-display text-[11cqi] leading-none tracking-wide">
        {'In This '}
        <span className="text-manga-red">Issue</span>
      </h2>

      <ol className="mt-[3cqi] flex flex-col gap-[2cqi]">
        {entries.map((entry) => (
          <li key={entry.label}>
            <TocLink
              pageIndex={entry.pageIndex}
              className="group flex w-full items-center gap-[2.5cqi] border-[0.5cqi] border-ink bg-paper px-[2.5cqi] py-[1.6cqi] text-left comic-shadow-sm transition hover:-translate-y-[0.4cqi] hover:bg-gold/40"
            >
              <span className={`size-[4cqi] shrink-0 rounded-full border-[0.4cqi] border-ink ${entry.color}`} aria-hidden="true" />
              <span className="flex-1 font-display text-[4.6cqi] tracking-wide">{entry.label}</span>
              <span className="font-display text-[4cqi] text-manga-red">p.{entry.page}</span>
            </TocLink>
          </li>
        ))}
      </ol>

      <div className="mt-auto flex items-end gap-[3cqi]">
        <div className="flex-1">
          <p className="font-display text-[4cqi] tracking-wide text-manga-red">{"Editor's Note"}</p>
          <p className="mt-[1cqi] text-[3.1cqi] leading-relaxed">
            Every hero starts with a wish. This issue is your training arc: small daily practices for luck, money and joy —
            plus the real-life sensei who teach them on YouTube.
          </p>
        </div>
        <SpeechBubble className="w-[34cqi] shrink-0 text-[3.4cqi]">{'Believe it… then do the work!'}</SpeechBubble>
      </div>
    </PageFrame>
  )
}
