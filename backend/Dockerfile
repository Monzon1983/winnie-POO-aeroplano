FROM node:18-alpine

WORKDIR /app

# Copiamos los archivos de configuración primero (estando parados en backend)
COPY package*.json ./
COPY tsconfig.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código de la carpeta backend
COPY . .

# Compilamos TypeScript a JavaScript
RUN npm run build

# Exponemos el puerto
EXPOSE 3000

# Arrancamos desde la carpeta dist que generó el build
CMD ["node", "dist/app.js"]