## Вкладені правила

#### CSS
```css
header {
    background: #1ecaab;
}

header button {
    border: 1px solid #fff;
}

header p {
    font-size: 16px;
}
```

#### SCSS
```scss
header {
    background: #1ecaab;

    button {
      border: 1px solid #fff;
    }
    
    p {
      font-size: 16px;
    }
}
```

## Амперсанд

#### CSS
```css
.link {
    text-decoration: none;
    cursor: pointer;
}

.link:hover {
    color: #1ecaab;
}

.link:visited {
    color: #04BEFE;
}

.link.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
}

.link-header {
    font-size: 13px;
    color: #fff;
}
```

#### SCSS
```scss
.link {
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #1ecaab;
  }
  
  &:visited {
    color: #04BEFE;
  }
  
  &.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
  }
  
  &-header {
    font-size: 13px;
    color: #fff;
  }
}
```

## Розширення
Ви зіткнетеся із ситуацією, коли вам потрібно буде перевикористовувати стилі. Розгляньте наступний приклад:

```html
<p class="paragraph">Some text...</p>
<p class="paragraph-secondary">Some another text...</p>
```

```css
.paragraph, .paragraph-secondary {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-secondary {
    letter-spacing: 1px;
    word-spacing: 10px;
    font-style: italic;
}
```

```scss
.paragraph {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-secondary {
  @extend .paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}
```

Якщо ви не хочете, щоб директива розширення була скомпілена в CSS, ви можете використовувати `%` перед селектором.

```scss
%paragraph {
    color: #3d3d3d;
    margin-bottom: 6px;
    font-size: 16px;
    line-height: 20px;
}

.paragraph-primary {
  @extend %paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}

.paragraph-secondary {
  @extend %paragraph;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-style: italic;
}
```



#### SCSS
```scss
.link {
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #1ecaab;
  }
  
  &:visited {
    color: #04BEFE;
  }
  
  &.active {
    cursor: default;
    pointer-events: none;
    color: #3d3d3d;
  }
  
  &-header {
    font-size: 13px;
    color: #fff;
  }
}
```


## Змінні
Sass/SCSS дозволяє працювати зі змінними. У CSS вони позначаються подвійним тире `--`, а в препроцесорах знаком долара `$`.

#### SCSS
```scss
// Font-sizes
$large: 24px;
$medium: 20px;
$small: 16px;

// Colors
$primary-color: #1ecaab;
$secondary-color: #3f3f3f;
$text-color: #0b0b0b;


header {
  background: $primary-color;
  
  p {
    font-size: $small;
    color: $text-color;
  }
}

footer {
  background: $secondary-color;

  p {
    font-size: $small;
    color: $text-color;
  }
}

main {
  .container {
    background: $secondary-color;
    
    h1, h2, h3 {
      font-size: $large;
      color: $text-color;
    }
    
    p {
      font-size: $medium;
      color: $text-color;
    }
  }
}
```

## Міксини (вони ж домішки)
Міксини оголошуються директивою `@mixin`. Після неї має стояти ім'я міксину та, опціонально, його параметри, а також блок, що містить тіло міксину.

Міксини дозволяють вам визначати стилі, які можна перевикористовувати протягом всієї таблиці стилів. Ви можете думати про міксини, як про функції в будь-якій іншій мові програмування. Ви можете передавати змінні, як у функціях будь-якої іншої мови програмування. У SCSS міксини повертають набір CSS правил.

Для звернення до міксину використовується директива `@include`.

#### SCSS
```scss
@mixin flex-column {
  display: flex;
  flex-direction: column;
}

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}


.container-1 {
  @include flex-column;
}

.container-2 {
  @include flex-center;
}

.footer {
  @include flex-center;
  font-size: 13px;
  flex-direction: column;
}
```

```scss
@mixin flex ($direction: row, $justify-content: flex-start, $align-items: flex-start) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify-content;
  align-items: $align-items;
}

.container-1 {
  @include flex;
}

.container-2 {
  @include flex(column);
}

.container-3 {
  @include flex(column, center, center);
}
```

## Імпорти

```scss
@import "src/styles/header"; // імпортує src/styles/Preloader.scss

@use "src/styles/header"; // також імпортує src/styles/Preloader.scss
```

Новий `@use` схожий на `@import`, але має деякі помітні відмінності:

* За замовчуванням усі імпортовані елементи мають простір імен.

#### Файли з символом "_" на початку імені вважаються системними і не компілюються в сss


## SCSS підтримує математичні операції
SassScript підтримує стандартні арифметичні операції над числами (додавання +, віднімання -, множення *, поділ / та залишок від поділу по модулю %)
https://sass-scss.ru/documentation/sassscript/chislovie_operatsii/

```scss
.container {
  width: 100%;
  height: 6 / 19 * 100%;
}
```

## Інтерполяція #{}
* Ви можете використовувати змінні SassScript у селекторах та в назвах властивостей використовуючи синтаксис `#{}` інтерполяції:
* Також можна використовувати `#{}`, щоб вставити в SassScript значення властивостей. Використання `#{}` означає, що будь-які операції в ньому будуть розглядатися як запис CSS. Наприклад:

```scss
$current-container: 2;

.container-#{$current-container} {
  width: 100%;
  padding: 10px * $current-container;
}

.container-#{$current-container + 1} {
  width: 100%;
  padding: 10px * ($current-container + 1);
}
```
## Цикли
https://sass-guidelin.es/ru/#section-55

```scss
@for $i from 1 through 10 {
  .foo:nth-of-type(#{$i}) {
    border-color: hsl($i * 36, 50%, 50%);
  }
}
```

## Архітектура додатку
https://sass-guidelin.es/#architecture
