// dataStore.js
import { writable } from 'svelte/store';

// Create a writable store
export const dataStore = writable([]);

// Function to update the store's value
export function setData(data) {
  dataStore.set(data);
}
