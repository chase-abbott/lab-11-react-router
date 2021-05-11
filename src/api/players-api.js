import request from 'superagent';

const URL = '/api/players';

export async function getPlayers() {
  const response = await request.get(URL);

  return response.body;
}

export async function getPlayerById(id) {
  const response = await request.get(`${URL}/${id}`);

  return response.body;
}
