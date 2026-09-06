// Single source of truth for page copy. Keep this honest: everything here should be
// something the prototype actually does.

export const navLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#how', label: 'How it works' },
  { href: '#report', label: 'The report' },
  { href: '#market', label: 'Market' },
  { href: '#pricing', label: 'Model' },
  { href: '#vision', label: 'Vision' },
]

export const drawerLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#solution', label: 'Solution' },
  { href: '#how', label: 'How it works' },
  { href: '#report', label: 'The report' },
  { href: '#demo', label: 'Demo' },
  { href: '#market', label: 'Market' },
  { href: '#pricing', label: 'Business model' },
  { href: '#vision', label: 'Vision' },
  { href: '#ask', label: 'The ask' },
]

export const afterPosting = [
  'Impressions and clicks',
  'Watch time',
  'Spend and conversions',
  'Campaign-level reporting',
]

export const theGap = [
  'Does this ad make readers curious enough to tap?',
  'Is the genre promise clear?',
  'Will the target reader understand the premise quickly?',
  'Where exactly will readers drop off?',
]

export const decisions = [
  'Should we fix this ad, push it now, or choose another creative?',
  'Is the curiosity gap strong enough to earn the tap?',
  'Does the opening risk getting skipped?',
  'Which of our existing story ads should we activate for a trending theme?',
  'Are we spending budget before or after we know it works?',
]

export const steps = [
  {
    no: '01',
    title: 'Ingest the creative',
    line: 'A story ad image or video, sampled and transcribed.',
    img: '/img/pic-ingest.svg',
    alt: 'A story ad decomposed into sampled frames, caption text with hashtags, and an audio waveform',
  },
  {
    no: '02',
    title: 'Profile the ad',
    line: 'Topic, tone, pacing, hook strength, genre, and trend context.',
    img: '/img/pic-profile.svg',
    alt: 'A structured ad profile listing topic, tone, pacing, hook strength, audience fit, trend context and turnoffs',
    caption: 'Illustrative profile output.',
  },
  {
    no: '03',
    title: 'Simulate the reader audience',
    line: 'Core, adjacent and skeptic readers react in character.',
    img: '/img/pic-personas.svg',
    alt: 'Reader agents reacting to a story ad with tap-to-read, skip and comment actions',
    caption: 'Illustrative reader reactions.',
  },
  {
    no: '04',
    title: 'Model distribution',
    line: 'Reach spreads by algorithm and shares, then the score lands.',
    img: '/img/pic-diffusion.svg',
    alt: 'A diffusion network spreading outward in waves from a single seed reader',
  },
]

export const reportDimensions = [
  ['Reader intent', 'the headline score, how likely readers are to tap through'],
  ['Tap-through', 'reach and conversion across the simulated reader pool'],
  ['Curiosity gap', 'how strongly the premise pulls a reader in'],
  ['Genre fit', 'how clearly the ad signals its genre and premise'],
  ['Skip risk', 'how likely readers are to scroll past before the hook lands'],
  ['Acquisition bottleneck', 'the one thing blocking conversion, plus edit experiments to try'],
]

export const audiences = [
  { icon: '◎', title: 'Story & web-novel apps', body: 'Deciding which ad creative actually earns a new reader, not just a click.' },
  { icon: '◇', title: 'Comic & serialized fiction platforms', body: 'Testing cover art and trailer cuts against the genre readers who’ll actually tap.' },
  { icon: '△', title: 'Reader-acquisition marketers', body: 'Defending a creative call before spend goes out, not after the campaign ends.' },
  { icon: '▢', title: 'Creative strategists', body: 'Diagnosing why a beautiful ad still isn’t converting, and what to fix first.' },
  { icon: '♪', title: 'Performance marketing teams', body: 'Ranking a large ad library instead of guessing which creative to push.' },
  { icon: '◈', title: 'Trend & culture teams', body: 'Matching a booming theme to the closest story ads already in the library.' },
  { icon: '◐', title: 'Creators & influencers', body: 'Pointing the same engine at a solo creator’s Reel or a short-form ad instead of a story ad.' },
  { icon: '▷', title: 'Launches & trailers', body: 'Music drops, film trailers, and game or app launches, judged before the spend goes out.' },
  { icon: '✦', title: 'Brand & UGC campaigns', body: 'Ranking brand and creator-made campaign assets exactly the way story creative is ranked.' },
]


export const tiers = [
  {
    name: 'Free',
    for: 'Individual creative teams · trial',
    features: ['Limited single-creative simulations', 'Core reader-intent score', 'Single reader pool'],
  },
  {
    name: 'Team',
    for: 'Marketing & creative teams · monthly',
    flag: 'Core tier',
    features: ['Higher simulation limits', 'Saved reports & creative history', 'Trend checks', 'Edit recommendations'],
  },
  {
    name: 'Growth',
    for: 'Teams running large ad libraries',
    features: [
      'Creative-library search',
      'Campaign workspaces',
      'Batch creative ranking',
      'Trend-to-ad matching',
      'Audience recommendations',
    ],
  },
  {
    name: 'Enterprise / API',
    for: 'Platforms & ad stacks',
    features: ['Integrate with creative libraries', 'Ad platform & campaign dashboards', 'Proprietary performance data', 'API access'],
  },
]

export const visionCards = [
  { title: 'Trend monitoring', body: 'Track the themes, tropes and emotions trending right now.' },
  { title: 'Creative-library matching', body: 'Find ads already in the library that match a booming theme.' },
  { title: 'Batch creative ranking', body: 'Score the whole candidate set, not one ad at a time.' },
  { title: 'Audience recommendations', body: 'Name the reader segment to target for each match.' },
]

export const signals = ['Reader intent', 'Curiosity gap', 'Genre fit', 'Skip risk', 'Trend timing']

// Lines for the illustrative hero ticker.
export const tickerLines = [
  ['share', 'fantasy-romance reader', 'Forbidden love again? Sending this to my book club.'],
  ['watch', 'late-night reader', 'Hook landed in two seconds. Tapped straight through.'],
  ['skip', 'casual scroller', 'Genre wasn’t clear. Skipped at the cover card.'],
  ['save', 'weekend reader', 'Saving this to start this weekend.'],
  ['comment', 'core-genre reader', 'This trope’s been done better, but I’m curious.'],
  ['share', 'group-chat connector', 'This is a group-chat premise, not a like.'],
  ['skip', 'trend-fatigued reader', 'Seen this exact hook four times this week.'],
  ['watch', 'romance-niche reader', 'Exactly my genre. Tapped through the whole ad.'],
  ['like', 'passive reader', 'Nice premise. Double-tap and move on.'],
  ['share', 'micro-community reader', 'Recommending this in my reading group later.'],
]
