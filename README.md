# Gestor de tareas de usuario

Esta aplicación busca gestionar productos de un usuario permitiendole eliminar y editar datos.
La estructura con la que se diseñó se basa en componentes reutilizables en cualquer parte de la aplicación, lo que nos permite tener un mejor rendimiento al momento de renderizar el DOM. 
* Para los iconos se ha usaso react-icons
* Además de ha incluido material UI para los botones y las modales. Esto con el fin de facilitar el desarrollo y agilizar los requerimientos.

# Distribución del proyecto

```Bash
    assets - Incluye todos los recursos de la aplicacón

    components - Almacena los componentes, layouts y modales de la aplicación, asi como las interfaces de usuario como botones y campos de formulario

    interface - Administra el modelo de datos y la gestion de estado de la aplicación

    router - Enrutamiento general

    servicios - Almacena los servicios de la aplicación y gestiona las peticiones http

```

# Iniciando el proyecto

Debe asegurarse de que las versiones locales de node y yarn esten mínimo en las siguientes versiones: 

```Bash
$ node -v
v20.11.0
$ yarn -v
1.22.22
```
# Clonar repositorio e instalar dependencias

El proyecto fue desarrollado con el gestor de paquetes *yarn* por lo que se debe ejecutar el comando de instalación 

```Bash
$ yarn install
```
 o

 ```Bash
$ npm install
```

# Lanzamineto de servidor local

Para ejecutar un servidor local y compilar el proyecto se debe ejecutar 

```Bash
$ yarn start
```