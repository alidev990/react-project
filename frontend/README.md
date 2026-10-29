# React + Vite

## Environment setup

Vite is configured to load environment files from the repository root. Copy the root `.env.example` to `.env` and set `VITE_API_BASE_URL` to the backend server origin, without an `/api` suffix. For example:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000
```

Restart the Vite dev server after changing `.env`. Only put values intended to be public in variables prefixed with `VITE_`; Vite includes them in the browser bundle.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
