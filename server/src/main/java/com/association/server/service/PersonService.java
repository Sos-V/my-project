package com.association.server.service;

import com.association.server.model.Person;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;

@Repository
public class PersonService {

    private final List<Person> persons;

    public PersonService(List<Person> persons) {
        this.persons = persons;
    }

    public List<Person> getAllPersons() {
        return persons;
    }

    public Person getPerson(Long id)  {
        return persons.stream()
                .filter(person -> person.getId().equals(id))
                .findAny()
                .orElse(null);

    }

    public Person savePerson(Person person) {
        persons.add(person);
        return person;
    }

    public void deletePerson(Long id) {
        persons.remove(getPerson(id));
    }
}
