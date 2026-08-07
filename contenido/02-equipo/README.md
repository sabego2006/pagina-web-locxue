# Módulo: Equipo de Investigación LOCXUE

Este directorio (`contenido/02-equipo/`) contiene todo el material estructurado y listo para integrar sobre el equipo del Semillero de Investigación LOCXUE.

## 📁 Archivos creados

1. **`Equipo.html`**:
   - Fragmento HTML modular con todos los contenedores y marcadores de posición (*placeholders*).
   - Incluye:
     - **Profesor Líder**: Tarjeta principal para el docente que lidera el semillero.
     - **Fundadores**: Tarjetas para los fundadores pioneros.
     - **17 Integrantes**: Grid responsivo con exactamente 17 tarjetas listos para cada estudiante o investigador activo.

2. **`equipo.css`**:
   - Hoja de estilos dedicada al módulo de equipo.
   - Aplica los colores institucionales: `#1A2B4C` (azul primario), `#3A236E` (violeta secundario), `#FFFFFF` y `#F4F6F9`.
   - Aplica la tipografía institucional: `Playfair Display` para títulos y `Inter` para texto.
   - Cuenta con diseño responsivo adapto para móvil, tablet y escritorio.

3. **`README.md`**:
   - Guía de actualización para reemplazar los nombres, roles y fotos cuando estén disponibles.

---

## 📸 Cómo actualizar los datos y fotos

Cuando tengas los datos y las fotografías finales:

1. **Fotografías**:
   - Guarda las fotos en formato JPG, PNG o WebP en la carpeta `web/assets/img/equipo/`.
   - Se recomienda que tengan proporciones cuadradas (ej. 400x400 px) para un ajuste perfecto en los contenedores circulares.
   - Reemplaza `src="assets/img/avatar-placeholder.svg"` en `Equipo.html` por la ruta real de cada integrante (ej: `src="assets/img/equipo/foto-integrante-1.jpg"`).

2. **Nombres y Roles**:
   - Reemplaza los marcadores `[ Nombre Integrante X ]` por el nombre completo de cada miembro.
   - Reemplaza `Rol / Proyecto asignado` por su cargo o rol específico (ej: *Estudiante Investigador - Desarrollo Frontend*, *Investigador IA*, etc.).
   - Actualiza o añade los enlaces de redes profesionales (LinkedIn, GitHub, CvLAC, etc.).
