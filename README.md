# Набір правил для JavaScript бібліотеки "shevchenko" для відмінювання українських прізвищ, імен та по батькові

## Правила

Вихідний файл набору правил відмінювання знаходиться у директорії `./dist/rules.json` у форматі `JSON`.

### Структура правила

```JSON
{
  "description": "перша відміна / чоловічий, жіночий роди / тверда група / на -а",
  "examples": [
    "анна"
  ],
  "partOfSpeech": "noun",
  "gender": [
    "male",
    "female"
  ],
  "priority": 1,
  "usage": [],
  "pattern": {
    "find": "а$",
    "modify": "(.{1})$"
  },
  "grammaticalCases": {
    "nominative": [],
    "genitive": [
      {
        "0": {
          "type": "replace",
          "value": "и"
        }
      }
    ],
    "dative": [
      {
        "0": {
          "type": "replace",
          "value": "і"
        }
      }
    ],
    "accusative": [
      {
        "0": {
          "type": "replace",
          "value": "у"
        }
      }
    ],
    "ablative": [
      {
        "0": {
          "type": "replace",
          "value": "ою"
        }
      }
    ],
    "locative": [
      {
        "0": {
          "type": "replace",
          "value": "і"
        }
      }
    ],
    "vocative": [
      {
        "0": {
          "type": "replace",
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

Ця команда створить (оновить) файл `./dist/rules.json`, що складається з правил, які містяться в директорії `./rules` відсортованих за пріорітетом (більший > менший).
