import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import TimelineComponent, { TimeLineHoverMain } from '../Components/timeline/timeline.component';

const ExperiencePage = () => {
    return (
        <Card>
            <Card.Title>
                <h2>
                    Working Experiences
                </h2>
                <h4>This is where I can implement and show all I have learnt!!</h4>
            </Card.Title>
            <Card.Body>
                <Row>
                    <Col>
                        <h3>My Professional Experience</h3>
                        <TimelineComponent />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>My Education</h3>
                        <TimeLineHoverMain />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ExperiencePage;