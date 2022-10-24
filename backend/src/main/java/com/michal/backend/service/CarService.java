package com.michal.backend.service;


import com.michal.backend.exception.CarNotFoundException;
import com.michal.backend.model.Car;
import com.michal.backend.repo.CarRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CarService {
    @Autowired
    CarRepo carRepo;

    // CREATE

    public void addCar(Car car) {
        carRepo.save(car);
    }


    // READ

    public Car getCarById(long id) {

        Optional<Car> car = carRepo.findById(id);

        if (car.isEmpty()) {
            throw new CarNotFoundException(id);
        }

        return car.get();
    }

    public List<Car> getCarByMake(String makeName) {
        List<Car> cars = carRepo.getAllByMake(makeName);
        return new ArrayList<>(cars);
    }
    public List<Car> getAllCars() {
                return carRepo.findAll();

    }

    // UPDATE

    public void updateCar(Car newCar, long id) {
        if (!carRepo.existsById(id)) {
            throw new CarNotFoundException(id);
        }

        newCar.setId(id);

        carRepo.save(newCar);
    }

    // DELETE
    @Transactional
    public void deleteCarById(long id) {
        if (!carRepo.existsById(id)) {
            throw new CarNotFoundException(id);
        }

        carRepo.deleteById(id);
    }

    public Object getCarByPrice(int price) {
        return carRepo
                .findAll()
                .stream()
                .filter(car -> car.getPrice() <= price)
                .collect(Collectors.toList());
    }

}


