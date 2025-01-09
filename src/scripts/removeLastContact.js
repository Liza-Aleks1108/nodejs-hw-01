import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is not an array');
    }

    // Перевірка, чи масив не порожній
    if (contacts.length === 0) {
      console.log('No contacts to remove.');
      return;
    }

    // Видалення останнього елемента масиву
    contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error reading contacts:', error.message);
  }
};

removeLastContact();
