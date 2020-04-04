package com.gmail.volodymyrdotsenko.reactive_angular_mongo.web_flux.controllers;

import com.gmail.volodymyrdotsenko.reactive_angular_mongo.model.Reservation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import static com.gmail.volodymyrdotsenko.reactive_angular_mongo.web_flux.controllers.ReservationRestController.ROOM_RESERVATION_V1;

/**
 * Reservation rest controller.
 */
@RestController
@RequestMapping(ROOM_RESERVATION_V1)
public final class ReservationRestController {
    static final String ROOM_RESERVATION_V1 = "/room/v1/reservation";

    private static final Logger logger = LoggerFactory.getLogger(ReservationRestController.class);

    @GetMapping("/{roomId}")
    public Mono<String> getReservationById(@PathVariable String roomId) {
        logger.debug("Calling getReservationById with roomId {}", roomId);

        return Mono.just("{empty}");
    }

    @PostMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<String> createReservation(@RequestBody Mono<Reservation> reservation) {
        logger.debug("Calling createReservation with reservation {}", reservation);

        return Mono.just("{empty}");
    }
}
