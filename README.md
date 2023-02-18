# Набір правил для JavaScript бібліотеки "shevchenko" для відмінювання українських прізвищ, імен та по батькові

## Правила

Вихідний файл набору правил відмінювання знаходиться у директорії `./dist/declension-rules.json` у форматі `JSON`.

### Структура правила

```JSON
{
  "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -а",
  "examples": [
    "анна"
  ],
  "wordClass": "noun",
  "gender": [
    "masculine",
    "feminine"
  ],
  "priority": 1,
  "application": ['givenName', 'patronymicName', 'familyName'],
  "pattern": {
    "find": "а$",
    "modify": "(.{1})$"
  },
  "grammaticalCases": {
    "nominative": [],
    "genitive": [
      {
        "0": {
          "action": "replace",
          "value": "и"
        }
      }
    ],
    "dative": [
      {
        "0": {
          "action": "replace",
          "value": "і"
        }
      }
    ],
    "accusative": [
      {
        "0": {
          "action": "replace",
          "value": "у"
        }
      }
    ],
    "ablative": [
      {
        "0": {
          "action": "replace",
          "value": "ою"
        }
      }
    ],
    "locative": [
      {
        "0": {
          "action": "replace",
          "value": "і"
        }
      }
    ],
    "vocative": [
      {
        "0": {
          "action": "replace",
          "value": "о"
        }
      }
    ]
  }
}
```

## Для розробників

### Встановлення

Запустіть наступну команду (в директорії `./`) для встановлення залежностей.

```
npm install
```

### Побудова вихідного файлу правил

Запустіть наступну команду (в директорії `./`) для побудови вихідного файлу правил.

```
npm run build
```

Ця команда створить (оновить) файл `./dist/declension-rules.json`, що складається з правил, які містяться в директорії `./rules` відсортованих за пріорітетом (більший > менший).
