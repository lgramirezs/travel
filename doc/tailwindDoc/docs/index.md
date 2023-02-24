# Tailwind CSS

# Tailwind

Es un framework para el desarrollo frontend

## Mejoras de la versión 3 

**Estilos nativos de formularios**

Ahora es posible manipular los estilos nativos de un formulario haciendo uso de tailwind con la utilidad accent y la clase file.

**Box shadow**

Ahora también contamos con esta poderosa herramienta que integra una serie de colores para el sombreado con la cual es posible modificar su opacidad.

    <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ..."> Subscribe </button>

    <button class="bg-blue-500 shadow-lg shadow-blue-500/50 ..."> Subscribe </button>

    <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50 ..."> Subscribe </button>

**Multi-column layout**

Se pueden generar columnas nativamente, ahora podrás crear artículos o columnas al estilo de revistas y periódicos. Estos son realmente muy útiles y también son excelentes para diseños de navegación al pie de página


## Framework de css 

Conjunto de herramientas para construir una interfaz web con css, que nos permite agilizar el desarrollo

## Características

- Representado mediante clases 
- Orientado a utilidades 
- Personalizable

Framework CSS → Conjunto de herramientas para construir una interfaz web con CSS, que nos permite agilizar el desarrollo.

Tailwind es un framework utility-first y está diseñado para acelerar el proceso de diseño al eliminar la necesidad de usar CSS.

Características:

Representado mediante clases, definimos nuestros estilos.
Orientado a utilidades, vuelve el desarrollo más personalizable.
Personalizable, Tailwind es 100% personalizable a diferencia de otros frameworks.
Otros frameworks de CSS:

Bootstrap:
Basado en componentes.
Abstracción en la creación de los componentes.
Poco personalizable.
Material UI:
Basado en componentes pre-construidos.
Basado en el tema de Material.
Design System.
Bulma:
Framework modular, permite importar los archivos que se necesiten utilizar.
Personalizable, mediante la creación de variables en SASS se pueden agregar estilos personalizados.
Basado en Flexbox.

**Hay dos principios para trabajar con Tailwind:**

Mobile First → Pensado principalmente para mejorar la experiencia de usuario. Permite identificar las partes más importantes de nuestro proyecto. En otras palabras, prioriza el desarrollo pensando en los dispositivos móviles.

Utility First → Basado en utilidades el cual permite tener una estructura más limpia de nuestros estilos, el desarrollo es más rápido ya que todo se trabaja dentro del mismo archivo. En otras palabras, es la forma en que se nombran y se crean las clases de estilos, es decir, son clases descriptivas de la utilidad que nos dan. Se trata de construir componentes a partir de clases con nombres descriptivos

Apuntes
Mobile First

Está pensado principalmente para mejorar la experiencia de usuario
Este principio nos permite identificar las partes más importantes de nuestro proyecto
Se enfoca en dar prioridad principalmente a los estilos en forma de móvil, este principio es popular, ya que estadísticas mencionan que el 80% del tráfico de la web proviene de los dispositivos móviles.
Utility First

Los frameworks basados en utilidades nos permiten tener una estructura más limpia de nuestros estilos.
Además, el desarrollo es más rápido porque todo se trabaja dentro del mismo archivo.


## Directivas de Tailwind

Para intentar explicar un poco más claro esta clase.

Recordar que @tailwind base maneja los elementos HTML (div, span, ul, p, h1, etc), @tailwind components maneja las clases y finalmente @tailwind utilities maneja las utilidades (que son todas aquellas propiedades referentes a los atributos CSS) (filter: grayscale(100%)).
Entonces cuando hablamos de la directiva @layer lo que hacemos es sobreescribir o definir nuestros propios estilos, componentes o configuraciones para cualquiera de estas 3 categorías.

Recuerden que Tailwind ya tiene estilos predefinidos en sus clases entonces puede que exista text-small y supongamos que eso hace que un texto sea de tamaño 12px PERO que sucede si tu quieres que ese texto sea de 11px y no de 12px?
Pues justo para eso puedes usar @layer components y modificas ese valor en una clase especifica. O si quieres que todos los li tengan un text-underline pues defines con @layer base que tus li van a tener x características.

Así mismo puedes crear tus propias clases y definir un conjunto de propiedades.
Ejemplo crear una clase .card y le defines:
@layer components {
.card {
background-color: theme(‘colors.white’);
border-radius: theme(‘borderRadius.lg’);
padding: theme(‘spacing.6’);
box-shadow: theme(‘boxShadow.xl’);
}
}

