package my.dogpark.service;

import my.dogpark.model.Breed;
import my.dogpark.model.Dog;
import my.dogpark.model.Visit;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class UniqueVisitServiceTest {
    UniqueVisitService uniqueVisitService = new UniqueVisitService();

    @Test
    void countUniqueVisitsReturns0() {

        //Arrange
        Set<Visit> visit = new HashSet<>();
        //Act
        int output = uniqueVisitService.countUniqueVisits(visit);
        //Assert
        Assertions.assertEquals(0, output);
    }

    @Test
    void countUniqueVisitsReturns1() {
        Dog dog = new Dog("1", "Luna", Breed.BULLDOG);
        Visit visit1 = new Visit("v1", dog, null, null);
        Visit visit2 = new Visit("v2", dog, null, null);
        //Arrange

        Set<Visit> visits = new HashSet<>();
        visits.add(visit1);
        visits.add(visit2);
        //Act
        int output = uniqueVisitService.countUniqueVisits(visits);
        //Assert
        Assertions.assertEquals(1, output);

    }
}