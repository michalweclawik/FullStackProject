import React from 'react'
import './Car.scss';

const Car = ({ car }) => {

    const { year, horsepower, make, model, price, img_url, } = car;

    return (
        <div className='car mb-2'>
            <h2 className='text-center m-2 car__header'>Car detail</h2>

            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Year</label>
                <p>{year}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Horsepower</label>
                <p>{horsepower}</p>
            </div>

            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Make</label>
                <p>{make}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Model</label>
                <p>{model}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Price</label>
                <p>{price}</p>
            </div>
            <div className="mb-3">
                <label htmlFor="Branch" className='form-label'>Image</label>
                <img className='car__image mb-2' src={img_url} alt="" />
            </div>

        </div>
    )
}

export default Car;  
