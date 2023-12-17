package com.association.server.controller;

import com.association.server.model.Person;
import com.association.server.model.PersonRepository;
import com.association.server.service.PersonService;
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
       // return ps.getAllPersons();
    }
    @GetMapping("/{id}")
     Person getPerson(@PathVariable Long id){
        return personRepository.findById(id).orElse(null);
    }

    @PostMapping
     Person savePerson(@RequestBody Person person) {
        return personRepository.save(person);
       // return ps.savePerson(person);
    }
    @DeleteMapping("/{id}")
     void deletePerson(@PathVariable Long id){
        personRepository.deleteById(id);
       // ps.deletePerson(id);
    }
}
