# Movies-Zone 🎬

**Movies-Zone** is a Vite + React application to discover movies, TV shows and people using a movie database API. It includes routing, global state management, reusable components, and responsive UI.

---

## 🚀 Features

- Browse **trending** and **popular** movies & TV shows
- Detailed pages for **movie**, **TV show**, and **person**
- Infinite scroll and responsive components
- State management via **Redux Toolkit**
- Axios-based API layer and modular UI templates

## 🧰 Tech Stack

- React (v19)
- Vite
- Redux Toolkit + React Redux
- React Router
- Axios
- Tailwind CSS
- Framer Motion

---

## ⚙️ Quickstart

### Requirements
- Node.js (v18+ recommended)
- npm or yarn

### Install
```bash
git clone <repo-url>
cd Movies-Zone
npm install
```

### Environment
Create a `.env.local` (or `.env`) in project root and add your API key. Example (Vite expects keys prefixed with `VITE_`):

```env
VITE_TMDB_API_KEY=your_api_key_here
# or depending on the utils you might see: VITE_API_KEY=...
```

> Tip: You can check how the key is used in `src/utils/Apikey.jsx` or the axios instance in `src/utils/axios.jsx`.

### Run locally
```bash
npm run dev
# open http://localhost:5173
```

### Build & Preview
```bash
npm run build
npm run preview
```

### Lint
```bash
npm run lint
```

---

## 📁 Project Structure

```
src/
 ├─ Components/        # Pages & UI components (Home, Movies, People, TvShows, Templates...)
 ├─ Store/             # Redux actions & slices (Action/, Reducer/)
 ├─ utils/             # Axios instance, Apikey helper
 ├─ App.jsx
 └─ main.jsx
public/                # Static assets
package.json
vite.config.js
```

---

## 🔧 Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

---

## 📦 Deployment
This repo works well with static hosters (Vercel, Netlify). Vercel auto-detects Vite projects — remember to add the environment variable (`VITE_TMDB_API_KEY`) to your host settings.

---

## Contributing
Contributions welcome! Please open issues or PRs. For small projects, a short PR description + screenshots is very helpful.

---

## License
MIT

---

If you want, I can also:
- Add `.env.example` and update `.gitignore`
- Add a `CONTRIBUTING.md` template

Tell me which of those you'd like next and I'll add them. ✅
