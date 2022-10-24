package com.michal.backend.repo;

import com.michal.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,Long> {
    List<Car> getAllByMake(String makeName);



}
