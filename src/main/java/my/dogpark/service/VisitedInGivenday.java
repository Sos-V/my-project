package my.dogpark.service;

import my.dogpark.model.Dog;
import my.dogpark.model.Visit;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class VisitedInGivenday {
    public int countVisitedInGivenday(Set<Visit> visits, LocalDate givenDay) {
        Set<Visit> visitedInGivenDay = visits.stream()
                .filter(visit -> visit.getTimestamp().toLocalDate().equals(givenDay))
                .collect(Collectors.toSet());

        Set<Dog> dogs = new HashSet<>();
        for (Visit visit : visitedInGivenDay) {
            dogs.add(visit.getDog());
        }
        return dogs.size();
    }
}
