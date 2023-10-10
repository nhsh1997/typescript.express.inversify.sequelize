FROM node:16.3.0-buster

# Install libs
RUN apt-get update -qq && apt-get install -y ca-certificates
RUN npm install -g pm2

# Set working directory
ENV APP_ROOT /home/node/app
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

# Add project files (included dependencies and build directory)
COPY . .

# Reinstall dependencies
RUN npm install

# Expose the listening port
EXPOSE 3000

# Start server
CMD ["sh", "-c", "yarn db:migrate && pm2-runtime start -i max ./dist/api"]
