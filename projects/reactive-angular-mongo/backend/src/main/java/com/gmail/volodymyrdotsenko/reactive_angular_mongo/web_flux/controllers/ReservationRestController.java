package com.gmail.volodymyrdotsenko.reactive_angular_mongo.web_flux.controllers;

import com.gmail.volodymyrdotsenko.reactive_angular_mongo.model.reservation.Reservation;
import com.gmail.volodymyrdotsenko.reactive_angular_mongo.mongo.reservation.ReservationService;
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

    private final ReservationService reservationService;

    public ReservationRestController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/{roomId}")
    public Mono<Reservation> getReservationById(@PathVariable String roomId) {
        logger.debug("Calling getReservationById with roomId {}", roomId);

        return reservationService.getReservation(roomId);
    }

    @PostMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Reservation> createReservation(@RequestBody Mono<Reservation> reservation) {
        logger.debug("Calling createReservation with reservation {}", reservation);

        return reservationService.createReservation(reservation);
    }

    @PutMapping(value = "/{roomId}", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Reservation> updateReservation(
            @PathVariable String roomId, @RequestBody Mono<Reservation> reservation) {
        logger.debug("Calling updateReservation for roomId {} with reservation {}", roomId, reservation);

        return reservationService.updateReservation(roomId, reservation);
    }

    @DeleteMapping(value = "/{roomId}")
    public Mono<Boolean> deleteReservation(@PathVariable String roomId) {
        logger.debug("Calling deleteReservation for roomId {}", roomId);

        return reservationService.deleteReservation(roomId);
    }
}
