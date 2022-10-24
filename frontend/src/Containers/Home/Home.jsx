import Carousel from "../../Components/Carousel/Carousel";
import "./Home.scss"
import { useState, useEffect } from "react";




const Home = () => {

  const [cars, setCars] = useState([]);
  const [selectedMake, setSelectedMake] = useState();


  const getCars = async make => {

    let url = "http://localhost:8080/cars";

    if (make) {
      url += `?makeName=${make}`
    }

    const response = await fetch(url);

    const carsData = await response.json();
    setCars(carsData);
  };

  useEffect(() => {

    getCars(selectedMake);
  }, [selectedMake]);

  return <>
    <h1 className='text-center m-4 car__header' >WELCOME TO THE BEST CAR  DEALERSHIP IN ToWN</h1>
    <h2 > the best of the best one!! </h2>
    <h4 className='text-center m-4 '>Search by make :  <input type="text"
      placeholder="search by make  "
      className="searchBar"
      onChange={(e) => setSelectedMake(e.target.value)}
      value={selectedMake}
    /></h4>

    <Carousel cars={cars} />
  </>
};

export default Home;
