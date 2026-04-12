# OrchidHackX 2026 - Frontend

This is the frontend portal for OrchidHackX 2026, built with a modern React stack, emphasizing high-performance, dynamic animations, and a premium "Antigravity" glassmorphism aesthetic.

## 🚀 Tech Stack
- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
To connect strictly to a production backend (if you are not using the local proxy), create a `.env` file in the `frontend` root:
```env
VITE_API_BASE_URL=http://localhost:5000
```
*Note: During local dev, Vite automatically proxies `/api` calls to `localhost:5000` via `vite.config.ts`, so this variable is primarily needed for production.*

### 3. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

## 📦 Production Deployment (Vercel)

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Set the **Root Directory** to `frontend`.
4. Add the following to the Vercel **Environment Variables**:
   - `VITE_API_BASE_URL`: `<YOUR_RENDER_BACKEND_URL>` (e.g. `https://orchidhackx-backend.onrender.com`)
5. Click **Deploy**.
