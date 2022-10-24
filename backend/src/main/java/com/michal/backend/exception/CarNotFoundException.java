package com.michal.backend.exception;

public class CarNotFoundException extends  RuntimeException {
    public CarNotFoundException(long id){
        super("No car found " + id);
    }
}
