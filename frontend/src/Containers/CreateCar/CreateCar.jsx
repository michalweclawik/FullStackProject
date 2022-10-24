// import "./CreateCar.scss";
import AddCar from "../../Components/AddCar/AddCar";
import { useNavigate } from 'react-router-dom'

const CreateCar = () => {

    let navigate = useNavigate();
    const handleSubmit = async car => {
        const result = await fetch("http://localhost:8080/car", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(car),
        });

        if (result.ok) {
            alert("Car added");
            navigate("/");
        } else {
            const message = await result.text();
            alert(message);
        }
    };

    const defaultFormState = {
        year: "",
        horsepower: "",
        make: "",
        model: "",
        price: "",
        img_url: ""
    };

    return (
        <section className="create-greeting">

            <AddCar handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add  new car to store" />
        </section>
    );
};

export default CreateCar;
