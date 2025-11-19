package com.hospital.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hospital.demo.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {}
