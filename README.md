# 📋 Gestor de Tareas Pro

Un gestor de tareas moderno y profesional construido con **React 18** y **Tailwind CSS**, con diseño responsive mobile-first.

## ✨ Características

### Diseño Profesional
- **Tipografía**: Fuente Inter (Sans-Serif moderna)
- **Esquema de color**: 
  - Fondo neutro (gray-50)
  - Tarjetas blancas con sombras sutiles
  - Acentos de color: Azul para acciones primarias, Rojo para urgencia
- **Espaciado generoso**: Sistema de rejilla consistente
- **Animaciones suaves**: Transiciones fluidas en todas las interacciones

### Responsive Mobile-First
- **Móvil**: 
  - Una columna
  - Estadísticas con scroll horizontal
  - Input y lista optimizados para pantallas pequeñas
- **Desktop**: 
  - Contenedor max-w-4xl centrado
  - Estadísticas en grid de 4 columnas
  - Márgenes amplios y espaciado generoso

### Funcionalidades
- ✅ **Crear tareas** con texto, categoría, prioridad y fecha de vencimiento
- 📝 **Editar tareas** en línea
- ✔️ **Marcar como completadas**
- 🗑️ **Eliminar con confirmación**
- 🔍 **Filtrar por**: texto, estado (pendiente/completada) y prioridad
- 📊 **Estadísticas en tiempo real**: progreso, total, pendientes y urgentes
- ⚠️ **Alertas visuales** para tareas vencidas
- 💾 **Persistencia**: Todas las tareas se guardan en localStorage

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar el servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# Vite mostrará la URL (normalmente http://localhost:5173)
```

## 📦 Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Compilar para producción
npm run preview  # Vista previa de la compilación
```

## 🎨 Estructura del Proyecto

```
list-manager-pro/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx     # Formulario para nuevas tareas
│   │   ├── TaskList.jsx      # Lista de tareas
│   │   ├── TaskItem.jsx      # Tarjeta individual de tarea
│   │   ├── TaskFilters.jsx   # Controles de filtrado
│   │   └── TaskStats.jsx     # Estadísticas responsive
│   ├── context/
│   │   └── TaskContext.jsx   # Estado global con Context API
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos de Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎯 Tecnologías Utilizadas

- **React 18.3** - Framework UI
- **Vite 5.4** - Build tool y servidor de desarrollo
- **Tailwind CSS 3.4** - Framework de estilos utility-first
- **Context API** - Manejo de estado global
- **localStorage** - Persistencia de datos

## 🎨 Paleta de Colores

- **Fondo**: `gray-50` (#F9FAFB)
- **Tarjetas**: `white` (#FFFFFF)
- **Primario**: `blue-600` (#2563EB)
- **Urgencia**: `red-600` (#DC2626)
- **Advertencia**: `amber-600` (#D97706)
- **Éxito**: `green-600` (#16A34A)
- **Texto**: `gray-900` (#111827)

## 📱 Breakpoints Responsive

- **sm**: ≥ 640px
- **md**: ≥ 768px
- **lg**: ≥ 1024px
- **xl**: ≥ 1280px

## 🔧 Personalización

### Modificar colores
Edita `tailwind.config.js` para agregar colores personalizados:

```js
theme: {
  extend: {
    colors: {
      'tu-color': '#hexadecimal',
    }
  }
}
```

### Agregar fuentes
Importa en `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=TuFuente:wght@400;600&display=swap');
```

## 📄 Licencia

MIT License - Uso libre para proyectos personales y comerciales.

---

Creado con ❤️ usando React y Tailwind CSS
