import { PATH_DB } from '../constants/contacts.js';
import { fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Contacts saved successfully');
  } catch (error) {
    console.error('Error saving contacts:', error);
  }
};
