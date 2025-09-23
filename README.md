# eslint-config-rtkit

Набор конфигов eslint для проектов Ростелеком ИТ. 

Включает в себя варианты использования на проектах с JavaScript, TypeScript в связке с React или без.

### Требования
```node >= 18```

### Установка 
 ```bash
yarn add eslint-config-rtkit -D
```
или

```bash
npm install eslint-config-rtkit --save-dev
```
**Важно:** Этот пакет сам установит все зависимости которые ему нужны, больше ничего ставить не требуется. Даже eslint.
Будьте внимательны чтобы локальный Prettier не перебивал Prettier конфига.

**Для версии >= 2:**
Используется [flat config](https://eslint.org/docs/latest/use/configure/configuration-files).

Далее в корне проекта необходимо создать файл ```eslint.config.mjs```. В общем случае он будет выглядеть так:

```javascript
export default [
  ...rtkit.configs.recommended,
  // Other configs
];
```

Готово! Возможно понадобится перезагрузить вашу IDE или просто рестартнуть сервер eslint и всё заработает.

**Для версии >= 1:**

Далее в корне проекта необходимо создать файл ```.eslintrc```. В общем случае он будет выглядеть так:
```js
{
  "extends": []
}
```
В этом массиве ```extends``` нужно перечислить конфиги, которые подходят вашему проекту:
- проект на чистом JavaScript: ```"extends": ["rtkit"]```
- проект на чистом TypeScript: ```"extends": ["rtkit/ts"]```
- проект на JavaScript + React: ```"extends": ["rtkit", "rtkit/react"]```
- проект на TypeScript + React: ```"extends": ["rtkit/ts", "rtkit/react"]```

Готово! Возможно понадобится перезагрузить вашу IDE или просто рестартнуть сервер eslint и всё заработает.

### Конфиги и правила
Есть возможность импортировать конфиги точечно для версии >= 2.
- `rtkit.configs.common`
- `rtkit.configs.prettier`
- `rtkit.configs.import`
- `rtkit.configs.react`
- `rtkit.configs.jsxA11y`
- `rtkit.configs.typescript`

```javascript
export default [
  ...rtkit.configs.import,
  ...rtkit.configs.typescript,
  // Other configs
];
```
Есть возможность импортировать правила точечно для версии >= 2.

- `rtkit.rules.recommended`
- `rtkit.rules.common`
- `rtkit.rules.import`
- `rtkit.rules.prettier`
- `rtkit.rules.react`
- `rtkit.rules.destructuring`
- `rtkit.rules.jsxA11y`
- `rtkit.rules.typescript`

```javascript
export default [
  {
    rules: {
      ...rtkit.rules.common,
    // Your rules
    },
  },
  // Other configs
];
```

### Автофикс при сохранении файла в VS Code
В настройках VS Code (в формате JSON) вставьте следующие строки
```json
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```
### Семантичность версий
- **<span style="color:green">patch</span>** - исправление багов, опечаток, оформление readme или package.json т.е. изменения не затрагивающие правила линтинга;
- **<span style="color:orange">minor</span>** - добавление/изменение правил в конфиг.
- **<span style="color:red">major</span>** - Апдейт всех зависимостей пакета.
