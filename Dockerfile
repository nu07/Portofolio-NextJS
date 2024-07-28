FROM node:16.15.0

WORKDIR /opt/web

COPY . ./

RUN yarn install

RUN yarn build

EXPOSE 3000

CMD ["npm", 'run', "start"]


# mode dev di server