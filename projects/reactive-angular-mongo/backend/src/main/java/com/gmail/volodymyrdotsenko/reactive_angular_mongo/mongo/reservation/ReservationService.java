package com.gmail.volodymyrdotsenko.reactive_angular_mongo.mongo.reservation;

import com.gmail.volodymyrdotsenko.reactive_angular_mongo.model.reservation.Reservation;
import reactor.core.publisher.Mono;

/**
 * Service for {@link Reservation}.
 */
public interface ReservationService {
    Mono<Reservation> getReservation(String id);

    Mono<Reservation> createReservation(Mono<Reservation> reservationMono);

    Mono<Reservation> updateReservation(String id, Mono<Reservation> reservationMono);

    Mono<Boolean> deleteReservation(String id);
}
