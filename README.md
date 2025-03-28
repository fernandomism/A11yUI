# A11yUI

# `<Button />`

(A work in progress)

A11yUI is a lightweight, customizable React component library focused on accessibility and usability. Designed to save developers time by providing ready-to-use, accessible UI components while allowing full customization via design tokens.

---

## ✅ Props

| Prop         | Type                                              | Default     | Description                                          |
|--------------|---------------------------------------------------|-------------|------------------------------------------------------|
| `variant`    | `'primary' | 'secondary' | 'tertiary' | ...`         | `'primary'` | Visual style variant                                 |
| `type`       | `'button' | 'submit' | 'reset'`                  | `'button'`  | Native button behavior                               |
| `disabled`   | `boolean`                                         | `false`     | Disables the button                                 |
| `iconOnly`   | `boolean`                                         | `false`     | Indicates the button is icon-only                   |
| `label`      | `string`                                          | `—`         | Required if `iconOnly` is true for accessibility     |
| `useGradient`| `boolean`                                         | `false`     | Enables gradient background styling                  |

---

## 🧪 Examples

### 🟣 Primary

```tsx
<Button variant="primary">Primary</Button>
```

### 🎀 Secondary

```tsx
<Button variant="secondary">Secondary</Button>
```

### 💥 Danger with Gradient

```tsx
<Button variant="danger" useGradient>Delete</Button>
```

### ♿ Icon-Only

```tsx
<Button iconOnly label="Settings">
  <SettingsIcon />
</Button>
```

---

## 🌈 Theming & Customization

This component supports design tokens.

To override the default theme:

```tsx
<ThemeProvider theme={myTheme}>
  <Button variant="primary">Themed!</Button>
</ThemeProvider>
```

You can customize:
- Backgrounds (base, hover, focus, active)
- Gradients
- Text color
- Border radius
- Box shadows

---

## 🛠 Built With

- ✅ `styled-components`
- ✅ `TypeScript`
- ✅ `Storybook`
- ✅ Accessibility-first (WCAG compliant)

---

## 📸 Screenshot

> *(Optional)* Add a screenshot or a GIF showing different variants here

---

## 🚀 Coming Soon

- Dark mode support
- ToggleSwitch, Modal, Typography
- Built-in motion variants

---

**A11yUI** — making accessible design the default, not the exception 💙


