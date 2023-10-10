package my.dogpark.service;

import my.dogpark.model.PlaygroundNames;
import my.dogpark.model.Visit;

import java.util.Set;

public class FamousPlayground {
    public PlaygroundNames findFamousPlayground(Set<Visit> visits) {
        for (Visit visit : visits) {
            PlaygroundNames playgroundName = visit.getPlayground().getName();

        }
        PlaygroundNames maxPlayground = null;
        int maxValue = 0;
        for (PlaygroundNames playgroundName : PlaygroundNames.values()) {
            if (playgroundName.getValue() > maxValue) {
                maxValue = playgroundName.getValue();
                maxPlayground = playgroundName;
            }

        }
        return maxPlayground;


        //return visits.stream().map(visit-> PlaygroundNames.valueOf(visit.getPlayground().getName()).getValue());
    }
}
