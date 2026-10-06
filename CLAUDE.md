# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Qué es este proyecto

Sitio web institucional del **Semillero de Investigación LOCXUE** de la Universidad de Cundinamarca. Primera versión pública; entrega objetivo **10 de agosto de 2026**.

- Estático: **HTML5 + CSS3 + JavaScript vanilla**. Sin framework, sin build, sin `package.json`, sin linter, sin tests, sin CI.
- Licencia **MIT** (ver `LICENSE`).
- Idioma: español (`<html lang="es">`).

## Cómo abrir la web localmente

```bash
git clone https://github.com/sabego2006/pagina-web-locxue.git
cd pagina-web-locxue/web
```

Luego, una de estas dos opciones:

- **Doble clic** en `index.html`, o
- **Servidor estático** desde la carpeta `web/`:
  - VS Code → extensión **Live Server** → "Open with Live Server", o
  - `python -m http.server 8000` y abrir `http://localhost:8000`.

El entry point es `web/index.html`, que carga `web/assets/css/styles.css` y `web/assets/js/main.js`.

## Arquitectura del repositorio

| Carpeta | Propósito |
|---|---|
| `web/` | Sitio entregado: `index.html`, `pages/`, `components/`, `assets/{css,js,img,icons,videos,fonts}/`. |
| `contenido/` | Contenido estructurado por secciones numeradas: `01-institucional`, `02-equipo`, `03-proyectos`, `04-publicaciones`, `05-logros-eventos`, `06-contacto`, `media-global/`. Cada `contenido/0X-*/` puede contener HTML, CSS, imágenes y recursos propios. |
| `docs/` | Gobernanza del proyecto: `backlog/`, `reuniones/`, `actas/`, `arquitectura/`, `manual-contribucion.md`. |
| `qa/` | Reservado para futuros tests / aseguramiento de calidad. |
| `fuentes recopiladas/` | Material crudo (`.docx`, logo PNG, etc.). **Fuente viva** que respalda al semillero y se actualiza por los integrantes hasta el 10-ago-2026. No es parte del sitio desplegado; es el insumo del cual se redacta `contenido/`. |

## Sistema de diseño (autoritativo)

Valores tomados de `docs/backlog/diseño y tipografia.jpeg`. **Sobrescriben** cualquier valor actual en `web/assets/css/styles.css`.

| Token | Valor | Uso en la página |
|---|---|---|
| Color dominante | `#1A2B4C` (azul marino corporativo) | Fondos de secciones, menús principales, pie de página, texto principal. |
| Color secundario | `#3A236E` (morado/violeta institucional) | Botones CTA, enlaces, títulos secundarios, hover. |
| Color de fondo | `#FFFFFF` y `#F4F6F9` | Fondo general; contraste WCAG limpio. |
| Tipografía títulos | `Playfair Display` (fallback `Georgia`) | Solo `<h1>`, `<h2>`, `<h3>`. |
| Tipografía cuerpo | `Inter` (fallback `Roboto`, `Helvetica`) | `<p>` y menús; optimiza lectura en móviles. |
| Identidad visual | Logo "LOCXUE" en `.svg` | Navbar; no pixela al escalar. |
| Estructura de texto | `writing-mode: vertical-rl` | Marca de agua vertical lateral con el nombre de la marca. |
| Efecto de capas | `position: absolute` + `z-index` | Bloques de texto sólidos sobre imágenes de fondo. |
| Componente dinámico | Librería de gráficos (Chart.js o equivalente) | Gráficos de barras para estadísticas / resultados. |

> ⚠️ La paleta y fuentes actualmente en `web/assets/css/styles.css` (`#0f4c81`, `#f5ab35`, `Segoe UI`) son **provisionales** y deben reemplazarse por los valores de esta tabla durante la integración final.

## Reglas de trabajo del equipo

El proyecto se apoya en **tres documentos canónicos** con roles distintos. Antes de cualquier cambio, identifícalos:

| Rol | Documento | Lo que define |
|---|---|---|
| **QUÉ** | `docs/backlog/Backlog pagina web Locxue.docx` | Alcance de contenido: qué secciones y qué información debe mostrar el sitio. |
| **CÓMO** | `docs/backlog/diseño y tipografia.jpeg` | Sistema visual (ver tabla arriba). |
| **FUENTE VIVA** | `fuentes recopiladas/` | Material crudo actualizado por los integrantes hasta el 10-ago-2026; respalda al semillero. |

Reglas operativas:

- **Cada integrante trabaja solo en su carpeta asignada** dentro de `contenido/`. El responsable de **Frontend, Diseño e Integración** es quien une todo en el `web/index.html` final, unifica estilos, ajusta responsive, resuelve conflictos visuales y realiza las pruebas.
- **No inventar** información institucional, no agregar secciones innecesarias, no replantear la arquitectura. Tratar `docs/backlog/contexto.md` como la fuente de verdad de decisiones.
- Actuar como **Product Manager + Software Engineer + Tech Lead**: priorizar calidad sobre cantidad, MVP sólido, decisiones justificadas, minimizar conflictos en Git.
- **No mezclar** el documento de planificación web (`Backlog pagina web Locxue.docx`) con la "Ruta de Aprendizaje Locxue 2026" — son procesos distintos.

Convenciones de Git (ver `docs/manual-contribucion.md`):

- Ramas: `main` para producción; `develop` o `feature/<nombre-caracteristica>` para nuevas secciones.
- Commits con prefijo: `feat:`, `docs:`, `style:`, `fix:`, `refactor:`.
- Pull Requests hacia `main` tras verificar el funcionamiento.

## Documentos para leer antes de cambiar algo

- `README.md` — descripción general y quick-start.
- `docs/backlog/contexto.md` — **autoritativo**: arquitectura, áreas del equipo, filosofía, restricciones.
- `docs/backlog/Backlog pagina web Locxue.docx` — **qué** debe mostrar el sitio.
- `docs/backlog/diseño y tipografia.jpeg` — **cómo** debe verse (sistema de diseño).
- `fuentes recopiladas/` — fuente viva que respalda al semillero.
- `docs/manual-contribucion.md` — commits, ramas, PRs.
- `LICENSE` — MIT.
