# backend/Dockerfile
FROM node:18-alpine

WORKDIR /app

ENV PORT=3000
EXPOSE 5000

COPY . .

RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
