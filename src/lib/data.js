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
    logo: null,
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
  // Replace with real names and numbers once roster is confirmed
  { id: 1, teamId: 'cardinals', number: '2',  name: 'Player Name', position: 'Attack',  hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 2, teamId: 'cardinals', number: '4',  name: 'Player Name', position: 'Midfield', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 3, teamId: 'cardinals', number: '7',  name: 'Player Name', position: 'Defence', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 4, teamId: 'cardinals', number: '9',  name: 'Player Name', position: 'Attack',  hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 5, teamId: 'cardinals', number: '10', name: 'Player Name', position: 'Midfield', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 6, teamId: 'cardinals', number: '12', name: 'Player Name', position: 'Defence', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 7, teamId: 'cardinals', number: '14', name: 'Player Name', position: 'Goalie',  hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 8, teamId: 'cardinals', number: '17', name: 'Player Name', position: 'Attack',  hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 9, teamId: 'cardinals', number: '19', name: 'Player Name', position: 'Midfield', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 10,teamId: 'cardinals', number: '22', name: 'Player Name', position: 'Defence', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 11,teamId: 'cardinals', number: '24', name: 'Player Name', position: 'Attack',  hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
  { id: 12,teamId: 'cardinals', number: '27', name: 'Player Name', position: 'Midfield', hometown: 'Calgary, AB', goals: 0, assists: 0, pim: 0, gp: 0 },
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

export const HOTELS = [
  { name: 'Best Western Village Park Inn', tag: 'Closest Hotel', addr: '1804 Crowchild Trail NW, Calgary, AB T2M 3Y7', dist: '~5 min drive', notes: 'Pet friendly. Ask about RMLL group rate.', map: 'https://maps.google.com/?q=Best+Western+Village+Park+Inn+Calgary' },
  { name: 'Sandman Hotel Calgary NW',      tag: 'Family Pick',   addr: '888 Country Hills Blvd NE, Calgary, AB',        dist: '~15 min drive', notes: 'Pool on-site. Good value for families.',   map: 'https://maps.google.com/?q=Sandman+Hotel+Calgary+NW' },
  { name: 'Holiday Inn Calgary-Macleod',   tag: 'Budget Option', addr: '4206 Macleod Trail S, Calgary, AB',             dist: '~20 min drive', notes: 'Affordable. Indoor pool.',                 map: 'https://maps.google.com/?q=Holiday+Inn+Calgary+Macleod' },
];
