FROM node:14-alpine AS development
ENV NODE_ENV development
# Add a work directory
WORKDIR /lala-calculator
# Cache and Install dependencies
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]