# API para Descargar Videos de YouTube

Esta API en Express permite descargar videos de YouTube y guardar enlaces. Es importante tener en cuenta que para el funcionamiento de las descargas es necesario descargar el API y ejecutarla en un servidor local.

## Tecnologías Utilizadas

- **Node.js**: Plataforma de desarrollo para construir aplicaciones del lado del servidor utilizando JavaScript.
- **Express.js**: Framework web de Node.js utilizado para construir la API.
- **JWT (JSON Web Tokens)**: Utilizado para la autenticación y autorización de usuarios.
- **SQL (MySQL)**: Base de datos relacional utilizada para almacenar los enlaces de los videos.
- **Fluent-FFmpeg**: Utilizado para manejar la conversión de videos.
- **dotenv**: Módulo utilizado para cargar variables de entorno desde un archivo .env.
- **body-parser**: Middleware utilizado para analizar los cuerpos de las solicitudes HTTP.
- **cookie-parser**: Middleware utilizado para analizar cookies en las solicitudes HTTP.
- **Streaming-S3**: Utilizado para la integración con el servicio de almacenamiento en la nube Amazon S3.
- **ytdl-core**: Módulo utilizado para descargar videos de YouTube.
- **Nodemon**: Herramienta utilizada en el entorno de desarrollo para reiniciar automáticamente el servidor cuando se detectan cambios en los archivos.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias necesarias.
3. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias, como la conexión a la base de datos y las claves secretas para JWT.
4. Ejecuta `npm run dev` para iniciar el servidor local.

## Endpoints Disponibles

- **GET /videos**: Obtiene todos los enlaces de videos guardados en la base de datos.
- **POST /videos**: Guarda un nuevo enlace de video en la base de datos.
- **GET /videos/:id**: Obtiene un enlace de video específico por su ID.
- **PUT /videos/:id**: Actualiza un enlace de video existente.
- **DELETE /videos/:id**: Elimina un enlace de video existente.

## Próxima Actualización

En la próxima actualización, se planea agregar la funcionalidad para conectar la API a un bucket de Amazon S3. Esto permitirá que los usuarios descarguen los videos directamente desde la página web a sus dispositivos locales.
