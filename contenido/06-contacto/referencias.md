# Módulo: Redes Sociales, Contacto y Pie de Página (Footer)

- **Semillero de Investigación:** LOCXUE
- **Institución:** Universidad de Cundinamarca (Sede Fusagasugá)
- **Integrante / Responsable de Módulo:** Brayan Sarmiento
- **Fecha de Documentación / Desarrollo:** Julio / Agosto de 2026

---

## 📌 Descripción del Módulo

Este módulo representa el canal oficial de comunicación e interacción entre el **Semillero de Investigación LOCXUE** y la comunidad académica, estudiantes, docentes e investigadores externos. Comprende tres componentes esenciales totalmente integrados:

1. **Formulario de Contacto Interactivo (Frontend Web):** Formulario accesible y validado en cliente para la recepción de mensajes, consultas académicas y vinculación de semilleristas, incluyendo acceso directo al borrador oficial de Google Forms.
2. **Hub de Redes Sociales Institucionales:** Rejilla interactiva con los 6 canales oficiales del semillero (Instagram, LinkedIn, GitHub, YouTube, Facebook y Correo Institucional).
3. **Pie de Página Institucional (Footer):** Enlaces rápidos de navegación, ficha académica institucional, derechos de autor y firma de autoría de Brayan Sarmiento.

---

## 🎨 Cumplimiento de la Guía de Identidad Visual

| Componente Técnico | Especificación Exigida | Implementación en este Módulo |
| :--- | :--- | :--- |
| **Color Dominante** | `#1A2B4C` (Azul marino oscuro) | Aplicado en pie de página (footer), encabezados, etiquetas y textos principales. |
| **Color Secundario** | `#3A236E` (Morado / Violeta) | Aplicado en botones CTA de envío, estados `:hover` de redes sociales, líneas decorativas y badges. |
| **Color de Fondo** | `#FFFFFF` y `#F4F6F9` | Fondos de tarjetas de contacto y sección alternada para garantizar alto contraste (cumplimiento WCAG). |
| **Tipografía Títulos** | `Playfair Display` / Georgia | Aplicada estrictamente en los títulos `<h2>`, `<h3>` y `<h4>` para proyectar elegancia y seriedad institucional. |
| **Tipografía Cuerpo** | `Inter` / Roboto / Helvetica | Aplicada en textos de párrafos `<p>`, etiquetas `<label>`, campos `<input>` y enlaces del footer. |
| **Marca de Agua** | `writing-mode: vertical-rl;` | Firma lateral flotante decorativa `LOCXUE` con orientación vertical. |
| **Canales Sociales** | 6 Canales Oficiales | Instagram, LinkedIn, GitHub, YouTube, Facebook y Correo Institucional. |

---

## 🔗 Recursos y Enlaces Incluidos

- **Borrador Oficial de Formulario Google:**  
  `https://docs.google.com/forms/d/e/1FAIpQLScqPQmMn4Ein_AdMww7K2ErjHBQUYcgxhZ6rcK56AzbHb35BA/viewform?usp=publish-editor`
- **Correo Institucional Oficial:** `semillerolocxue@ucundinamarca.edu.co`

---

## 📁 Archivos Generados en `contenido/06-contacto/`

- [contacto-footer.html](contacto-footer.html): Fragmento HTML modular listo para ser integrado en `web/index.html`.
- [contacto-footer.css](contacto-footer.css): Hoja de estilos BEM completamente namespaced y responsive.
- [contacto-footer.js](contacto-footer.js): Lógica JavaScript para validación, respuestas en tiempo real y animaciones con `IntersectionObserver`.
- [Contacto-Footer-Vista-Previa.html](Contacto-Footer-Vista-Previa.html): Página web completa autónoma para visualizar y probar el módulo de inmediato.
