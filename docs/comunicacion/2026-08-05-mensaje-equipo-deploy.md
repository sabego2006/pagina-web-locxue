# [LOCXUE] Deploy `locxue.org` el 10-ago — Plan de trabajo y división de archivos

**Para**: todo el equipo (Contenido, Diseño, Frontend/Integración).
**De**: Santiago, con apoyo de Angélica.
**Fecha**: 2026-08-05.

---

Buen día, equipo. Ya tenemos dominio y hosting (`locxue.org`) y la fecha objetivo de lanzamiento es el **domingo 10 de agosto**. Les dejo el plan operativo con lo que vamos a hacer, quién toca qué archivo y cómo trabajar en paralelo sin pisarnos.

---

## 1. Hosting, dominio y deploy — decisiones cerradas

| Tema | Decisión |
|---|---|
| **Hosting** | GitHub Pages (carpeta `/web` del repo `sabego2006/pagina-web-locxue`). |
| **Dominio** | `locxue.org` (gestionado externamente; los registros DNS los crea el responsable externo antes del **7 de agosto**). |
| **Deploy** | Automático al hacer `git push origin main`. Sin CI por ahora. |
| **HTTPS** | Let's Encrypt automático tras propagar DNS (puede tardar 24 h). |
| **Formulario de contacto (HU-15)** | Formspree (servicio externo, no requiere backend). |
| **Stack** | HTML5 + CSS3 + JS vanilla. **No** introducimos framework, build ni CI en esta versión. |

**Archivos de deploy** que voy a crear yo en `web/` (no los toque nadie más):

- `web/CNAME` → texto plano: `locxue.org`.
- `web/.nojekyll` → archivo vacío (evita que GitHub Pages procese con Jekyll).
- `web/404.html` → página 404 con la marca y el menú.
- `web/robots.txt` → `User-agent: *` + `Allow: /`.

---

## 2. División de archivos para trabajar en paralelo sin conflictos

Para que nadie se pisotee el trabajo en Git, vamos a respetar esta regla a rajatabla:

| Responsable | Carpetas / archivos propios | NO debe tocar |
|---|---|---|
| **Frontend/Integración (Angélica + Santiago)** | `web/index.html`, `web/assets/css/styles.css`, `web/assets/js/main.js`, `web/CNAME`, `web/404.html`, `web/robots.txt`, `web/assets/img/` (solo para assets transversales como logo SVG y OG cover). | `contenido/*` (excepto integración final en `web/index.html`). |
| **Diseño** | `docs/backlog/*`, material gráfico. Entrega logo SVG al equipo de Frontend. | `web/*`, `contenido/*`. |
| **Responsables de contenido** | Únicamente `contenido/01-institucional/`, `contenido/02-equipo/`, `contenido/03-proyectos/`, `contenido/04-publicaciones/`, `contenido/05-logros-eventos/`, `contenido/06-contacto/`. | `web/*` por ningún motivo. |

**¿Por qué nos vamos a evitar conflictos así?** Frontend solo edita `web/`. Las áreas de contenido solo editan `contenido/`. No hay solapamiento posible en el mismo archivo.

---

## 3. Trabajo por ramas — reglas del sprint final

Solo existe la rama `main`. No abrimos `develop` porque en 5 días suma más fricción que beneficio. Cada quien trabaja en su propia rama `feature/<algo>` y abre PR hacia `main`.

### Convención de ramas

- **Frontend/Integración (Angélica + Santiago)**: una sola rama compartida `feature/frontend-tech-improvements` donde metemos todos los cambios técnicos (favicon, OG tags, conteo animado, formulario, banner condicional, `CNAME`, `404.html`, `robots.txt`). Un solo PR al final.
- **Diseño**: rama `feature/logo-svg` para entregar el logo en SVG. PR hacia `main`.
- **Cada área de contenido**: rama `feature/<sección>-contenido`, por ejemplo `feature/equipo-contenido`. PR hacia `main` cuando el contenido esté listo.

### Convención de commits (manual de contribución)

Prefijos: `feat:` (contenido nuevo), `style:` (CSS/ajuste visual), `fix:` (corrección), `docs:` (documentación), `refactor:` (limpieza sin cambio funcional).

### Sincronización — MUY IMPORTANTE

Antes de empezar a trabajar cada día:

```bash
git checkout main
git pull origin main
git checkout feature/<tu-rama>
git merge main   # o rebase, lo que prefieran
```

