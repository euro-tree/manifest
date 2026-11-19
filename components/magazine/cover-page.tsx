import Image from 'next/image'

const coverLines = [
  { kicker: 'Ch.1', title: 'The Lucky Cat Method' },
  { kicker: 'Ch.2', title: 'Golden Money Mindset' },
  { kicker: 'Ch.3', title: 'Joy On Demand' },
]

export function CoverPage() {
  return (
    <article className="relative h-full w-full overflow-hidden bg-ink text-ink">
      <Image
        src="/images/cover.png"
        alt="Painted manga heroine surrounded by swirling gold coins, clovers and stars"
        fill
        priority
        sizes="(min-width: 768px) 520px, 92vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" aria-hidden="true" />

      <div className="relative flex h-full flex-col p-[5cqi]">
        <div className="flex items-start justify-between font-display text-[3.2cqi] tracking-widest text-paper">
          <span>{'Weekly Shōnen Fortune'}</span>
          <span>{'マニフェスト'}</span>
        </div>

        <p className="ink-stroke -mt-[1cqi] font-display text-[21cqi] leading-[0.9] tracking-wide text-gold">
          MANIFEST!
        </p>
        <p className="w-fit -rotate-2 bg-manga-red px-[3cqi] py-[1cqi] font-display text-[4.6cqi] tracking-wider text-paper comic-shadow-sm">
          {'Luck • Wealth • Happiness'}
        </p>

        <ul className="mt-[6cqi] flex flex-col gap-[2.5cqi]">
          {coverLines.map((line) => (
            <li key={line.title} className="w-fit border-[0.5cqi] border-ink bg-paper px-[2.5cqi] py-[1.2cqi] comic-shadow-sm">
              <span className="font-display text-[3cqi] text-manga-red">{line.kicker} </span>
              <span className="font-display text-[4.4cqi] tracking-wide">{line.title}</span>
            </li>
          ))}
        </ul>

        <div className="burst absolute right-[4cqi] top-[42cqi] grid size-[30cqi] rotate-12 place-items-center bg-gold text-center">
          <p className="font-display text-[5cqi] leading-[0.95] text-ink">
            10 Sensei
            <br />
            <span className="text-manga-red">Inside!</span>
          </p>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <p className="max-w-[48cqi] bg-ink/80 px-[2.5cqi] py-[1.5cqi] font-display text-[3.6cqi] leading-tight tracking-wide text-paper">
            {'Tap the page to open →'}
          </p>
          <div className="flex flex-col items-end gap-[1cqi] bg-paper p-[1.5cqi]">
            <div className="barcode h-[8cqi] w-[20cqi]" aria-hidden="true" />
            <span className="font-display text-[2.6cqi] tracking-widest">{'Vol.777 · ¥777'}</span>
          </div>
        </div>
      </div>
    </article>
  )
}
