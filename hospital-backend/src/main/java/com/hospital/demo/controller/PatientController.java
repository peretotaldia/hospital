package com.hospital.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.hospital.demo.model.Patient;
import com.hospital.demo.repository.PatientRepository;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private final PatientRepository repo;

    public PatientController(PatientRepository repo){
        this.repo = repo;
    }

    @GetMapping
    public List<Patient> list(){
        return repo.findAll();
    }

    @PostMapping
    public Patient create(@RequestBody Patient p){
        return repo.save(p);
    }
}
