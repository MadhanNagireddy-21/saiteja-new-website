package com.saitejainfotech.website.controller;

import com.saitejainfotech.website.dto.ContactRequest;
import com.saitejainfotech.website.entity.ContactMessage;
import com.saitejainfotech.website.service.ContactMessageService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactMessageController {

    private final ContactMessageService contactMessageService;

    public ContactMessageController(
            ContactMessageService contactMessageService) {
        this.contactMessageService = contactMessageService;
    }
    @GetMapping("/reviews")
    public ResponseEntity<List<ContactMessage>> getAllReviews() {
  List<ContactMessage> reviews = contactMessageService.getAllMessages();

        return ResponseEntity.ok(reviews);
    }

    @PostMapping
    public ResponseEntity<ContactMessage> createContactMessage(
            @Valid @RequestBody ContactRequest request) {

        ContactMessage contactMessage = new ContactMessage();

        contactMessage.setName(request.getName());
        contactMessage.setEmail(request.getEmail());
        contactMessage.setSubject(request.getSubject());
        contactMessage.setMessage(request.getMessage());

        ContactMessage savedContactMessage =
                contactMessageService.createContactMessage(contactMessage);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedContactMessage);
    }
}