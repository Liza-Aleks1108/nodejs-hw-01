import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    // Читання поточних контактів з файлу
    const contacts = await readContacts();

    // Перевіряємо, чи є contacts масивом
    if (!Array.isArray(contacts)) {
      console.error('Contacts data is not an array');
      return;
    }

    // Генерація одного нового контакту
    const newContact = [...contacts, createFakeContact()];

    // Додавання нового контакту до масиву
    contacts.push(newContact);

    // Запис оновленого масиву контактів у файл
    await writeContacts(newContact);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

addOneContact();
