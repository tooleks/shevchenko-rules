## Набір правил для бібліотек "shevchenko" для відмінювання українських прізвищ, імен та по батькові

### Правила

Вихідний файл набору правил відмінювання знаходиться у директорії `./dist/rules.json`.

### Структура правила

```JSON
{
  "description": "перша відміна / чоловічий, жіночий роди / мішана група / на -а",
  "examples": ["саша"],
  "pos": "noun",
  "gender": ["male", "female"],
  "priority": 2,
  "usages": [],
  "regexp": {
    "find": "(дж|ж|ч|ш)а$",
    "modify": "(.{1})$"
  },
  "inflectionCases": {
    "nominative": [],
    "genitive": [
       {
         "0": {"type": "replace", "value": "і"}
       }
    ],
    "dative": [
      {
        "0": {"type": "replace", "value": "і"}
      }
    ],
    "accusative": [
      {
        "0": {"type": "replace", "value": "у"}
      }
    ],
    "ablative": [
      {
        "0": {"type": "replace", "value": "ею"}
      }
    ],
    "locative": [
      {
        "0": {"type": "replace", "value": "і"}
      }
    ],
    "vocative": [
      {
        "0": {"type": "replace", "value": "о"}
      }
    ]
  }
}
```

 - `description`:`string` - опис правила;
 - `examples`:`array<string>` - масив із словами варіантами застосування правила;
 - `pos`:`string` - частина мови, для якої правило може застосовуватися; доступні варіанти: `noun` - іменник, `adjective` - прикметник;
 - `gender`:`array<string>` - масив родів, до яких застосовується правило; доступні варіанти: `male` - чоловічий рід, `female` - жіночий рід;
 - `priority`:`integer` - пріорітет правила (чим більше число, тим пріорітетнішим є правило);
 - `usages`:`array<sring>` - масив обмежень застосування правила; доступні варіанти: `lastName` - прізвище, `firstName` - ім'я, `middleName` - по батькові; якщо масив є порожнім, то правило є універсальним;
 - `regexp.find`:`string` - регулярний вираз для пошуку співпадінь символів у слові для застосування правила;
 - `regexp.modify`:`string` - регулярний вираз для заміни символів у слові; повинен завжди містити групи;
 - `inflectionCases`:`object` - об'єкт правил модифікаторів для відмінків; список модифікаторів: `nominative` - модифікатор називного відмінку, `genitive` - модифікатор родового відмінку, `dative` - модифікатор давального відмінку, `accusative` - модифікатор знахідного відмінку, `ablative` - модифікатор орудного відмінку, `locative` - модифікатор місцевого відмінку, `vocative` - модифікатор кличного відмінку;
 - `inflectionCases.modifier`:`array<object>` - масив правил модифікації;
 - `inflectionCases.modifier.rule`:`array<object>` - об'єкт правила модифікації, де назва атрибута рівна порядковому номеру групи в `regexp.modify`, в якій потрібно провести модифікацію;
 - `inflectionCases.modifier.rule.groupNumber.type`:`array<object>` - тип модифікації; доступні значення: `replace` - група буде замінена на значення, `append` - значення буде додано до групи;
 - `inflectionCases.modifier.rule.groupNumber.value`:`array<object>` - значення яке буде використане у модифікації;

### Для розробників

#### Встановлення

Запустіть наступну команду (в директорії `./`) для встановлення залежностей.

```
npm install
```

#### Побудова вихідного файлу правил

Запустіть наступну команду (в директорії `./`) для побудови вихідного файлу правил.

```
npm run build
```

Ця команда створить (оновить) файл `./dist/rules.json`, що складається з правил, які містяться в директорії `./rules` відсортованих за пріорітетом (більший -> менший).
