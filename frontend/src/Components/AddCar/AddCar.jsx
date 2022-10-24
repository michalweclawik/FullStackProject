import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const AddCar = ({ defaultFormState, handleSubmit, formTitle }) => {

    const [car, setCar] = useState(defaultFormState);

    const handleValidation = event => {
        event.preventDefault();

        if (Object.values(car).some(value => !value)) {
            alert("Missing content, unable to proceed");
            return;
        }

        handleSubmit(car);
    };


    const { year, horsepower, make, model, price, img_url, } = car;

    const handleInput = (e) => {
        setCar({ ...car, [e.target.name]: e.target.value });
    }

    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>{formTitle}</h2>

                    <form onSubmit={handleValidation}>
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

export default AddCar