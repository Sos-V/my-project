package my.dogpark.service;

import my.dogpark.model.Breed;
import my.dogpark.model.Dog;
import my.dogpark.model.Visit;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

class VisitedInGivendayTest {
    VisitedInGivenday countVisited = new VisitedInGivenday();

    @Test
    void countVisitedInGivenday() {
        Dog dog1 = new Dog("d1", "Luna", Breed.BULLDOG);
        Dog dog2 = new Dog("d2", "Gango", Breed.RETRIEVER);
        Dog dog3 = new Dog("d3", "Rex", Breed.BIEGEL);

        Visit visit1 = new Visit("v1", dog1, null, LocalDateTime.now());
        Visit visit2 = new Visit("v2", dog2, null, LocalDateTime.now());
        Visit visit3 = new Visit("v3", dog1, null, LocalDateTime.now());
        Visit visit4 = new Visit("v4", dog3, null, LocalDateTime.now());

        Set<Visit> visits = new HashSet<>();

        visits.add(visit1);
        visits.add(visit2);
        visits.add(visit3);
        visits.add(visit4);

        int output = countVisited.countVisitedInGivenday(visits, LocalDateTime.now());

        Assertions.assertEquals(3, output);
    }
}