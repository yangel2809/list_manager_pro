# Handover — list_manager_pro

> Última actualización: 2026-11-11 · Rama por defecto: `main`

## 1. Resumen
Gestor de tareas ("Gestor de Tareas Pro") en React, 100 % cliente: crear/editar/completar/borrar tareas con categoría, prioridad y fecha de vencimiento, filtros y estadísticas. Persistencia en `localStorage`. Proyecto de práctica/portafolio; commit único (2026-01-13). Estado: demo, con el estilado roto en build (ver §11).

## 2. Stack
- React 18.3, Vite 5.4, `@vitejs/plugin-react` 4.
- Tailwind: **mezcla de versiones** — `tailwindcss ^3.4.14` + `@tailwindcss/postcss ^4.1.18` (plugin de v4) en `postcss.config.js`.
- Sin backend, sin BD, sin tests.

## 3. Estructura del repositorio
```
src/main.jsx                   # Entry
src/App.jsx                    # Layout + filtrado derivado (estado, prioridad, texto)
src/context/TaskContext.jsx    # TaskProvider / useTasks: CRUD + persistencia localStorage('tasks')
src/components/                # TaskInput, TaskList, TaskItem, TaskFilters, TaskStats
src/index.css                  # @tailwind + clases propias (.input-field, .select-field, .btn-primary...)
src.zip, src.7z                # Copias comprimidas de src/ (backups, ver Riesgos)
eslint.config.js               # Presente pero eslint no está en devDependencies
```

## 4. Puesta en marcha local
```bash
npm ci
npm run dev       # http://localhost:5173
npm run build     # dist/
npm run preview
```
Verificado en este traspaso: `npm ci` y `vite build` terminan sin error, pero el CSS generado no contiene las utilidades Tailwind (ver §11). No hay script `lint` ni tests.

## 5. Configuración y variables de entorno
Ninguna. Clave de `localStorage`: `tasks` (array JSON).

## 6. Base de datos
No aplica. Modelo de tarea en `localStorage`: `{ id (crypto.randomUUID), text, category, priority, dueDate|null, completed, createdAt }`.

## 7. Despliegue
Nada configurado. Sería hosting estático de `dist/`.
> Por confirmar: no consta despliegue.

## 8. Integraciones externas
Solo Google Fonts (Inter). Ninguna API.

## 9. Funcionalidades principales
- Alta con texto, categoría, prioridad y vencimiento (`TaskInput`).
- Edición en línea, completar, borrar con confirmación (`TaskItem`).
- Filtros por estado (all/active/completed), prioridad y búsqueda de texto (`TaskFilters` + `App.jsx`).
- Estadísticas (`TaskStats`).

## 10. Estado actual y pendientes
Commit único "first commit" (2026-01-13). Sin TODO/FIXME. Pendiente principal: arreglar la configuración de Tailwind.

## 11. Riesgos y deuda técnica
- **Tailwind roto**: `postcss.config.js` usa `@tailwindcss/postcss` (v4) mientras `src/index.css` usa directivas v3 (`@tailwind base/components/utilities`) y `tailwind.config.js` v3. En el build verificado, clases como `max-w-4xl` o `bg-gray-50` no se generan; solo sobreviven las clases CSS escritas a mano. Solución: o volver a `tailwindcss: {}` en PostCSS y quitar `@tailwindcss/postcss`, o migrar a v4 (`@import "tailwindcss"`) y quitar `tailwind.config.js`.
- **Archivos comprimidos commiteados**: `src.zip` y `src.7z` (copias de `src/` de 2026-01-12, desactualizadas, p. ej. `index.css` vacío). Eliminarlos.
- `eslint.config.js` sin `eslint` ni plugins en `devDependencies`.
- `TaskContext` usa `setTasks([...tasks, ...])` en lugar de forma funcional (riesgo de estado obsoleto en actualizaciones rápidas); `JSON.parse` de `localStorage` sin try/catch.
- Sin tests. No hay secretos.

## 12. Accesos y contactos
> Por confirmar: sin despliegue ni cuentas. Repo: `github.com/yangel2809/list_manager_pro`. Responsable por confirmar.
