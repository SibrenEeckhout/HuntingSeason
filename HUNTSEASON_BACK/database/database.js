// database.ts

import { Client } from 'https://deno.land/x/mysql/mod.ts';

const client = await new Client().connect({
  hostname: 'localhost',
  username: 'root',
  password: 'root',
  db: 'huntseason',
});

export default client;
