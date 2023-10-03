package my.dogpark.model;

public class Dog {
    private String id;
    private String name;
    private  Breed  breed;


    public Dog(String id, String name, Breed breed) {
        this.id = id;
        this.name = name;
        this.breed = breed;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Breed getBreed() {
        return breed;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setBreed(Breed breed) {
        this.breed = breed;
    }
}
