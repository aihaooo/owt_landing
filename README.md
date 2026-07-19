# OWT Rewriter лендинг

промо страница моего сервиса OWT Rewriter
**анимированный mesh градиент на WebGL, glassmorphism, секции возможностей, тарифов и FAQ

## стек

- чистый HTML + CSS (CSS-переменные, нативный CSS-nesting, `clamp()` для fluid-типографики)
- webGL mesh-градиент без зависимостей (`js/mesh.js`)
- [Vite] как дев сервер и сборщик

## запуск

```bash
npm install
npm run dev 
npm run build    
```

## настройка

- **цвета градиента** = переменные `--gradient-color-1…4` в `css/style.css`; `mesh.js` подхватывает их автоматически.
- **палитра и отступы** = дизайн-токены в `:root` (`--primary`, `--space-*`, `--radius` и т.д.).
- **тексты, тарифы, вопросы FAQ** = правятся прямо в `index.html`.
