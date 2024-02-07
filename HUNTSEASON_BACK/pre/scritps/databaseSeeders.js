import client from "../../config/database.js";
import { seedersQuotes } from "../data/seeders/quotes.js";
import { seedersUsers } from "../data/seeders/users.js";

async function seedData(tableName, data) {
    try {
        for (const item of data) {
            const fields = Object.keys(item).join(',');
            const values = Object.values(item).map(val => typeof val === 'string' ? `'${val}'` : val).join(',');
            await client.execute(`INSERT INTO ${tableName} (${fields}) VALUES (${values});`);
        }
        console.log(`Seed data inserted into ${tableName} table successfully.`);
    } catch (error) {
        console.error(`Error inserting seed data into ${tableName} table:`, error);
    }
}

async function seedAllTables() {
    try {
        await seedData('quotes', seedersQuotes);
        await seedData('users', seedersUsers);
    } finally {
        await client.close();
    }
}

seedAllTables();
