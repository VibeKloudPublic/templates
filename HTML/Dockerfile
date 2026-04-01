# Use lightweight NGINX image
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML files into nginx directory
COPY . /usr/share/nginx/html

# Expose port (Cloud Run uses 8080)
EXPOSE 8080

# Update nginx to listen on 8080 instead of 80
RUN sed -i 's/listen       80;/listen       8080;/g' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]