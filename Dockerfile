# Базовый слой
FROM node:13 

# Копируем всё что нужно из локальной папки в образ
COPY . /app
# можно делать COPY . /app и дальше переходить в подпапку
# COPY package-lock.json /
 # необязательно

# Устанавливаем зависимости, в образе появится /node_modules
# RUN npm install
# RUN webpack
# RUN npm run start
# ... # другие команды, важные перед следующим RUN

RUN npm install

# При старте контейнер начнёт общаться через 80 порт
EXPOSE 80

# При старте контейнер выполнит эту команду – запустит наше приложение
# CMD node app/index.js 
CMD cd app && npm run start-prod
# CMD npm run start