Como Frontend somos los únicos que tocamos `web/index.html`, su contenido se mergea al final y no afecta a las áreas que ya están en sus `contenido/`. Pero **si Frontend hace push a `main` durante el sprint, todos deben hacer `git pull` antes de seguir**, para no trabajar sobre una base vieja.

---

## 4. Plazos concretos

| Fecha | Hito | Quién |
|---|---|---|
| **5-ago (hoy)** | Confirmar acceso a DNS externo. Crear cuenta Formspree. | Coordinador + Frontend |
| **6-ago** | Logo SVG entregado a Frontend. | Diseño |
| **7-ago** | DNS configurado y propagándose (4 registros A + 1 CNAME). | Responsable externo |
| **8-ago 23:59** | **Entrega final** de HTML/texto/assets en `contenido/0X-*/` para las 6 secciones. Si una sección queda vacía, repórtenlo a Frontend el 6-ago (no el 9) para activar el banner "En construcción". | Responsables de contenido |
| **9-ago mañana** | Integración final en `web/index.html` + merge de Frontend a `main`. | Angélica + Santiago |
| **9-ago 9:00 AM** | Sync final pre-deploy (30 min) — revisamos staging y firmamos go/no-go. | Todo el equipo |
| **10-ago** | Validación post-deploy en `locxue.org` (Lighthouse, formulario, móvil). | Frontend + Coordinador |

---

## 5. Qué hace cada rol

### Frontend/Integración (Angélica + Santiago)

- Crea los archivos de deploy (`web/CNAME`, `web/.nojekyll`, `web/404.html`, `web/robots.txt`).
- Añade favicon, meta Open Graph y Twitter Card al `<head>`.
- Migra el logo de navbar/footer a SVG cuando Diseño lo entregue.
- Implementa el conteo animado de estadísticas (`initCountUp` en `main.js`).
- Integra el formulario de contacto con Formspree (HU-15).
- Prepara el banner discreto "En construcción" para secciones que lleguen vacías el 8-ago.
- Consolida las 6 secciones de contenido en `web/index.html` el 9-ago.
- Valida con Lighthouse y formulario real el 10-ago.

### Diseño

- Convierte el logo PNG a SVG y lo entrega a Frontend antes del 6-ago.
- Si llega a tiempo, prepara también un OG cover (SVG) para preview en redes sociales.
- Disponibilidad para revisar que el contenido que llegue respete el sistema visual (`#1A2B4C`, `#3A236E`, Playfair Display, Inter).

### Responsables de contenido (uno por carpeta)

- Trabajan **solo** dentro de su carpeta `contenido/0X-*/`.
- Entregan HTML + texto + imágenes finales el 8-ago a Frontend.
- Si no pueden entregar, lo reportan el 6-ago (no el 9) para activar el banner "En construcción".
- Si la sección es información sensible (equipo, contacto), confirmar con el integrante antes de publicar.
- Compresión de imágenes: cada imagen >500 KB debe comprimirse antes de subir (squoosh.app o similar).
- Texto alternativo: cada foto lleva `alt` descriptivo corto ("Foto de María López, investigadora en IA").

### Coordinador

- Aprueba el merge final del 9-ago.
- Gestiona el dominio DNS externamente.
- Convoca la reunión de cierre el 10-ago.

---

## 6. Riesgos abiertos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| **DNS no propaga a tiempo** | Cambio el 7-ago, no el 9. Mientras tanto, plan B: `https://sabego2006.github.io/pagina-web-locxue/` queda accesible. |
| **Contenido llega tarde** | El 8-ago 23:59 revisamos. Si más de 2 secciones están vacías, mantenemos placeholders honestos (no banner "En construcción") para no generar expectativas. |
| **Imágenes pesadas** | Compresión obligatoria (>500 KB) guideline en `docs/manual-contribucion.md`. |
| **Conflictos en Git** | Solo Frontend toca `web/index.html`. Las áreas solo commitean en sus carpetas de `contenido/`. Si Frontend hace push a `main`, todos hacen `git pull` antes de seguir. |
| **Formspree no llega a tiempo** | Plan B: `mailto:` como acción del formulario mientras se configura Formspree. |

---

## 7. Próxima reunión

**Sábado 9 de agosto, 9:00 AM** — Sync final pre-deploy (30 min). Se revisan las 6 secciones integradas en staging y se firma el go/no-go para el merge a `main`.

**Domingo 10 de agosto** — Validación post-deploy + acta de cierre.

Si alguien tiene bloqueos, repórtelos a más tardar el **6 de agosto** para reasignar o ajustar el alcance. Gracias por el esfuerzo del equipo.

— Santiago (con Angélica)
