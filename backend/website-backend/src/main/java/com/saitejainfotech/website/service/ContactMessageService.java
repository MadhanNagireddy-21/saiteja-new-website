package com.saitejainfotech.website.service;

import com.saitejainfotech.website.entity.ContactMessage;
import com.saitejainfotech.website.repository.ContactMessageRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;

    public ContactMessageService(ContactMessageRepository contactMessageRepository) {
        this.contactMessageRepository = contactMessageRepository;
    }

    public ContactMessage createContactMessage(ContactMessage contactMessage) {
        contactMessage.setCreatedAt(LocalDateTime.now());
        return contactMessageRepository.save(contactMessage);
    }

    public List<ContactMessage> getAllMessages() {
        return contactMessageRepository.findAll();
    }
}
