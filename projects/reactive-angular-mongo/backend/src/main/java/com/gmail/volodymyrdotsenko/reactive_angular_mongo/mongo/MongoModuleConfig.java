package com.gmail.volodymyrdotsenko.reactive_angular_mongo.mongo;

import com.mongodb.reactivestreams.client.MongoClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.ReactiveMongoDatabaseFactory;
import org.springframework.data.mongodb.core.ReactiveMongoOperations;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.SimpleReactiveMongoDatabaseFactory;

/**
 * Mongo module config.
 */
@Configuration
class MongoModuleConfig {
    private static final String DATABASE_NAME = "reservations";

    @Bean
    public ReactiveMongoDatabaseFactory mongoDatabaseFactory(MongoClient client) {
        return new SimpleReactiveMongoDatabaseFactory(client, DATABASE_NAME);
    }

    @Bean
    public ReactiveMongoOperations mongoOperations(ReactiveMongoDatabaseFactory mongoDatabaseFactory) {
        return new ReactiveMongoTemplate(mongoDatabaseFactory);
    }
}
