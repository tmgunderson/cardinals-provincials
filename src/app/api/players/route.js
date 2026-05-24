import { supabase } from '../../../lib/supabase';
import { PLAYERS } from '../../../lib/data';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .order('number');

    if (error || !data?.length) return Response.json(PLAYERS);
    return Response.json(data);
  } catch {
    return Response.json(PLAYERS);
  }
}

export async function PATCH(request) {
  const pin = request.headers.get('x-admin-pin');
  if (pin !== process.env.NEXT_PUBLIC_ADMIN_PIN) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { id, name, number, position, goals, assists, pim, gp } = body;
  const points = (goals || 0) + (assists || 0);

  try {
    const { data, error } = await supabase
      .from('players')
      .update({ name, number, position, goals, assists, points, pim, gp })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
