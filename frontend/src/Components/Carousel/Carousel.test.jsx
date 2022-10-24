import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from './Carousel';

import matchMediaPolyfill from 'mq-polyfill'

matchMediaPolyfill(window)

window.resizeTo = function resizeTo(width, height) {
    Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height
    }).dispatchEvent(new this.Event('resize'))
}

const cars = {

    "year": 2006,
    "id": 1,
    "horsepower": 200,
    "make": "Honda",
    "model": "CRV",
    "price": 30000,
    "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Honda_CR-V_2.0_i-MMD_Hybrid_Lifestyle_%28V%29_%E2%80%93_f_02012021.jpg/640px-Honda_CR-V_2.0_i-MMD_Hybrid_Lifestyle_%28V%29_%E2%80%93_f_02012021.jpg"

}


it("should display car picture on the screen", async () => {
    //Arrange
    render(<Router><Carousel cars={cars} /></Router>);
    //Act
    const picture = screen.getByRole("img");
    //Assert
    expect(picture).toBeInTheDocument();
});
