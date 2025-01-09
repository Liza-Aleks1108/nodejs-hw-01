import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const contacts = JSON.parse(data);

    if (!Array.isArray(contacts)) {
      throw new Error('Contacts data is not an array');
    }

    const updatedContacts = [];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error reading contacts:', error.message);
  }
};

removeAllContacts();
