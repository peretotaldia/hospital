package com.hospital.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Patient {
    @Id @GeneratedValue
    private Long id;
    private String nhsId;
    private String firstName;
    private String lastName;
}
