package com.bexos.bookingservice.services;

import com.bexos.bookingservice.dto.CarRentalRequest;
import com.bexos.bookingservice.dto.ImageModel;
import com.bexos.bookingservice.models.booking_categories.CarRental;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface CarRentalService {
    ResponseEntity<List<CarRental>> findAllCarRentals();

    ResponseEntity<?> createCarRentalOffer(CarRentalRequest carRentalRequest, ImageModel carImage);

    ResponseEntity<CarRental> findCarRentalById(String bookingId);

    ResponseEntity<?> updateCarRental(String bookingId, CarRentalRequest request, ImageModel carImage);

    ResponseEntity<?> findAllCarRentalsByCategory(String categoryId);
}
