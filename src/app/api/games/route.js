import { supabase } from '../../../lib/supabase';
import { GAMES } from '../../../lib/data';

// GET /api/games — fetch all games (from Supabase if available, else seed data)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('games')
      .select('*')
      .order('id');

    if (error || !data?.length) {
      // Fall back to seed data if Supabase not yet set up
      return Response.json(GAMES);
    }
    return Response.json(data);
  } catch {
    return Response.json(GAMES);
  }
}

// PATCH /api/games — update a game score (admin only)
export async function PATCH(request) {
  const body = await request.json();
  const { id, homeScore, awayScore, status, period, homeTeamId, awayTeamId, time } = body;

  // PIN check (simple — not a substitute for real auth, fine for a tournament)
  const pin = request.headers.get('x-admin-pin');
  if (pin !== process.env.NEXT_PUBLIC_ADMIN_PIN) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { data, error } = await supabase
      .from('games')
      .update({ homeScore, awayScore, status, period, homeTeamId, awayTeamId, time })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
