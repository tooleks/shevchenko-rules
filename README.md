## Набір правил для бібліотек "shevchenko" для відмінювання український прізвищ, імен та по батькові

### Правила

Вихідний файл набору правил знаходиться у директорії `./dist/rules.json`.

### Структура правила

```JSON
{
    "description": "перша відміна / чоловічий, жіночий роди / тверда група / закінчення на -а",
    "types": ["firstName"],
    "priority": 1,
    "gender": ["male", "female"],
    "regexp": {
      "find": "а$",
      "modify": "а$"
    },
    "applyType": "replace",
    "examples": [
      "анна"
    ],
    "cases": {
      "nominative": [""],
      "genitive": ["и"],
      "dative": ["і"],
      "accusative": ["у"],
      "ablative": ["ою"],
      "locative": ["і"],
      "vocative": ["о"]
    }
}
```

 - `description`:`string` - опис правила;
 - `types`:`array<sring>` - масив обмежень застосування правила; можливі варіанти: `lastName` - прізвище, `firstName` - ім'я, `middleName` - по батькові; якщо атрибут відсутній, то правило є універсальним;
 - `priority`:`integer` - пріорітет правила (чим більше число, тим пріорітетнішим є правило);
 - `gender`:`array<string>` - масив родів, до яких застосовується правило; можливі варіанти: `male` - чоловічий рід, `female` - жіночий рід;
 - `regexp.find`:`string` - регулярний вираз для пошуку співпадінь символів у слові для застосування правила;
 - `regexp.modify`:`string` - регулярний вираз для заміни символів у слові; використовується тільки тоді, коли `applyType == "replace"`;
 - `applyType`:`string` - спосіб застосування правила; можливі варіанти: `append` - символи будуть додаватися до слова, `replace` - символи будуть замінятися за правилом з атрибута `regexp.modify`;
 - `examples`:`array<string>` - масив із словами варіантами застосування правила;
 - `cases.nominative`:`string` - символи додавання або заміни для називного відмінка;
 - `cases.genitive`:`string` - символи додавання або заміни для родового відмінка;
 - `cases.dative`:`string` - символи додавання або заміни для давального відмінка;
 - `cases.accusative`:`string` - символи додавання або заміни для знахідного відмінка;
 - `cases.ablative`:`string` - символи додавання або заміни для орудного відмінка;
 - `cases.locative`:`string` - символи додавання або заміни для місцевого відмінка;
 - `cases.vocative`:`string` - символи додавання або заміни для кличного відмінка;

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
