# Use the official Node.js image as the base image
FROM node:22-alpine

#frontend
WORKDIR /frontend

COPY ./frontend .
COPY ./frontend/package.json ./frontend/package-lock.json ./

RUN npm install --force