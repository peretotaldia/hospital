package com.hospital.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "PATIENT", schema = "HOSPITAL_USER")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "NHSID")
    private String nhsId;

    @Column(name = "FIRSTNAME")
    private String firstName;

    @Column(name = "LASTNAME")
    private String lastName;

    public Patient() {}

    public Patient(String nhsId, String firstName, String lastName) {
        this.nhsId = nhsId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNhsId() { return nhsId; }
    public void setNhsId(String nhsId) { this.nhsId = nhsId; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
}
