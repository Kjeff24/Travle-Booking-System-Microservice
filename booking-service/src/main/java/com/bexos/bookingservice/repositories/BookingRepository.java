package com.bexos.bookingservice.repositories;

import com.bexos.bookingservice.models.Booking;
import com.bexos.bookingservice.models.booking_categories.Accommodation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface BookingRepository extends MongoRepository<Booking, String> {
}
