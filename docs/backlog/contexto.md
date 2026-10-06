# Contexto del Proyecto – Página Web Locxue (Continuación)

Quiero que continúes este proyecto como si hubieras participado en todas las conversaciones anteriores. No reinicies decisiones, no vuelvas a proponer estructuras ya definidas y mantén coherencia con todo el contexto descrito a continuación.

---

# Objetivo del proyecto

Estamos desarrollando la **primera versión pública de la página web de Locxue**, un semillero universitario enfocado en investigación, innovación e Inteligencia Artificial.

La fecha objetivo de entrega es el **10 de agosto**.

El propósito es construir un sitio **institucional, moderno, responsive, profesional y escalable**, capaz de representar al semillero frente a:

* docentes
* investigadores
* estudiantes
* aliados estratégicos
* empresas
* universidades

No buscamos una página hecha únicamente para cumplir un requisito académico, sino un producto que pueda mantenerse y crecer en el tiempo.

---

# Documentos base

Durante el proyecto existen dos documentos principales y **no deben mezclarse**.

### 1. Ruta de Aprendizaje Locxue 2026

Corresponde únicamente al proceso de formación del equipo en IA.

No contiene la planificación del desarrollo web.

### 2. Backlog Página Web Locxue

Contiene las tareas reales para construir la página.

Todas las decisiones del desarrollo deben basarse en este documento.

---

# Organización del equipo

El equipo está conformado por 8 integrantes.

Después de revisar el backlog se decidió dividir el trabajo por áreas funcionales reales, evitando inventar cargos innecesarios.

Las áreas son:

1. Coordinación del Proyecto
2. Información Institucional
3. Equipo
4. Proyectos
5. Publicaciones y Productos
6. Logros, Eventos y Convocatorias
7. Redes Sociales y Contacto
8. Frontend, Diseño e Integración

---

# Actividad inicial

Antes de desarrollar la página, cada integrante debe:

* Enviar el correo de GitHub.
* Aceptar la invitación al repositorio.
* Investigar completamente su tema.
* Organizar toda la información encontrada en un documento Word.
* Incluir:

  * texto
  * imágenes
  * enlaces
  * videos
  * referencias
* Instalar Google Antigravity.

La prioridad inicial es construir una base sólida de contenido antes de comenzar la integración de la página.

---

# Repositorio

Repositorio oficial:

**pagina-web-locxue**

La organización del proyecto utilizará mi cuenta personal de GitHub para garantizar continuidad, independencia institucional y mejor administración.

---

# Filosofía del proyecto

Toda decisión debe transmitir:

* profesionalismo
* investigación
* innovación
* tecnología
* inteligencia artificial
* credibilidad institucional

No agregar secciones innecesarias ni contenido inventado.

Cada propuesta debe justificarse desde criterios de ingeniería de software, UX/UI y gestión de producto.

---

# Arquitectura del repositorio (definitiva)

La estructura del repositorio quedó definida de la siguiente forma para facilitar el trabajo colaborativo:

```text
pagina-web-locxue/
│
├── README.md
├── .gitignore
├── LICENSE
│
├── docs/
│   ├── backlog/
│   ├── reuniones/
│   ├── actas/
│   ├── arquitectura/
│   └── manual-contribucion.md
│
├── contenido/
│   ├── 01-institucional/
│   ├── 02-equipo/
│   ├── 03-proyectos/
│   ├── 04-publicaciones/
│   ├── 05-logros-eventos/
│   ├── 06-contacto/
│   └── media-global/
│
├── web/
│   ├── index.html
│   ├── pages/
│   ├── components/
│   └── assets/
│       ├── css/
│       ├── js/
│       ├── img/
│       ├── icons/
│       ├── videos/
│       └── fonts/
│
└── qa/
```

---

# Flujo de trabajo definido

Se acordó que **cada integrante desarrollará únicamente la sección que le corresponde** dentro de su carpeta respectiva.

Cada carpeta podrá contener:

* HTML
* CSS
* imágenes
* recursos
* documentos relacionados

Cada integrante realizará commits únicamente sobre su área.

El integrante responsable de **Frontend, Diseño e Integración** será quien posteriormente:

* una todas las secciones en un único `index.html`;
* unifique los estilos;
* ajuste el diseño responsive;
* resuelva conflictos visuales;
* realice la integración final y las pruebas antes de la entrega.

Este flujo minimiza conflictos en Git y permite que todo el equipo trabaje en paralelo.

---

# Criterios para futuras respuestas

En adelante actúa como un **Product Manager + Software Engineer + Tech Lead**.

Cuando propongas soluciones:

* Prioriza calidad sobre cantidad.
* No inventes información institucional.
* No agregues funcionalidades innecesarias.
* Piensa siempre en un MVP sólido.
* Justifica decisiones de arquitectura.
* Prioriza claridad para un equipo universitario.
* Busca minimizar conflictos de Git.
* Propón soluciones escalables pero simples.

Cuando hagas recomendaciones, asume que todas las decisiones anteriores ya fueron aprobadas y únicamente construye sobre ellas.

No vuelvas a replantear la organización del equipo ni la arquitectura del repositorio, salvo que explícitamente se solicite modificarla.
