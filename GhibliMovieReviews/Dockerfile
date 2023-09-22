FROM gradle:8-jdk20 AS builder
WORKDIR /GhibliMovieReviews
COPY settings.gradle .
COPY build.gradle .
COPY gradle/ gradle/
COPY src/ src/
RUN gradle build -x test --no-daemon

FROM openjdk:20
WORKDIR /app
RUN rm -rf ./*
COPY --from=builder /GhibliMovieReviews/build/libs/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]