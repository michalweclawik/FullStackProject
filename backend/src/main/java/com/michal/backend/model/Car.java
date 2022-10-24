package com.michal.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Car {

    private Long year;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Long horsepower;
    private String make;
    private String model;

    private Long price;
    private String img_url;

public Car(){

}
    public Car(Long year, Long horsepower, String make, String model, String name, Long price, String img_url) {
        this.year = year;
        this.horsepower = horsepower;
        this.make = make;
        this.model = model;
        this.price = price;
        this.img_url = img_url;
    }
//    public Car(Long year, Long id, Long horsepower, String make, String model, String name, Long price, String img_url) {
//        this.year = year;
//        this.id = id;
//        this.horsepower = horsepower;
//        this.make = make;
//        this.model = model;
//        this.price = price;
//        this.img_url = img_url;
//    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getHorsepower() {
        return horsepower;
    }

    public void setHorsepower(Long horsepower) {
        this.horsepower = horsepower;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }





    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
}
