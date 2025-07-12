# 🎹 React Typewriter Component

A reusable and customizable typewriter effect component built with React.

---

## ✨ Features

- Custom text speed and delay
- Supports multiple strings and looping
- Optional blinking cursor
- Play/pause control
- Callback hooks

---

## 🚀 Usage

```tsx
import { Typewriter } from "react-typewriter";

<Typewriter
  text={[
    "Hi there 👋",
    "I'm a React Typewriter!",
    "Fully customizable 🎨",
    "Fast, smooth, and fun ⚡",
    "Ready to use in your project 🚀",
  ]}
  speed={20}
  random={30}
  delay={1000}
  loop={true}
/>;
```

---

## 🔧 Props

| Prop         | Type                   | Description                                   |
| ------------ | ---------------------- | --------------------------------------------- |
| `text`       | `string` \| `string[]` | Text or array of texts to type                |
| `speed`      | `number`               | Speed in ms per character                     |
| `loop`       | `boolean`              | Whether to loop the text                      |
| `cursor`     | `boolean`              | Show blinking cursor                          |
| `cursorChar` | `string`               | Character used for the cursor (default: `⎸`)  |
| `delay`      | `number`               | Delay after text finishes before continuing   |
| `random`     | `number`               | Adds a random delay variation (default: `50`) |
| `onStart`    | `Function`             | Callback when typing starts                   |
| `onFinished` | `Function`             | Callback when typing ends                     |
| `play`       | `boolean`              | Control whether typing plays or pauses        |

---
