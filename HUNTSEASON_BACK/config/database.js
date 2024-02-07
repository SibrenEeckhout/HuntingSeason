import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { load } from "https://deno.land/std@0.214.0/dotenv/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const env = await load();

const dbConfig = {
  hostname: env["URL"],
  username: env["NAME"],
  password: env["PASSWORD"],
  db: env["DATABASE"], // Replace with your database name
};

const client = await new Client().connect({
    hostname: dbConfig.hostname,
    username: dbConfig.username,
    password: dbConfig.password,
    db: dbConfig.db,
});

export default client;