Después dentro de tu HTML solo llamas a la clase .card y listo.

Directivas Tailwind CSS v3.0
Una directiva es una instrucción que nos sirve para insertar código a nuestro archivo final CSS.

@tailwind base → Inicializa todos los elementos de nuestro HTML sin estilo.
@tailwind components → Nos permite acceder a todas las clases de tailwind.
@tailwind utilities → Agrega todas las utilidades al proyecto y nos permite acceder a ellas.
Otras directivas:

@tailwind → Inserta las directivas base, components, utilities y variants.
@layer → Le dice a tailwind a qué bloque de código pertenece un conjunto de estilos personalizados. Las capas válidas son base, componentes y utilidades.
@apply → Incorpora cualquier clase de Tailwind en el CSS personalizado, es útil cuando se necesita escribir CSS personalizado.
@variants → Es útil para controlar dónde Tailwind inyecta el hover, focus, responsive u otras variantes de cada clase.
Las directivas se diferencian por un @ al inicio, también se tienen las funciones screen() y theme().

## Breakpoints:

sm - 640px
md - 768px
lg - 1024px
xl - 1280px
2xl - 1536px

Documentación oficial de Width
Documentación oficial de height

Ejemplo práctico

    <div class=“w-auto h-screen bg-sky-200 flex”>
    <div class=“w-1/4 h-1/4 bg-sky-700”></div>
    <div class=“w-1/4 h-1/4 bg-cyan-400”></div>
    <div class=“w-1/3 h-1/4 bg-cyan-700”></div>
    <div class=“w-1/4 h-1/4 bg-cyan-900”></div>
    </div>

## Flex box

Flexbos es un modelo de layout que funciona principalmente respecto a un eje X y un eje Y. Controlando todo de manera unidimensional, esto se traduce al uso de una fila o una columna. 

## Grid 

El layout de Grid funciona como una cuadricula compuesta de filas y columnas, la cual nos permite dividir nuestra página en áreas o secciones. 

## Tip para los colores

Puedes usar la siguiente setencia para declarar una constante que incluye lo colores de tailwind 

const colors = require('tailwindcss/colors')

Y luego en el archivo de configuración declarar tus colores

module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
}

por otro lado puedes usar sin declarar tu constante

backgroundColor: theme =>({
      ...theme('colors'),
      'primary'  : '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary' : '#61AEC9',
    }),


Instalar paquete para los scroll hidden 

https://www.npmjs.com/package/tailwind-scrollbar-hide

## Extracción de componentes 

La extracción de componentes se realiza para reutilizar el código, básicamente se aplica un listado de clases tailwind a una única clase. 

Cabe destacar que no es una práctica que se debe emplear para todos los casos ya que le restaria efectividad al uso de tailwind

ejemplo:

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}


La extracción de componentes sirve para no escribir el mismo código en componentes que se utilizarán más de una vez (ej. cards) y poder mantener el principio de utility-first. La extracción de componentes trabaja de la mano con la directiva **@apply**.


## Agregar color a un svg

agrega al path la clase fill-current, esta clase toma el color de texto que se esta usando para eso agregamos la clase del color de texto ejemplo text-gray

## Compilar a producción 

Tailwind es un framework pesado para producción y para ello ofrece la opción de hacer purge CSS, esto no es otra cosa más que eliminar estilos, clases, breakpoints y cosas adicionales que no se utilizan en el proyecto.

Para realizar esto, en el archivo tailwind.config.js se agrega la propiedad content (antes llamada purge), dentro de ahí se incluyen los paths de los archivos.

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
 // ...
}
Posteriormente, para hacer el build se ejecuta el siguiente comando en terminal: npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --minify

Con esto se puede hacer un despliegue del proyecto (carpeta public). Para hacer el deploy primero de hace el build minificado, después se cambia la ruta de la hoja de estilo tailwind.css del archivo index.html (debe ser el archivo css que se encuentra en la carpeta public).
En mi caso queda <link rel="stylesheet" href="./css/tailwind.css">.

Con esto hecho se puede subir la carpeta public a algún servidor con alojamiento gratuito (ej. netlify, github pages, etc).


https://principled-leek-8ec.notion.site/Curso-B-sico-de-Tailwind-a14993bd7cda4c4a9ebeb1691c95886b

## Documentación sobre los forms

https://github.com/tailwindlabs/tailwindcss-forms