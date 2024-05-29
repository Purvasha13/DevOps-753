# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application's JAR file into the container
COPY target/my-app.jar /app/my-app.jar

# Run the application
CMD ["java", "-jar", "my-app.jar"]
