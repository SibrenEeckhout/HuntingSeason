import { exec } from "https://deno.land/x/exec/mod.ts";

// Function to run table creator script
async function createTables() {
    try {
        await exec("deno run --unstable --allow-all ./pre/scritps/databaseTables.js");
        console.log("Tables created successfully.");
    } catch (error) {
        console.error("Error creating tables:", error);
    }
}

// Function to run seeder script
async function seedData() {
    try {
        await exec("deno run --unstable --allow-all ./pre/scritps/databaseSeeders.js");
        console.log("Seed data inserted successfully.");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
}

// Run table creator script first
await createTables();

// Run seeder script after table creator
await seedData();

