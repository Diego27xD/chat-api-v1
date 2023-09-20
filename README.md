# chat_api

Este es un proyecto de Node.js que utiliza Mongo, Express y TypeScript para crear una API de chat.

## Instalación

1. Clona este repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` donde definas la variable: `PORT`
4. Crea una base de datos en Mongo Atlas y obten la URL de conexión.
5. Ejecuta `npx prisma` y `npx prisma init` para crear los archivos de configuración
6. Ejecuta `npx prisma db push` para migrar el schema a la base de datos.
7. Ejecuta `npm run dev` para iniciar el servidor en modo de desarrollo.

## Uso

Para usar la API, envía una solicitud HTTP a las rutas:

1. `/api/v1/auth/signup` (POST). Registra el usuario
2. `/api/v1/auth/signin` (POST). Loguea al usuario

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama con tus cambios: `git checkout -b my-feature-branch`
3. Haz commit a tus cambios: `git commit -am 'Add some feature'`
4. Empuja la rama: `git push origin my-feature-branch`
5. Envía una solicitud pull.

## Licencia

Este proyecto está bajo la licencia DFJ.
