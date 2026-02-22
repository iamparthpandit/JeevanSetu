/**
 * LocalStorage utility for emergency contacts.
 * Will be fully implemented in Phase 2.
 */

const CONTACTS_KEY = 'jeevansetu-contacts';

export function getContacts() {
    try {
        const data = localStorage.getItem(CONTACTS_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export function saveContacts(contacts) {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

export function addContact(contact) {
    const contacts = getContacts();
    contacts.push(contact);
    saveContacts(contacts);
}

export function removeContact(index) {
    const contacts = getContacts();
    contacts.splice(index, 1);
    saveContacts(contacts);
}
