package com.gmail.volodymyrdotsenko.reactive_angular_mongo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoReactiveDataAutoConfiguration;

@SpringBootApplication(exclude = MongoReactiveDataAutoConfiguration.class)
public class AppEndpoint {

    public static void main(String[] args) {
        SpringApplication.run(AppEndpoint.class, args);
    }

}
