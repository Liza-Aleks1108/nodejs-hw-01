import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    // Читання поточних контактів з файлу
    const contacts = await readContacts();

    // Перевіряємо, чи є contacts масивом
    if (!Array.isArray(contacts)) {
      console.error('Contacts data is not an array');
      return;
    }

    // Додавання нових контактів до наявного масиву
    const newContacts = [...contacts];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    // Запис оновленого масиву контактів у файл
    await writeContacts(newContacts);

    console.log(`Generated and saved ${number} new contacts.`);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Вказуємо кількість контактів, яку треба згенерувати
const count = 3;
await generateContacts(count);
