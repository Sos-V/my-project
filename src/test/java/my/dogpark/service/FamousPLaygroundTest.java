package my.dogpark.service;

import my.dogpark.model.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

class FamousPlaygroundTest {
FamousPlayground mostVisited = new FamousPlayground();
    @Test
    void findFamousPlayground() {

        Dog dog1 = new Dog("d1", "Luna", Breed.BULLDOG);
        Dog dog2 = new Dog("d2", "Gango", Breed.RETRIEVER);
        Dog dog3 = new Dog("d3", "Rex", Breed.BIEGEL);

        Playground p1 = new Playground(PlaygroundNames.GARTEN,3);
        Playground p2 = new Playground(PlaygroundNames.DOGPARK,10);

        Visit visit1 = new Visit("v1", dog1, p1, LocalDateTime.now());
        Visit visit2 = new Visit("v2", dog2, p2, LocalDateTime.now());
        Visit visit3 = new Visit("v3", dog1, p2, LocalDateTime.now());
        Visit visit4 = new Visit("v4", dog3, p2, LocalDateTime.now());

        Set<Visit> visits = new HashSet<>();

        visits.add(visit1);
        visits.add(visit2);
        visits.add(visit3);
        visits.add(visit4);

        PlaygroundNames output = mostVisited.findFamousPlayground(visits);
        System.out.println(output.getValue());
        Assertions.assertEquals(p2.getName(),output);
    }
}