import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Summary from './workSummary.data';

import './workSummary.style.scss';

const WorkSummary = () => {
    return (
        <div>
            <Card className="outerCard">
                <Card.Body>
                    <Card.Title>
                        <h3>My career journey till now</h3>
                    </Card.Title>
                    <Row className="SummaryRow h-100">
                        {
                            Summary.map((exp, idx) => {
                                return (
                                    <Col s={12} lg={3} className="my-2" key={idx} >
                                        <Card className="aboutContainer h-100">
                                            <Card.Title>
                                                <h4 style={{ margin: "4px 0px" }}>
                                                    {exp.OneWord}
                                                </h4>
                                                <hr />
                                            </Card.Title>
                                            <Card.Subtitle>
                                                <span>{exp.Time}</span>
                                            </Card.Subtitle>
                                            <hr />
                                            <Card.Text>
                                                <span>{exp.Descp}</span>
                                                <hr />
                                                <span>Role: {exp.Role}</span>
                                            </Card.Text>
                                        </Card>
                                    </Col>)
                            })
                        }
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default WorkSummary;