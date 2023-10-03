package my.dogpark.service;

import my.dogpark.model.Dog;
import my.dogpark.model.Visit;

import java.util.HashSet;
import java.util.Set;

public class UniqueVisitService {
    public int countUniqueVisits(Set<Visit> visits) {
        Set<Dog> dogs= new HashSet<>();
        for (Visit visit : visits) {
            Dog dog= visit.getDog();
            dogs.add(dog);
        }
        return dogs.size();
    }
}
