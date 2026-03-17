FROM node:20-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN npm --prefix frontend install
COPY frontend ./frontend
RUN npm --prefix frontend run build

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY server ./server
COPY --from=build /app/frontend/dist ./frontend/dist
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]
