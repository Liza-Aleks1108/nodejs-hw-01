import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is not an array');
    }

    return contacts.length;
  } catch (error) {
    console.error('Error reading contacts:', error.message);
  }
};

console.log(await countContacts());
