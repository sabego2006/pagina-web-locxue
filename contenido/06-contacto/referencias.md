# Módulo: Redes Sociales, Contacto y Pie de Página (Footer)

- **Semillero de Investigación:** LOCXUE
- **Institución:** Universidad de Cundinamarca (Sede Fusagasugá)
- **Facultad:** Facultad de Ingeniería
- **Programa:** Ingeniería de Sistemas y Computación
- **Grupo Base:** INGENIUM SUTA
- **Integrante / Responsable de Módulo:** Brayan Sarmiento
- **Fecha de Documentación / Actualización:** Septiembre de 2026

---

## 📌 Descripción del Módulo

Este módulo representa el canal oficial de comunicación e interacción entre el **Semillero de Investigación LOCXUE** y la comunidad académica, estudiantes, docentes e investigadores externos. Comprende tres componentes esenciales totalmente integrados:

1. **Formulario de Contacto Interactivo (Frontend Web):** Formulario accesible y validado en tiempo real con iconos reactivos, contador dinámico de caracteres (0/500), estado de carga animado (spinner), confirmación de recepción y acceso directo al borrador oficial de Google Forms.
2. **Hub de Redes Sociales Institucionales:** Rejilla interactiva con los canales oficiales y directos del semillero:
   - **Instagram:** `@locxue.semilleros` (Divulgación, infografías, proyectos e historias).
   - **Facebook:** Comunidad Oficial LOCXUE (Transmisiones, eventos y convocatorias).
   - **YouTube:** `@semillerolocxue` (Talleres prácticos, conferencias, ponencias y tutoriales).
   - **Correo Oficial:** `semillerolocxue@gmail.com` con botón interactivo de copiado en un clic con confirmación visual.
3. **Ficha de Ubicación Institucional:** Sede Fusagasugá, Facultad de Ingeniería, Grupo INGENIUM SUTA.
4. **Pie de Página Institucional (Footer):** Enlaces rápidos de navegación, ficha académica institucional, estado de actividad del semillero, botón de desplazamiento suave "Subir", derechos de autor y firma de autoría de **Brayan Sarmiento**.

---

## 🎨 Cumplimiento de la Guía de Identidad Visual

| Componente Técnico | Especificación Exigida | Implementación en este Módulo |
| :--- | :--- | :--- |
| **Color Dominante** | `#1A2B4C` (Azul marino oscuro) | Pie de página (footer), encabezados, etiquetas y textos principales. |
| **Color Secundario** | `#3A236E` (Morado / Violeta UDEC) | Botones CTA de envío, estados `:hover`, bordes activos, badges y líneas decorativas. |
| **Color de Fondo** | `#FFFFFF` y `#F4F6F9` | Fondos de tarjetas y sección alternada para garantizar alto contraste (cumplimiento WCAG AAA). |
| **Tipografía Títulos** | `Playfair Display` / Georgia | Aplicada estrictamente en los títulos `<h2>`, `<h3>` y `<h4>` para proyectar seriedad y elegancia académica. |
| **Tipografía Cuerpo** | `Inter` / Roboto / Helvetica | Textos de párrafos `<p>`, etiquetas `<label>`, campos `<input>` y enlaces del footer. |
| **Marca de Agua** | `writing-mode: vertical-rl;` | Firma lateral flotante decorativa `LOCXUE` con orientación vertical. |
| **Canales Sociales** | Redes Oficiales Confirmadas | Instagram, Facebook, YouTube y Correo Oficial Directo. |

---

## 🔗 Recursos y Enlaces Oficiales Configurados

- **Instagram Oficial:**  
  `https://www.instagram.com/locxue.semilleros?stkn=cHF1bXo1ZnllaGg%3D&utm_source=qr`
- **Facebook Oficial:**  
  `https://www.facebook.com/share/1F9QtCepH8/?mibextid=wwXIfr`
- **YouTube Oficial:**  
  `https://www.youtube.com/@semillerolocxue`
- **Correo Oficial Directo:**  
  `semillerolocxue@gmail.com`
- **Borrador Oficial de Formulario Google:**  
  `https://docs.google.com/forms/d/e/1FAIpQLScqPQmMn4Ein_AdMww7K2ErjHBQUYcgxhZ6rcK56AzbHb35BA/viewform?usp=publish-editor`

---

## 📁 Archivos en `contenido/06-contacto/`

- [contacto-footer.html](contacto-footer.html): Fragmento HTML modular listo para ser integrado en `web/index.html`.
- [contacto-footer.css](contacto-footer.css): Hoja de estilos namespaced BEM con micro-animaciones, validación reactiva y responsive design.
- [contacto-footer.js](contacto-footer.js): Lógica JS para validación en tiempo real, contador de caracteres, copiado al portapapeles, botón subir y animaciones con `IntersectionObserver`.
- [Contacto-Footer-Vista-Previa.html](Contacto-Footer-Vista-Previa.html): Página web completa autónoma para visualizar y probar el módulo de inmediato.
