package com.bexos.authserver.services;

import com.bexos.authserver.dto.ChangePasswordRequest;
import com.bexos.authserver.dto.RegisterRequestDto;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<?> register(RegisterRequestDto request);

    ResponseEntity<?> changePassword(ChangePasswordRequest request);
}
