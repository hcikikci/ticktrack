# Use the official Node.js image as the base image
FROM node:22-alpine

#backend
WORKDIR /backend

COPY ./backend .
COPY ./backend/package.json ./backend/package-lock.json ./

RUN npm install

