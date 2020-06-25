import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FiPhoneCall, FiMail, FiHome } from 'react-icons/fi';
import TimelineComponent, { TimeLineHoverMain } from '../Components/timeline/timeline.component';
import MyImage from "../Assets/My_pencile_70.png";

import './home.page.style.scss';
import AboutMyself from '../Components/aboutme/myself.component';


const HomePage = () => {

    return (
        <Card>
            <Card.Body>
                <Row className="h-80">
                    <Col xs={5}>
                        <img src={MyImage} className="img-fluid" />

                    </Col>
                    <Col xs={7}>
                        <div >
                            <Card className="aboutContainer my-20">
                                <Card.Title >
                                    <h2 className="my-auto">
                                        Hello There!!Good Morning!
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
                                            <a href="#"><FiHome />Namma Banglore. You will just love it!!</a>
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
            </Card.Body>
        </Card>
    );
}

export default HomePage;