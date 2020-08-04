import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FiPhoneCall, FiMail, FiHome } from 'react-icons/fi';
import WorkSummary from '../Components/aboutme/workSummary.component';

import MyImage from "../Assets/My_pencile_70.png";

import './home.page.style.scss';
import AboutMyself from '../Components/aboutme/myself.component';
import MakesMeTick from '../Components/aboutme/makesMeTick.component';

const HomePage = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [isLocation, setIsLocation] = useState(false);

    const getLocationFromIP = async () => {
        console.log("hit getLocationFromIP");
        if (isLocation === false) {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                setLatitude(latitude => latitude = data["latitude"]);
                setLongitude(longitude => longitude = data["latitude"]);
                console.log("Log " + longitude + " and lat " + latitude);
                setIsLocation(true);
                return `(${data["latitude"]},${data["longitude"]})`;
            }
            catch (err) {
                console.log("hit getLocationFromIP error:");
                setIsLocation(true);
                return console.error(err);
            }
        }
    }

    const getWeather = async () => {
        if ((longitude !== null || longitude !== undefined || longitude !== '') &&
            (latitude !== null || latitude !== undefined || latitude !== '')) {
            console.log("Weather get call");
            const totalUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude +
                "&lon=" + longitude + "&appid={a69a208583ebd32d0e82c95c3b81f450}";
            let weatherResp = await fetch(totalUrl);
            console.log(weatherResp);
            const wetherData = await weatherResp.json();
            console.log(JSON.stringify(wetherData));
        }
    }

    useEffect(() => {
        (async () => {
            await getLocationFromIP();
            await getWeather();
        })();
    }, [isLocation, getLocationFromIP]);



    const currTime = new Date().getHours();
    let greeting = '';
    if (currTime < 12) {
        greeting = 'Good Morning';
    } else if (currTime < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }


    return (
        <Card>
            <Card.Body>
                <Row className="h-80" xs={12}>
                    <Col s={12} lg={5}>
                        <img src={MyImage} className="img-fluid" alt="Handsome" />
                    </Col>
                    <Col s={12} lg={7}>
                        <div >
                            <Card className="aboutContainer my-20">
                                <Card.Title >
                                    <h2 className="my-auto">
                                        Hello There!! {greeting}!
                                    </h2>
                                </Card.Title>
                                <Card.Body>
                                    <div style={{ margin: "20px, 2px" }}>
                                        It is a beautiful sunny day, isn't it!!
                                    <br />Let me introduce myself.
                                    <br /> I am Manu Vishwanath.
                                    <br />I am an enthusiastic software developer.
                                    <br />Working in Windows application and Web applications
                                    <br />Always learning and waiting to work on something new.
                                    </div>
                                    <hr />
                                    <ul style={{ listStyleType: "none" }}>
                                        <li>
                                            <a href="callto:+91 9986655671" >
                                                <FiPhoneCall />+91 9986655671</a>
                                        </li>
                                        <li><a href="mailto:manu.vishwanath@gmail.com">
                                            <FiMail />manu.vishwanath@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/maps/search/?api=1&query=banglore"><FiHome />Namma Banglore. You will just love it!!</a>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AboutMyself />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <WorkSummary />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <MakesMeTick />
                    </Col>
                </Row>
            </Card.Body>
            <div>
                Hello there. Thank you visiting my site.
                This is still under construction and always updating for new UI and themes.
                </div>
        </Card>
    );
}

export default HomePage;