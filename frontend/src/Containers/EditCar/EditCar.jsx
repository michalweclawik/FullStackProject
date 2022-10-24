import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditCar = () => {
    let navigate = useNavigate();
    const { id } = useParams();

    const [car, setCar] = useState({
        year: "",
        horsepower: "",
        make: "",
        model: "",
        price: "",
        img_url: ""
    })


    const { year, horsepower, make, model, price, img_url, } = car;

    const getCarById = async () => {
        const url = `http://localhost:8080/car/${id}`;
        const response = await fetch(url);
        const carData = await response.json();
        console.log(carData);
        setCar(carData);
    };

    useEffect(() => {
        getCarById();
    }, []);

    const handleSubmit = async updatedCar => {
        const result = await fetch(`http://localhost:8080/car/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });


        alert("Car updated");
        navigate("/");


    };


    const handleInput = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }


    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Car</h2>

                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Year</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter year'
                                name="year"
                                value={year}
                                onInput={(e) => handleInput(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Horsepower</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter car horsepower'
                                name="horsepower"
                                value={horsepower}
                                onInput={(e) => handleInput(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Make</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter car make'
                                name="make"
                                value={make}
                                onInput={(e) => handleInput(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Model</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter car model'
                                name="model"
                                value={model}
                                onInput={(e) => handleInput(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Price</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter car price'
                                name="price"
                                value={price}
                                onInput={(e) => handleInput(e)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Branch" className='form-label'>Img_url</label>
                            <input type={"text"}
                                className="form-control "
                                placeholder='Enter car img_url'
                                name="img_url"
                                value={img_url}
                                onInput={(e) => handleInput(e)} />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>

                        <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCar