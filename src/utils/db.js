/**
 * IndexedDB utility for Jeevan Setu
 * Uses the 'idb' library for a promise-based IndexedDB wrapper.
 * Will be fully implemented in Phase 2.
 */

import { openDB } from 'idb';

const DB_NAME = 'jeevansetu-db';
const DB_VERSION = 1;

export async function getDB() {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains('emergencies')) {
                db.createObjectStore('emergencies', { keyPath: 'id' });
            }
            if (!db.objectStoreNames.contains('contacts')) {
                db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
            }
        },
    });
}

export async function saveEmergency(data) {
    const db = await getDB();
    await db.put('emergencies', data);
}

export async function getEmergency(id) {
    const db = await getDB();
    return db.get('emergencies', id);
}

export async function getAllEmergencies() {
    const db = await getDB();
    return db.getAll('emergencies');
}
