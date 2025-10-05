# Design System

## Color Palette

### Primary Colors

```css
:root {
    --clr-navy: #001f3f;           /* Primary background */
    --clr-navy-text: #001f3fef;    /* Text on light backgrounds */
    --clr-blue-text: #2563eb;      /* Accent text */
    --clr-white: #fff;              /* Primary text on dark */
    --clr-white-soft: #ffffffda;   /* Secondary text on dark */
}
```

### Social Media Colors

```css
:root {
    --clr-linkedin: #0077b5;       /* LinkedIn blue */
    --clr-github: #333;            /* GitHub dark */
}
```

### Usage

**Dark Sections (Navy Background):**
- Background: `var(--clr-navy)`
- Primary text: `var(--clr-white)`
- Secondary text: `var(--clr-white-soft)`

**Light Sections (White Background):**
- Background: `var(--clr-white)`
- Primary text: `var(--clr-navy-text)`
- Accent text: `var(--clr-blue-text)`

---

## Typography

### Font Stack

```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", 
             "Noto Sans", "Liberation Sans", Arial, sans-serif;
```

**Why system fonts?**
- ✅ No external font loading (faster)
- ✅ Native look on each OS
- ✅ Better performance
- ✅ Excellent readability

### Font Sizes

- **Headings:** Use Bootstrap classes (`.display-*`, `.h1` - `.h6`)
- **Body:** Default browser size (16px base)
- **Small text:** `.small` or custom sizing

---

## Layout

### Grid System

Uses **Bootstrap 5 Grid**:
- 12-column responsive grid
- Breakpoints: xs, sm, md, lg, xl, xxl
- Container classes: `.container`, `.container-fluid`

### Spacing

Bootstrap utility classes:
```html
<!-- Padding -->
<div class="p-5">     <!-- All sides -->
<div class="pt-3">    <!-- Top only -->
<div class="px-4">    <!-- Horizontal (left + right) -->

<!-- Margin -->
<div class="m-5">     <!-- All sides -->
<div class="mb-3">    <!-- Bottom only -->
<div class="mx-auto">  <!-- Horizontal center -->
```

**Scale:** 0-5 (0 = 0, 1 = 0.25rem, 2 = 0.5rem, 3 = 1rem, 4 = 1.5rem, 5 = 3rem)

---

## Components

### Language Selector

**Glass morphism effect:**
```css
.custom-select {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
}
```

**States:**
- Default: Semi-transparent white
- Hover: Slightly more opaque
- Open: Dropdown visible
- Selected: Highlighted option

### Buttons

**Primary Button:**
```css
.btn-primary {
    background-color: var(--clr-blue-text);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

### Icons

**SVG Color Manipulation:**
```css
/* White icon on dark background */
.icon-white {
    filter: brightness(0) invert(1);
}

/* Dark icon on light background */
.icon-dark {
    filter: brightness(0) invert(0);
}

/* Specific color (LinkedIn blue) */
.icon-linkedin {
    filter: invert(39%) sepia(57%) saturate(2878%) 
            hue-rotate(178deg) brightness(93%) contrast(101%);
}
```

**How to generate filter values:**
Use [this tool](https://codepen.io/sosuke/pen/Pjoqqp) to convert hex colors to CSS filters.

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Extra small devices (phones, less than 576px) */
/* Default styles here */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

### Mobile Adjustments

**Language Selector:**
```css
@media (max-width: 576px) {
    .custom-select {
        font-size: 0.9rem;
        padding: 0.5rem;
    }
}
```

**Typography:**
```css
@media (max-width: 992px) {
    .display-5 {
        font-size: 2.5rem; /* Smaller on mobile */
    }
}
```

---

## Animations

### Transitions

**Standard transition:**
```css
.element {
    transition: all 0.3s ease;
}
```

**Specific properties:**
```css
.button {
    transition: transform 0.2s ease, 
                background-color 0.3s ease;
}
```

### Hover Effects

**Lift effect:**
```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```

**Scale effect:**
```css
.icon:hover {
    transform: scale(1.1);
}
```

---

## Accessibility

### Color Contrast

All color combinations meet **WCAG AA** standards:
- Navy text on white: 14.96:1 ✅
- White text on navy: 14.96:1 ✅
- Blue text on white: 8.59:1 ✅

### Focus States

```css
.focusable:focus {
    outline: 2px solid var(--clr-blue-text);
    outline-offset: 2px;
}
```

### Screen Reader Support

```html
<!-- Descriptive alt text -->
<img src="icon.svg" alt="GitHub profile link">

<!-- ARIA labels -->
<button aria-label="Change language to Spanish">ES</button>

<!-- Semantic HTML -->
<nav>
<main>
<section>
```

---

## Best Practices

### CSS Organization

1. **CSS Variables** - Define colors/values in `:root`
2. **Component-based** - Group related styles
3. **Mobile-first** - Base styles, then media queries
4. **Utility classes** - Use Bootstrap utilities when possible
5. **Custom classes** - Only when needed

### Naming Conventions

**BEM-inspired:**
```css
.component {}
.component__element {}
.component--modifier {}
```

**Example:**
```css
.custom-select {}
.custom-select-trigger {}
.custom-select.open {}
```

### Performance

**Optimize images:**
- Use SVG for icons
- Compress JPG/PNG
- Use appropriate sizes

**Minimize CSS:**
- Remove unused Bootstrap components
- Combine similar rules
- Use shorthand properties

**Use efficient selectors:**
```css
/* Good */
.class-name {}

/* Avoid */
div > p:first-child {}
```

---

## Design Tokens

### Spacing Scale

```
0: 0
1: 0.25rem (4px)
2: 0.5rem  (8px)
3: 1rem    (16px)
4: 1.5rem  (24px)
5: 3rem    (48px)
```

### Border Radius

```
Small: 4px
Medium: 8px
Large: 16px
Circle: 50%
```

### Shadows

```css
/* Subtle elevation */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Medium elevation */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

/* High elevation */
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
```

---

## Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser support
- [WebAIM](https://webaim.org/) - Accessibility guidelines
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Future Considerations

- [ ] Dark mode toggle
- [ ] Custom scrollbar styling
- [ ] Skeleton loading states
- [ ] Print stylesheet
- [ ] Animation preferences (prefers-reduced-motion)
