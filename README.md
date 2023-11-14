# Astro Starter Kit: Minimal

Instalamos la última versión de ASTRO con npm, para ello deberemos tener instalado antes npm y también es recomendable la extensión de ASTRO

```sh
npm create astro@latest -- --template minimal
```

Una vez instalado el proceso ejecutado en el terminal nos preguntará:

- Nombre del proyecto (nos sugiere uno pero ponemos el que queramos)
- Si queremos instalar dependiencias (SI)
- Si queremos usar una plantilla (ya lo hemos hecho en la instalación previa)
- Inicializar con GIT el repositorio (SI)

Una vez que hemos instalado esto nos habrainstalado esta estructura

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Las principales carpetas y ficheros que verás en la instalación son estos:

📂 public

Ficheros públicos que no necesitan ser procesados. Por ejemplo, el favicon.

📂 src

Donde vivirá todo tu código

📂 src/pages

Aquí crearemos las páginas. Tendrás creado ya index.astro que es el contenido que estás viendo en el navegador en el paso anterior.

📂 astro.config.mjs

El fichero de configuración de Astro.

📂 package.json

Las dependencias del proyecto y los scripts que hacen funcionar todo el desarrollo.

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

Todos los comando a utilizar en ASTRO son

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
