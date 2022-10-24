package com.michal.backend.controller;

import com.michal.backend.exception.CarNotFoundException;
import com.michal.backend.model.Car;
import com.michal.backend.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CarController {
    @Autowired
    CarService carService;


    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(CarNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }





//get all// by make/  OK
    @GetMapping("/cars")
    public ResponseEntity<List<Car>> getCars(@RequestParam(required = false) String makeName) {
        if(makeName!=null){
            return ResponseEntity.status(HttpStatus.OK).body(carService.getCarByMake(makeName));}

        return ResponseEntity.status(HttpStatus.OK).body(carService.getAllCars());
    }



//get by id

    @GetMapping("/car/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.getCarById(id));
    }


// get car by price

    @GetMapping("car/price")
    public ResponseEntity<Object> getCourseByPrice(@RequestParam int price) {
        return ResponseEntity.status(HttpStatus.OK).body(carService.getCarByPrice(price));
    }



    // UPDATE
@PutMapping ("/car/{id}")
public ResponseEntity<Car> updateGreeting(@RequestBody Car newCar, @PathVariable long id) {
    newCar.setId(id);
    carService.updateCar(newCar, id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).body(newCar);
}


    // DELETE
@DeleteMapping ("/car/{id}")
public ResponseEntity<Void> deleteCarById(@PathVariable long id) {
    carService.deleteCarById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
}

// CREATE

    @PostMapping("/car")
    public ResponseEntity<Car> createCar(@RequestBody Car car) {
        carService.addCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(car);
    }

}
