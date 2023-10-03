package my.dogpark.model;

public enum PlaygroundNames {
    DOGPARK(0),
    GARTEN(0);

    private int value;

    PlaygroundNames(int value) {
        this.value= value;
    }

    public int getValue() {
        return value;
    }
    public void incrementValue(){
        this.value++;
    }
}
