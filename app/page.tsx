import { ChapterOpener, PracticePage } from '@/components/magazine/chapter-pages'
import { BackCoverPage, RitualPage } from '@/components/magazine/closing-pages'
import { ContentsPage } from '@/components/magazine/contents-page'
import { CoverPage } from '@/components/magazine/cover-page'
import { FlipBook } from '@/components/magazine/flip-book'
import { TeachersPage } from '@/components/magazine/teachers-page'
import { teachersVolumeOne, teachersVolumeTwo } from '@/lib/teachers'

const pages = [
  <CoverPage key="cover" />,
  <ContentsPage key="contents" />,
  <ChapterOpener
    key="luck"
    number={3}
    chapter={1}
    title="LUCK"
    japanese="幸運"
    subtitle="Luck isn't random — it's a radar you can train."
    bubble="Lucky people notice more chances!"
    image="/images/luck.png"
    alt="Manga painting of a boy and a lucky cat catching a falling four-leaf clover under shooting stars"
    accent="text-teal"
  />,
  <PracticePage
    key="luck-practices"
    number={4}
    section="Chapter 1 · Luck"
    heading={
      <>
        {'Train Your '}
        <span className="text-teal">Luck Radar</span>
      </>
    }
    intro="Psychologist Richard Wiseman found that 'lucky' people are more open, relaxed and expectant — so they spot opportunities others miss."
    practices={[
      { title: 'Expect a Win', body: 'Start each morning by saying: "Something lucky happens to me today."' },
      { title: 'Say Yes More', body: 'Take a new route, talk to a stranger, try one small adventure a day.' },
      { title: 'Luck Journal', body: 'Write down every coincidence and lucky break. What you track grows.' },
      { title: 'Lucky Charm', body: 'Carry a symbol — a coin or clover — as a cue to stay open and alert.' },
    ]}
    tip="Act on intuition, but keep your eyes open. Luck loves a prepared hero."
    panelColor="bg-teal/25"
  />,
  <ChapterOpener
    key="wealth"
    number={5}
    chapter={2}
    title="WEALTH"
    japanese="富"
    subtitle="Abundance begins as a feeling, then becomes a plan."
    bubble="I am a magnet for money!"
    image="/images/wealth.png"
    alt="Manga painting of a confident woman standing on golden coins as a golden dragon coils around her"
    accent="text-gold"
  />,
  <PracticePage
    key="wealth-practices"
    number={6}
    section="Chapter 2 · Wealth"
    heading={
      <>
        {'The '}
        <span className="text-gold">Golden</span>
        {' Mindset'}
      </>
    }
    intro="Manifesting money is half energy, half action. Shift your beliefs from scarcity to abundance — then move."
    practices={[
      { title: 'Money Thanks', body: 'Bless every bill you pay. Gratitude turns spending into flow.' },
      { title: 'Name a Number', body: 'Write an exact amount and date. Vague wishes give vague results.' },
      { title: 'Prosper Script', body: 'Script a day in your abundant life, in present tense, in detail.' },
      { title: 'Give & Grow', body: 'Share a little — giving tells your mind "there is enough."' },
    ]}
    tip="Pair every money affirmation with one real step: a budget, a skill, an ask."
    panelColor="bg-gold/40"
  />,
  <ChapterOpener
    key="happiness"
    number={7}
    chapter={3}
    title="JOY"
    japanese="幸せ"
    subtitle="Happiness isn't the prize at the end — it's the fuel."
    bubble="Feel good first, everything follows!"
    image="/images/happiness.png"
    alt="Manga painting of joyful friends leaping under cherry blossoms and a warm sun"
    accent="text-blossom"
  />,
  <PracticePage
    key="happiness-practices"
    number={8}
    section="Chapter 3 · Happiness"
    heading={
      <>
        {'Joy '}
        <span className="text-blossom">On Demand</span>
      </>
    }
    intro="Positive psychology shows small daily habits raise well-being — and a happier mind manifests faster."
    practices={[
      { title: 'Three Good Things', body: 'Each night, write 3 good moments and why they happened.' },
      { title: 'Savor It', body: 'Slow down for one joy a day: tea, music, sunlight. Fully feel it.' },
      { title: 'Kindness Combo', body: 'Do 5 small kind acts in one day and watch your mood level up.' },
      { title: 'Move & Breathe', body: 'A 10-minute walk plus deep breaths resets your whole energy.' },
    ]}
    tip="Don't chase happiness — choose it, then let good things catch up to you."
    panelColor="bg-blossom/40"
  />,
  <TeachersPage key="teachers-1" number={9} volume="Vol.1" teachers={teachersVolumeOne} />,
  <TeachersPage key="teachers-2" number={10} volume="Vol.2" teachers={teachersVolumeTwo} />,
  <RitualPage key="ritual" />,
  <BackCoverPage key="back" />,
]

export default function Home() {
  return (
    <main className="desk-bg relative flex min-h-svh flex-col items-center overflow-hidden px-4 py-5">
      <header className="mb-4 text-center">
        <h1 className="font-display text-3xl tracking-wider text-paper md:text-4xl">
          {'MANIFEST! '}
          <span className="text-gold">Monthly</span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A painted manga magazine on luck, wealth &amp; happiness — click, swipe or use arrow keys to flip
        </p>
      </header>
      <FlipBook pages={pages} />
    </main>
  )
}
