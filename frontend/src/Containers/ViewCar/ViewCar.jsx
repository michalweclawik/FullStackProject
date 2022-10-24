import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Car from '../../Components/Car/Car';

const ViewCar = () => {
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




    const getCarById = async () => {
        const url = `http://localhost:8080/car/${id}`;
        console.log(url);
        const response = await fetch(url);
        const carData = await response.json();
        setCar(carData);

    };

    useEffect(() => {
        getCarById();
    }, []);

    const handleDelete = async () => {
        const result = await fetch(`http://localhost:8080/car/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert("Car deleted");
        navigate("/");

    };



    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <Car car={car} />
                    <Link to={`/editcar/${id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                    <button type='submit' className='btn btn-outline-danger mx-2' onClick={handleDelete} >Delete</button>
                    <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>

                </div>
            </div>
        </div >
    )
}


export default ViewCar