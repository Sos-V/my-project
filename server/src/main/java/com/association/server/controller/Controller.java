package com.association.server.controller;

import com.association.server.model.Person;
import com.association.server.model.PersonRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("persons")
public class Controller extends CorsConfig {
    private final PersonRepository personRepository;


    public Controller(PersonRepository personRepository) {
        this.personRepository = personRepository;

    }

    @GetMapping
    List<Person> getPersons() {
        return personRepository.findAll();
    }

    @GetMapping("/{id}")
    Person getPerson(@PathVariable Long id) {
        return personRepository.findById(id).orElse(null);
    }

    @PostMapping
    Person savePerson(@RequestBody Person person) {
        return personRepository.save(person);

    }

    @DeleteMapping("/{id}")
    void deletePerson(@PathVariable Long id) {
        personRepository.deleteById(id);

    }



    @Transactional
    @PatchMapping("/{id}")
    public void updatePerson(@PathVariable Long id, @RequestBody Person person) {
        Person personForUpdate = personRepository.findById(id).orElse(null);

        assert personForUpdate != null;
        personForUpdate.setName(person.getName());
        personForUpdate.setAge(person.getAge());
        personForUpdate.setSport(person.getSport());

    }

}
