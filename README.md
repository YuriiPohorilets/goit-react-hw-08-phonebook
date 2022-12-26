# Асинхронний Redux. Селектори та бібліотека Reselect | goit-react-hw-07-phonebook

## Критерії приймання

Використовуй цей шаблон
[React-проекту](https://github.com/goitacademy/react-homework-template#readme) як стартову точку
своєї програми.

- Створено репозиторій `goit-react-hw-07-phonebook`
- Використана бібліотека `Redux Toolkit`

### Книга контактів

Виконайте рефакторинг коду програми «Книга контактів». Видали код, що відповідає за зберігання та
читання контактів з локального сховища, та додай взаємодію з бекендом для зберігання контактів.

#### Бекенд

Створи свій персональний бекенд для розробки за допомогою UI-сервісу
[mockapi.io](https://mockapi.io/projects). Зареєструйся використовуючи свій обліковий запис GitHub.
Створи ресурс `contacts` щоб отримати ендпоінт `/contacts`. Використай конструктор ресурсу та опиши
об'єкт контакту як на ілюстрації.

![img](https://textbook.edu.goit.global/lms-react-homework/v1/uk/img/hw-07/api.png)

#### Форма стану

Додай у стан Redux обробку індикатора завантаження та помилки. Для цього зміни форму стану.

```
{
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ""
}
```

#### Операції

Використовуй функцію [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) для
оголошення асинхронних генераторів екшенів та виконання HTTP-запитів. Обробку екшенів та зміну даних
у стані Redux зроби за допомогою [createSlice](https://redux-toolkit.js.org/api/createSlice).

Оголоси наступні операції:

- `fetchContacts` - одержання масиву контактів (метод GET) запитом. Базовий тип екшену
  `"contacts/fetchAll"`.
- `addContact` - додавання контакту (метод POST). Базовий тип екшену `"contacts/addContact"`.
- `deleteContact` - видалення контакту (метод DELETE). Базовий тип екшену
  `"contacts/deleteContact"`.
