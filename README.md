# 🃏 Pokémon Cards Explorer

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokéAPI](https://img.shields.io/badge/PokéAPI-REST-EF5350?style=for-the-badge&logoColor=white)
![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-brightgreen?style=for-the-badge)

**Browse, search, and explore Pokémon cards — powered by the PokéAPI and built with vanilla HTML, CSS & JavaScript.**

[🐛 Report Bug](https://github.com/harshit8204/pokemon-cards/issues) &nbsp;·&nbsp; [✨ Suggest Feature](https://github.com/harshit8204/pokemon-cards/issues)

</div>

---

## 📌 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [Disclaimer](#️-disclaimer)

---

## 🎮 About

**Pokémon Cards Explorer** is a lightweight, zero-dependency web app that fetches live Pokémon data from the [PokéAPI](https://pokeapi.co/) and renders it as styled cards — complete with sprites, types, and stats.

Built entirely with **vanilla JavaScript**, this project demonstrates real-world skills including:

- 📡 **REST API consumption** with `fetch()` and async/await
- 🎨 **Dynamic DOM manipulation** — cards generated from live API data
- 🎭 **CSS theming** — type-based color coding (Fire 🔥, Water 💧, Grass 🌿, etc.)
- 📱 **Responsive layouts** using CSS Flexbox/Grid
- ⚡ **No build tools, no frameworks** — just clean, performant vanilla web tech

> A great portfolio piece showing you can work with public APIs and build polished UIs without leaning on frameworks.

---

## 🛠️ Tech Stack

| Technology | Role | Share |
|------------|------|-------|
| 🌐 **HTML5** | Semantic page structure | 20% |
| 🎨 **CSS3** | Styling, animations, responsive layout | 32% |
| ⚡ **JavaScript (ES6+)** | API calls, DOM rendering, interactivity | 48% |
| 🔴 **PokéAPI** | Free public REST API for all Pokémon data | — |

> **Zero npm packages. Zero build steps. Zero dependencies.** Just open and run.

---

## ✨ Features

- 🃏 **Pokémon Card Grid** — beautifully styled cards for each Pokémon
- 🌈 **Type-based Color Themes** — card colors change dynamically based on Pokémon type
- 🖼️ **Official Sprites** — fetched live from PokéAPI for every Pokémon
- 📊 **Stats Display** — HP, Attack, Defense and more on each card
- 🔍 **Search / Filter** — find your favourite Pokémon instantly
- 📱 **Fully Responsive** — works great on mobile, tablet & desktop
- ⚡ **Fast & Lightweight** — no frameworks, instant load times
- 🌐 **Live API Data** — always up to date via PokéAPI

---

## 📁 Project Structure

```
pokemon-cards/
│
├── index.html      # App shell — structure & layout
├── style.css       # All styling — cards, colors, responsiveness
├── script.js       # Core logic — API calls, DOM rendering, interactivity
└── README.md       # Project documentation
```

> Clean and minimal — the entire app lives in just **3 files**. This is intentional: it demonstrates a strong grasp of core web fundamentals before adding tooling.

---

## 🚀 Getting Started

No installation, no build step, no `npm install`. This project runs directly in the browser.

### Option 1 — Clone & Open

```bash
# 1. Clone the repo
git clone https://github.com/harshit8204/pokemon-cards.git

# 2. Navigate into the folder
cd pokemon-cards

# 3. Open in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option 2 — Live Server (Recommended)

If you use **VS Code**, install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

1. Right-click `index.html`
2. Select **"Open with Live Server"**
3. Auto-reloads on every save ✅

### Option 3 — View Online

> 🔗 Add your deployed URL here (Netlify / GitHub Pages / Vercel)

---

## ⚙️ How It Works

```
User opens the app
       │
       ▼
script.js fires fetch() to PokéAPI
  https://pokeapi.co/api/v2/pokemon?limit=150
       │
       ▼
API returns Pokémon data (name, types, sprites, stats)
       │
       ▼
JavaScript dynamically builds card HTML for each Pokémon
       │
       ▼
CSS applies type-based color themes to each card
       │
       ▼
Cards rendered in a responsive grid layout
```

---

## 🗺️ Roadmap

- [x] Pokémon card grid with live API data
- [x] Type-based dynamic color themes
- [x] Official sprites from PokéAPI
- [x] Responsive layout
- [ ] 🔜 Search by name or number
- [ ] 🔜 Filter by type (Fire, Water, Grass...)
- [ ] 🔜 Click card to see full Pokémon details / evolution chain
- [ ] 🔜 Favourite / bookmark Pokémon (localStorage)
- [ ] 🔜 Infinite scroll or pagination for all 1000+ Pokémon
- [ ] 🔜 Dark mode toggle

---

## 🤝 Contributing

All contributions are welcome!

1. Fork the repository
2. Create a branch: `git checkout -b feature/add-search`
3. Commit your changes: `git commit -m "feat: add search by Pokémon name"`
4. Push: `git push origin feature/add-search`
5. Open a Pull Request

---

## 👤 Author

**Harshit**

[![GitHub](https://img.shields.io/badge/GitHub-harshit8204-181717?style=flat-square&logo=github)](https://github.com/harshit8204)

---

## 📄 License

This project is open source under the **MIT License**.

---

## ⚠️ Disclaimer

This is a **fan-made, non-commercial project** for educational and portfolio purposes.

**Pokémon**, all Pokémon names, images, and related trademarks are property of **Nintendo / Game Freak / The Pokémon Company**.
Pokémon data is sourced from [PokéAPI](https://pokeapi.co/) — a free, open Pokémon REST API.
This project has **no commercial intent** and is not affiliated with Nintendo or The Pokémon Company.

---

<div align="center">

*Gotta code 'em all!* 🔴⚪

⭐ **Star this repo if you like it!**

</div>
