# KlearAccounts — Sitio comercial (Astro, 100% estatico)

Pagina de presentacion de **KlearAccounts**, sistema de gestion para restaurantes.
Es un *showcase* comercial: no incluye backend, base de datos, login ni
funcionalidades de POS reales.

## Stack

- [Astro](https://astro.build) con `output: 'static'`
- HTML semantico, CSS moderno (sin frameworks de UI), JavaScript minimo
  (menu movil + animaciones sutiles de aparicion con `IntersectionObserver`)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera /dist estatico
npm run preview   # sirve el build de produccion
```

## Configuracion antes de publicar

1. **URL de la plataforma** — editar `src/site.config.ts` y asignar la URL real
   en `PLATFORM_URL`. Mientras este vacia, los botones apuntan a `#`.
2. **Dominio** — editar `site` en `astro.config.mjs`.
3. **Capturas reales** — colocar los screenshots en `public/images/` (ver
   `public/images/README.md`) y activarlos en `src/data/screens.ts`.
   Mientras no existan, se muestran placeholders claramente identificados.

## Estructura

```
src/
├── components/       # Navbar, Hero, secciones, SystemShot, Flow, etc.
├── data/screens.ts   # Registro de capturas (null = placeholder)
├── layouts/Layout.astro
├── pages/index.astro
├── site.config.ts    # URL de la plataforma y datos globales
└── styles/global.css
```

## Reglas del proyecto

- No inventar funcionalidades ni datos de KlearAccounts.
- No crear imagenes falsas que parezcan capturas reales.
- Los numeros de las maquetas visuales se etiquetan como "Ejemplo ilustrativo".
