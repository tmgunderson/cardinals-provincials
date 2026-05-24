// ─────────────────────────────────────────────────────────
// SEED DATA  — replace with real data as it comes in
// ─────────────────────────────────────────────────────────

export const TOURNAMENT = {
  name: 'RMLL Alberta Major Female Provincials',
  dates: 'July 17–19, 2026',
  venue: 'Brentwood Arena',
  address: '3030 Brentwood Rd NW, Calgary, AB T2L 1K8',
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL || '',
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'cardinalsjrladieslax',
};

export const TEAMS = [
  {
    id: 'cardinals',
    name: 'Calgary Cardinals',
    city: 'Calgary',
    abbr: 'CGY',
    colors: { primary: '#E8A000', secondary: '#0a0a0a', accent: '#C0392B' },
    logo: '/cardinals-logo.png',
    coach: 'Dean Halcro',
    staff: [
      'Dean Halcro – Head Coach',
      'Srecko Zizakovic – Assistant Coach',
      'Kevin Morey – Assistant Coach',
      'Regan Kane – Manager',
      'Ali Imperato – Trainer',
      'Jolan Morey – Equipment',
      'Lyle Michaluk – Volunteer',
    ],
    instagram: 'cardinalsjrladieslax',
    sportzsoft: 'https://www.sportzsoft.com/team/teamWeb.dll/TeamSite?TeamId=3285FF162BDA26F0FA8A40340AEC52A3',
    record: { w: 0, l: 0, t: 0 },
    bio: 'The Calgary Cardinals are a Junior Ladies lacrosse team competing in the Rocky Mountain Lacrosse League (RMLL). Hosting the 2026 Alberta Major Female Provincial Championships at Brentwood Arena.',
  },
  { id: 'team-tbd-1', name: 'TBD', city: '', abbr: 'TBD', colors: { primary: '#888', secondary: '#333' }, coach: '', staff: [], record: { w: 0, l: 0, t: 0 }, bio: 'Team to be confirmed by RMLL.' },
  { id: 'team-tbd-2', name: 'TBD', city: '', abbr: 'TBD', colors: { primary: '#888', secondary: '#333' }, coach: '', staff: [], record: { w: 0, l: 0, t: 0 }, bio: 'Team to be confirmed by RMLL.' },
  { id: 'team-tbd-3', name: 'TBD', city: '', abbr: 'TBD', colors: { primary: '#888', secondary: '#333' }, coach: '', staff: [], record: { w: 0, l: 0, t: 0 }, bio: 'Team to be confirmed by RMLL.' },
];

