import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

const AboutMyself = () => {

    return (
        <div style={{ margin: "20px 2px" }}>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={6}>
                            <div>
                                <h3 style={{ margin: "20px 10px" }}>About Me:</h3>
                                <p>
                                    Hi, I am an Enthusiastic Software Engineer with hands on Windows and Web Application development.
                                    <br />Ready to explore the boundaries of my knowledge and software.
                                    <br />I am passionate about writing beautiful code and creating interactive applications
                                    <br />I have many years of hands on experience related to Application Design and Development.
                                </p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Card className="aboutContainer">

                                <Card.Body>
                                    <Row >
                                        <div className="skillItem"><p>Self Learning</p>
                                            <ProgressBar now={90} striped variant="info" animated label="90%" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="skillItem"><p>Time Management</p>
                                            <ProgressBar now={90} striped variant="info" animated label="90%" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="skillItem"><p>OwnerShip</p>
                                            <ProgressBar now={100} striped variant="success" animated label="100%" />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="skillItem"><p>Problem Solving</p>
                                            <ProgressBar now={85} striped variant="info" animated label="85%" />
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>

            </Card>
        </div>
    );

}

export default AboutMyself;