package my.dogpark.model;

public class Playground {
    private PlaygroundNames name;
    private int capacity;

    public void setName(PlaygroundNames name) {
        this.name = name;
    }

    public Playground(PlaygroundNames name, int capacity) {
        this.name = name;
        this.capacity = capacity;
    }

    public PlaygroundNames getName() {
        return name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }
}
