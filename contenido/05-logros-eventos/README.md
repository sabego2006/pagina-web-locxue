# Módulo 05: Logros, Reconocimientos y Eventos
**Semillero de Investigación LOCXUE Software Engineering**

Este módulo ha sido desarrollado de manera **independiente y aislada** dentro de la carpeta `contenido/05-logros-eventos/` para garantizar que no existan conflictos de código ni de estilos con los demás componentes del proyecto.

---

## 📁 Contenido del Módulo

- **`index.html`**: Vista autónoma y componente HTML que contiene la sección `<section id="logros-eventos" class="logros-eventos-module">` con los 4 contadores animados, reconocimientos, cronología de 11 eventos, filtros por categoría, modales de evidencias y eventos futuros.
- **`styles.css`**: Hoja de estilos aislada bajo el selector principal `.logros-eventos-module`.
- **`script.js`**: Lógica JavaScript encapsulada (filtros, animación de contadores y modal de evidencias).
- **`cronologia.md`**: Resumen en Markdown de los 11 eventos y reconocimientos con todas las métricas oficiales.
- **`referencias.md`**: Registro detallado de fuentes públicas verificadas y pendientes.
- **`imagenes/`**: Carpeta destinada a alojar las fotografías de evidencia documentadas.

---

## 🛠️ Guía para la Persona Encargada de Integración

Para integrar este módulo al sitio web global (`web/index.html`), siga estos sencillos pasos:

### Paso 1: Enlazar los archivos CSS y JS en `web/index.html`

1. En el `<head>` de `web/index.html`, agregue la referencia al archivo de estilos del módulo:
   ```html
   <!-- Estilos del Módulo 05: Logros y Eventos -->
   <link rel="stylesheet" href="../contenido/05-logros-eventos/styles.css">
   ```

2. Antes del cierre del `</body>` en `web/index.html`, agregue el script del módulo:
   ```html
   <!-- Script del Módulo 05: Logros y Eventos -->
   <script src="../contenido/05-logros-eventos/script.js"></script>
   ```

### Paso 2: Copiar el bloque de la sección HTML

Copie la etiqueta `<section id="logros-eventos" class="logros-eventos-module">` y el modal `<div id="lem-evidence-modal" class="lem-modal">` presentes en `contenido/05-logros-eventos/index.html` y péguelos en la posición deseada dentro del `web/index.html` (generalmente después del módulo de publicaciones o proyectos).

### Paso 3: Copiado de imágenes de evidencia

Cuando los archivos de imagen originales (indicados en la columna de evidencias del documento Word) estén disponibles, colóquelos dentro de:
`contenido/05-logros-eventos/imagenes/`

---

## 🛡️ Aislamiento de Estilos y Funcionalidad

- **Sin colisiones CSS**: Todos los estilos están prefijados con `.logros-eventos-module` o `.lem-*`.
- **Sin colisiones JS**: La lógica está encapsulada en una función de invocación inmediata (IIFE).
- **Identidad Visual**: Utiliza estrictamente la paleta oficial (`#1A2B4C` azul corporativo, `#3A236E` violeta institucional) y las familias tipográficas (`Playfair Display` para títulos e `Inter` para cuerpo).
