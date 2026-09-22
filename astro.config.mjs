import { defineConfig } from 'astro/config';

// Sitio 100% estatico. Sin adaptador, sin backend, sin base de datos.
export default defineConfig({
  site: 'https://klearaccounts.example.com', // <-- Cambiar por el dominio real cuando exista
  output: 'static',
});
