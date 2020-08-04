import React from 'react';
import { Card, Tabs, Tab } from 'react-bootstrap';

import './Exprience.style.scss';
import ProfessionTimelineComponent, { EduTimeLineComponent } from '../Components/timeline/timeline.component';

const ExperiencePage = () => {
    return (
        <Card>
            <Card.Title>
                <div style={{ marginTop: "10px" }}>
                    <h2>
                        Working Experiences
                    </h2>
                    <h4>This is where I can implement and show all I have learnt!!</h4>
                </div>
            </Card.Title>
            <Card.Body>
                <Tabs defaultActiveKey="Experience" justify="true" variant="pills">
                    <Tab eventKey="Experience" title="Experience">
                        <div >
                            <div className="focus-container" >
                                <h3 >My Professional Experience</h3>
                            </div>
                            <ProfessionTimelineComponent />
                        </div>
                    </Tab>
                    <Tab eventKey="Education" title="Education">
                        <div>
                            <div className="focus-container" >
                                <h3 className="focus-container">My Education</h3>
                            </div>
                            <EduTimeLineComponent />
                        </div>
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
    );
};

export default ExperiencePage;