export const PLAYERS = [
  { id: 1,  slug: 'ella-badry',        teamId: 'cardinals', number: '2',  name: 'Ella Badry',        age: 21, position: 'Player', photo: '/players/ella-badry.jpg',        ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 2,  slug: 'emily-bailey',      teamId: 'cardinals', number: '32', name: 'Emily Bailey',      age: 20, position: 'Player', photo: '/players/emily-bailey.jpg',      ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 3,  slug: 'carly-bertulli',    teamId: 'cardinals', number: '44', name: 'Carly Bertulli',    age: 17, position: 'Player', photo: '/players/carly-bertulli.jpg',    ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 4,  slug: 'qiana-brown',       teamId: 'cardinals', number: '33', name: 'Qiana Brown',       age: 19, position: 'Player', photo: '/players/qiana-brown.jpg',       ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 5,  slug: 'giselle-coulombe',  teamId: 'cardinals', number: '11', name: 'Giselle Coulombe',  age: 21, position: 'Player', photo: '/players/giselle-coulombe.jpg',  ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 6,  slug: 'cameron-de-paiva',  teamId: 'cardinals', number: '21', name: 'Cameron De Paiva',  age: 19, position: 'Player', photo: '/players/cameron-de-paiva.jpg',  ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 7,  slug: 'kayden-gunderson',  teamId: 'cardinals', number: '9',  name: 'Kayden Gunderson',  age: 19, position: 'Player', photo: '/players/kayden-gunderson.jpg',  ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 8,  slug: 'kate-halcro',       teamId: 'cardinals', number: '77', name: 'Kate Halcro',       age: 20, position: 'Player', photo: '/players/kate-halcro.jpg',       ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 9,  slug: 'avery-heikamp',     teamId: 'cardinals', number: '7',  name: 'Avery Heikamp',     age: 18, position: 'Player', photo: '/players/avery-heikamp.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 10, slug: 'saedrie-hussein',   teamId: 'cardinals', number: '88', name: 'Saedrie Hussein',   age: 19, position: 'Player', photo: '/players/saedrie-hussein.jpg',   ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 11, slug: 'olivia-imperato',   teamId: 'cardinals', number: '22', name: 'Olivia Imperato',   age: 19, position: 'Player', photo: '/players/olivia-imperato.jpg',   ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 12, slug: 'holly-jardine',     teamId: 'cardinals', number: '8',  name: 'Holly Jardine',     age: 18, position: 'Player', photo: '/players/holly-jardine.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 13, slug: 'addison-jozsa',     teamId: 'cardinals', number: '12', name: 'Addison Jozsa',     age: 18, position: 'Player', photo: '/players/addison-jozsa.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 14, slug: 'bryn-kane',         teamId: 'cardinals', number: '16', name: 'Bryn Kane',         age: 20, position: 'Player', photo: '/players/bryn-kane.jpg',         ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 15, slug: 'rylee-kane',        teamId: 'cardinals', number: '17', name: 'Rylee Kane',        age: 20, position: 'Player', photo: '/players/rylee-kane.jpg',        ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 16, slug: 'adeline-kelcher',   teamId: 'cardinals', number: '72', name: 'Adeline Kelcher',   age: 18, position: 'Player', photo: '/players/adeline-kelcher.jpg',   ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 17, slug: 'kait-mawhinney',    teamId: 'cardinals', number: '24', name: 'Kait Mawhinney',    age: 18, position: 'Player', photo: '/players/kait-mawhinney.jpg',    ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 18, slug: 'abby-mccarthy',     teamId: 'cardinals', number: '3',  name: 'Abby McCarthy',     age: 18, position: 'Player', photo: '/players/abby-mccarthy.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 19, slug: 'avery-michaluk',    teamId: 'cardinals', number: '15', name: 'Avery Michaluk',    age: 17, position: 'Player', photo: '/players/avery-michaluk.jpg',    ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 20, slug: 'paige-murphy',      teamId: 'cardinals', number: '10', name: 'Paige Murphy',      age: 21, position: 'Player', photo: '/players/paige-murphy.jpg',      ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 21, slug: 'gianina-mutiso',    teamId: 'cardinals', number: '19', name: 'Gianina Mutiso',    age: 20, position: 'Player', photo: '/players/gianina-mutiso.jpg',    ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 22, slug: 'isabella-orr',      teamId: 'cardinals', number: '29', name: 'Isabella Orr',      age: 17, position: 'Goalie', photo: '/players/isabella-orr.jpg',      ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 23, slug: 'trinity-rose',      teamId: 'cardinals', number: '23', name: 'Trinity Rose',      age: 20, position: 'Player', photo: '/players/trinity-rose.jpg',      ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 24, slug: 'taylor-schubert',   teamId: 'cardinals', number: '14', name: 'Taylor Schubert',   age: 20, position: 'Player', photo: '/players/taylor-schubert.jpg',   ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 25, slug: 'elsa-shepherd',     teamId: 'cardinals', number: '54', name: 'Elsa Shepherd',     age: 19, position: 'Player', photo: '/players/elsa-shepherd.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 26, slug: 'olivia-supino',     teamId: 'cardinals', number: '98', name: 'Olivia Supino',     age: 20, position: 'Goalie', photo: '/players/olivia-supino.jpg',     ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 27, slug: 'kate-thomson',      teamId: 'cardinals', number: '20', name: 'Kate Thomson',      age: 18, position: 'Player', photo: '/players/kate-thomson.jpg',      ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 28, slug: 'ava-weir',          teamId: 'cardinals', number: '26', name: 'Ava Weir',          age: 18, position: 'Player', photo: '/players/ava-weir.jpg',          ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 29, slug: 'sadie-wyman',       teamId: 'cardinals', number: '85', name: 'Sadie Wyman',       age: 17, position: 'Player', photo: '/players/sadie-wyman.jpg',       ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 30, slug: 'mia-yuris',         teamId: 'cardinals', number: '6',  name: 'Mia Yuris',         age: 20, position: 'Player', photo: '/players/mia-yuris.jpg',         ncaaLink: null, goals: 0, assists: 0, pim: 0, gp: 0 },
];

export const GAMES = [
  // Day 1 — July 17
  { id: 'g1', day: 'Thursday', date: 'July 17', time: '10:00 AM', homeTeamId: 'cardinals', awayTeamId: 'team-tbd-1', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  { id: 'g2', day: 'Thursday', date: 'July 17', time: '2:00 PM',  homeTeamId: 'team-tbd-2', awayTeamId: 'cardinals', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  { id: 'g3', day: 'Thursday', date: 'July 17', time: '6:00 PM',  homeTeamId: 'team-tbd-1', awayTeamId: 'team-tbd-3', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  // Day 2 — July 18
  { id: 'g4', day: 'Friday',   date: 'July 18', time: '10:00 AM', homeTeamId: 'cardinals', awayTeamId: 'team-tbd-3', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  { id: 'g5', day: 'Friday',   date: 'July 18', time: '2:00 PM',  homeTeamId: 'team-tbd-2', awayTeamId: 'team-tbd-1', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  { id: 'g6', day: 'Friday',   date: 'July 18', time: '6:00 PM',  homeTeamId: 'team-tbd-3', awayTeamId: 'cardinals', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'round-robin' },
  // Day 3 — July 19
  { id: 'g7', day: 'Saturday', date: 'July 19', time: '12:00 PM', homeTeamId: 'team-tbd-1', awayTeamId: 'team-tbd-2', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'bronze', label: '🥉 Bronze Medal Game' },
  { id: 'g8', day: 'Saturday', date: 'July 19', time: '3:30 PM',  homeTeamId: 'cardinals',   awayTeamId: 'team-tbd-1', homeScore: 0, awayScore: 0, status: 'upcoming', period: '', venue: 'Brentwood Arena', gameType: 'gold',   label: '🏆 Gold Medal Game' },
];

export const FUNDRAISERS = [
  { id: 'fiftyfifty',  icon: '🎟️', title: '50/50 Draw',          desc: 'Buy tickets at the arena all weekend. Jackpot drawn after the Gold Medal game.',               pricing: '$2 each · 3 for $5' },
  { id: 'playerboard', icon: '🎯', title: 'Player Board',         desc: 'Pick a Cardinals player number — if they score, you\'re entered to win a prize.',              pricing: '$10 per square' },
  { id: 'stickauction',icon: '🏒', title: 'Signed Stick Auction', desc: 'Players and coaches sign sticks for a silent auction running all weekend.',                    pricing: 'Silent Auction · All Weekend' },
  { id: 'photos',      icon: '📸', title: 'Action Photos',        desc: 'Pro action shots of your player. Digital download delivered within 48 hours.',                  pricing: '$20 per player package' },
  { id: 'concession',  icon: '🍕', title: 'Concession Stand',     desc: 'Hot dogs, nachos, drinks & baked goods. Cash & tap. Cardinals-run all weekend.',               pricing: 'All Weekend · Arena Lobby' },
  { id: 'sponsorship', icon: '🌟', title: 'Jersey Sponsorship',   desc: 'Your business logo in the tournament program. Three tiers available.',                         pricing: '$100 · $250 · $500 tiers' },
];

export const APPAREL = [
  { id: 'tshirt',    icon: '👕', name: 'Tournament T-Shirt', price: 30,  description: 'Black & gold · Sizes XS–3XL · Screen printed' },
  { id: 'cap',       icon: '🧢', name: 'Cardinals Cap',      price: 25,  description: 'Structured snapback · One size · Embroidered' },
  { id: 'gaiter',    icon: '🧣', name: 'Neck Gaiter',        price: 20,  description: 'Black with gold Cardinals wordmark' },
  { id: 'jersey',    icon: '🎽', name: 'Dry-Fit Jersey',     price: 55,  description: 'Performance fabric · Custom name/number +$10' },
  { id: 'hoodie',    icon: '🧥', name: 'Zip-Up Hoodie',      price: 65,  description: 'Heavyweight · Full zip · Embroidered crest' },
  { id: 'bag',       icon: '🎒', name: 'Drawstring Bag',     price: 22,  description: 'Black with gold Cardinals logo' },
  { id: 'youth',     icon: '👕', name: 'Youth T-Shirt',      price: 22,  description: 'Sizes YS–YXL · Same design as adult tee' },
  { id: 'pin',       icon: '🏅', name: 'Provincials Pin',    price: 8,   description: 'Collectible hard enamel pin · 2026 edition' },
];

export const SPONSORS = [
  // Platinum — title sponsors
  // { id: 'example', tier: 'platinum', name: 'Company Name', logo: '/sponsors/example.png', url: 'https://example.com', tagline: 'Optional tagline' },

  // Gold — major sponsors
  // { id: 'example2', tier: 'gold', name: 'Company Name', logo: '/sponsors/example2.png', url: 'https://example.com' },

  // Silver — supporting sponsors
  // { id: 'example3', tier: 'silver', name: 'Company Name', logo: null, url: 'https://example.com' },

  // Community — local supporters
  // { id: 'example4', tier: 'community', name: 'Local Business', logo: null, url: null },
];

export const HOTELS = [
  { name: 'Best Western Village Park Inn', tag: 'Closest Hotel', addr: '1804 Crowchild Trail NW, Calgary, AB T2M 3Y7', dist: '~5 min drive', notes: 'Pet friendly. Ask about RMLL group rate.', map: 'https://maps.google.com/?q=Best+Western+Village+Park+Inn+Calgary' },
  { name: 'Sandman Hotel Calgary NW',      tag: 'Family Pick',   addr: '888 Country Hills Blvd NE, Calgary, AB',        dist: '~15 min drive', notes: 'Pool on-site. Good value for families.',   map: 'https://maps.google.com/?q=Sandman+Hotel+Calgary+NW' },
  { name: 'Holiday Inn Calgary-Macleod',   tag: 'Budget Option', addr: '4206 Macleod Trail S, Calgary, AB',             dist: '~20 min drive', notes: 'Affordable. Indoor pool.',                 map: 'https://maps.google.com/?q=Holiday+Inn+Calgary+Macleod' },
];
