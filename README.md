# Funcionamiento del proyecto

Necesitas tener Node v16

## Descargar las dependeincias

Usar el comando:

```
npm install
```

## Arrancar la aplicación

Usando el comando:

```
npm run start
```

## Probar en el navegador

Abrir a la URL: http://localhost:4200

# Descripción del proyecto

Para crear el proyecto inicié un nuevo proyecto en angular, creando dos servicios, que realizarán las llamadas http a través de observables. La respuesta de las llamadas se inyectarán en el controlador del componente principal llamado Show-Cat. Se crearán 3 funciones diferentes: 

- La primera función se suscribe al observable que hace la llamada http a https://catfact.ninja/fact , ahí obtenemos la frase que necesitamos. En esa misma función realizamos otra función dentro para obtener las 3 primeras palabras, a continuación iniciamos una tercera función para pasarle las 3 palabras como parámteros.

- Esa función se desarrolla a continuación y lo hace con un subscribe al observable que hace la llamada https://developers.giphy.com/docs/ - y ahí obtenemos el gif.

Ambas funciones se realizan con next error, para manejar los errores, y en ambas hay un loader que se activa mientras se espera la respuesta, y enviará un mensaje de error en caso de que haya problemas con la conexión. 

- Por último, se realiza una tercera fución que será quien refresque la página para obtener una nueva llamada.

En la vista del componente encontramos la estructura HTML con 3 elementos principales, un header, un main y un footer. Dentro del main es donde se va a desarrollar la aplicación. He incorporado condicionales que lanzan el cargador y el mensaje de error en caso de no recibir la petición. En el botón se incluye la función de refrescar, que se realiza a través de un evento click. y dos bloques en los que se incorporan las respuestas de las llamadas a las APIs.

El proyecto se inicializa eligiendo scss para los estilos, por ello todo está maquetado utilizando sass y para el nombramiento de clases se utiliza la metodología BEM.

Aunque se especificaba que la imagen quedara posionada a la izquierda y el texto a la derecha, he aplicado la propieda flex para hacerlo responsive, por lo que en ciertos cortes de la pantalla podrían quedar una encima de la otra. 


## Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Netlify](https://faq-challenge-accordion.netlify.app)


# Prueba Tecnica Fatima Alvarez

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



