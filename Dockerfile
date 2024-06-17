FROM node:20-alpine as node_env
LABEL authors="sneufville"

# Set the working directory
WORKDIR /neufville_simon_final_site
ENV PATH /neufville_simon_final_site/node_modules/.bin:$PATH

# Copy package and lock files
COPY package.json .
COPY package-lock.json .

# Install dependencies silently
RUN npm install --silent

# Copy all files to destination
COPY . .

# build the react application
RUN npm run build


# Nginx Setup
FROM nginx:alpine

# Copy files
COPY --from=node_env /neufville_simon_final_site/build /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
