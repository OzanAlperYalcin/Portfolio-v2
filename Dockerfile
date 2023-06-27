FROM node:14-slim
WORKDIR .
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "start"]