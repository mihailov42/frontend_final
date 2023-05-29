import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img weight={420} height={900}
          className="d-block w-100"
          src="./img/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ОПОРА - В СВОИХ</h3>
          <p>СПЕЦИАЛЬНЫХ ПРЕДЛОЖЕНИЯХ ОФИЦИАЛЬНОГО СЕРВИСА LADA</p>
          
            <Button variant="primary">
              ПОДРОБНЕЕ
            </Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img weight={420} height={900}
          className="d-block w-100"
          src="./img/2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ЗАКАЗ ЛАДА ОНЛАЙН</h3>
          <p>АВТОМОБИЛИ В НАЛИЧИИ</p>
         
            <Button variant="primary">
              ПОДРОБНЕЕ
            </Button>
     
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img weight={420} height={900}
          className="d-block w-100"
          src="./img/3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>LADA ПОМОЩЬ НА ДОРОГЕ ПЛЮС</h3>
          <p>
            КРУГЛАСУТОЧНАЯ ПОДДЕРЖКА ВАШЕГО АВТОМОБИЛЯ
          </p>
         
            <Button variant="primary">
              ПОДРОБНЕЕ
            </Button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img weight={420} height={900}
          className="d-block w-100"
          src="./img/4.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>СЕРВИС ДРУЖЕСКОЙ ПОДДЕРЖКИ</h3>
          <p>
            ВЫГОДНЫЕ УСЛОВИЯ ПОКУПКИ И СЕРВИСА АВТОМОБИЛЕЙ С ПРОБЕГОМ
          </p>
          
            <Button variant="primary">
              ПОДРОБНЕЕ
            </Button>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider