export type Topic = 'Luck' | 'Wealth' | 'Happiness'

export type Teacher = {
  name: string
  initials: string
  focus: string
  topic: Topic
  search: string
}

export function youtubeSearchUrl(query: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
}

export const teachersVolumeOne: Teacher[] = [
  {
    name: 'Neville Goddard',
    initials: 'NG',
    focus: 'Classic lectures on imagination, "living in the end" and assumption.',
    topic: 'Luck',
    search: 'Neville Goddard lecture feeling is the secret',
  },
  {
    name: 'Abraham Hicks',
    initials: 'AH',
    focus: 'Esther Hicks on the Law of Attraction, alignment and feeling good first.',
    topic: 'Happiness',
    search: 'Abraham Hicks law of attraction workshop',
  },
  {
    name: 'Dr. Joe Dispenza',
    initials: 'JD',
    focus: 'Meditation and neuroscience for rewiring habits and breaking old patterns.',
    topic: 'Luck',
    search: 'Dr Joe Dispenza meditation',
  },
  {
    name: 'Bob Proctor',
    initials: 'BP',
    focus: 'Paradigm shifts, goal setting and the mindset of prosperity.',
    topic: 'Wealth',
    search: 'Bob Proctor paradigm money mindset',
  },
  {
    name: 'Rhonda Byrne',
    initials: 'RB',
    focus: 'Creator of "The Secret" — gratitude and visualization made famous.',
    topic: 'Wealth',
    search: 'Rhonda Byrne The Secret',
  },
]

export const teachersVolumeTwo: Teacher[] = [
  {
    name: 'Dr. Wayne Dyer',
    initials: 'WD',
    focus: 'The Power of Intention — spirituality, purpose and abundance.',
    topic: 'Happiness',
    search: 'Wayne Dyer power of intention',
  },
  {
    name: 'Louise Hay',
    initials: 'LH',
    focus: 'Pioneer of positive affirmations and loving yourself first.',
    topic: 'Happiness',
    search: 'Louise Hay affirmations',
  },
  {
    name: 'Lisa Nichols',
    initials: 'LN',
    focus: 'From $11 in her account to millionaire — fearless, fiery motivation.',
    topic: 'Wealth',
    search: 'Lisa Nichols motivational speech abundance',
  },
  {
    name: 'Marisa Peer',
    initials: 'MP',
    focus: 'Rapid Transformational Therapy and the famous "I Am Enough" method.',
    topic: 'Happiness',
    search: 'Marisa Peer I am enough',
  },
  {
    name: 'Gabby Bernstein',
    initials: 'GB',
    focus: 'Super Attractor — modern, playful steps to manifest with ease.',
    topic: 'Luck',
    search: 'Gabby Bernstein manifesting super attractor',
  },
]
