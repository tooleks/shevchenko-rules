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

### Опис правила

 - `description`:`string` - опис правила;
 - `examples`:`array<string>` - масив із словами варіантами застосування правила;
 - `partOfSpeech`:`string` - частина мови, для якої правило може застосовуватися; доступні варіанти: `noun` - іменник, `adjective` - прикметник;
 - `gender`:`array<string>` - масив родів, до яких застосовується правило; доступні варіанти: `male` - чоловічий рід, `female` - жіночий рід;
 - `priority`:`integer` - пріорітет правила (чим більше число, тим пріорітетнішим є правило);
 - `usage`:`array<sring>` - масив обмежень застосування правила; доступні варіанти: `lastName` - прізвище, `firstName` - ім'я, `middleName` - по батькові; якщо масив є порожнім, то правило є універсальним;
 - `pattern.find`:`string` - регулярний вираз для пошуку співпадінь символів у слові для застосування правила;
 - `pattern.modify`:`string` - регулярний вираз для заміни символів у слові; повинен завжди містити групи;
 - `grammaticalCases`:`object` - об'єкт правил модифікаторів для відмінків; список модифікаторів: `nominative` - модифікатор називного відмінку, `genitive` - модифікатор родового відмінку, `dative` - модифікатор давального відмінку, `accusative` - модифікатор знахідного відмінку, `ablative` - модифікатор орудного відмінку, `locative` - модифікатор місцевого відмінку, `vocative` - модифікатор кличного відмінку;
 - `grammaticalCases.modifier`:`array<object>` - масив правил модифікації;
 - `grammaticalCases.modifier.rule`:`array<object>` - об'єкт правила модифікації, де назва атрибута рівна порядковому номеру групи в `regexp.modify`, в якій потрібно провести модифікацію;
 - `grammaticalCases.modifier.rule.groupNumber.type`:`string` - тип модифікації; доступні значення: `replace` - група буде замінена на значення, `append` - значення буде додано до групи;
 - `grammaticalCases.modifier.rule.groupNumber.value`:`string` - значення яке буде використане у модифікації;

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
