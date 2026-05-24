-- ─────────────────────────────────────────────────────────
-- Cardinals Provincials — Supabase Schema
-- Run this in your Supabase SQL editor to set up the tables
-- ─────────────────────────────────────────────────────────

-- GAMES table
create table if not exists games (
  id            text primary key,
  day           text not null,
  date          text,
  time          text,
  "homeTeamId"  text,
  "awayTeamId"  text,
  "homeScore"   integer default 0,
  "awayScore"   integer default 0,
  status        text default 'upcoming', -- upcoming | live | final
  period        text default '',
  venue         text default 'Brentwood Arena',
  "gameType"    text default 'round-robin',
  label         text,
  created_at    timestamptz default now()
);

-- PLAYERS table
create table if not exists players (
  id        integer primary key,
  "teamId"  text,
  number    text,
  name      text,
  position  text,
  hometown  text,
  goals     integer default 0,
  assists   integer default 0,
  points    integer default 0,
  pim       integer default 0,
  gp        integer default 0,
  created_at timestamptz default now()
);

-- Allow public read access (fans can see scores)
alter table games   enable row level security;
alter table players enable row level security;

create policy "Public read games"   on games   for select using (true);
create policy "Public read players" on players for select using (true);

-- Only allow updates via service role (your API does this server-side)
-- For the mock/PIN approach, also allow anonymous updates temporarily:
create policy "Anon update games"   on games   for update using (true);
create policy "Anon update players" on players for update using (true);

-- ─────────────────────────────────────────────────────────
-- Seed initial data (run after table creation)
-- ─────────────────────────────────────────────────────────

insert into games (id, day, date, time, "homeTeamId", "awayTeamId", "homeScore", "awayScore", status, period, venue, "gameType", label) values
  ('g1','Thursday','July 17','10:00 AM','cardinals','team-tbd-1',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g2','Thursday','July 17','2:00 PM','team-tbd-2','cardinals',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g3','Thursday','July 17','6:00 PM','team-tbd-1','team-tbd-3',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g4','Friday','July 18','10:00 AM','cardinals','team-tbd-3',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g5','Friday','July 18','2:00 PM','team-tbd-2','team-tbd-1',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g6','Friday','July 18','6:00 PM','team-tbd-3','cardinals',0,0,'upcoming','','Brentwood Arena','round-robin',null),
  ('g7','Saturday','July 19','12:00 PM','team-tbd-1','team-tbd-2',0,0,'upcoming','','Brentwood Arena','bronze','🥉 Bronze Medal Game'),
  ('g8','Saturday','July 19','3:30 PM','cardinals','team-tbd-1',0,0,'upcoming','','Brentwood Arena','gold','🏆 Gold Medal Game')
on conflict (id) do nothing;
