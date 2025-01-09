import { PATH_DB } from '../constants/contacts.js';

// Функція повинна коректно обробляти дані та забезпечувати правильне зчитування даних з файлу.
export const readContacts = async () => {
  try {
    const data = await import(PATH_DB);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading contacts: ${error.message}`);
  }
};
