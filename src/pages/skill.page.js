import React from 'react';
import { Row, Card, Container } from 'react-bootstrap';

import { bckDesc, dbDesc, otherDesc, libDesc, prgDesc, frntDesc } from './Skills.data';
import './skill.style.scss';

const SkillPage = () => {
    return (
        <Card>
            <Card.Title>
                <h2>
                    My Skills
                </h2>
                <h4>Learning Never Ends. Always ready to learn NEW things!!</h4>
            </Card.Title>
            <Card.Body>
                <TheCardParentCreator cardTitle="Programing Languages" inputArray={prgDesc} />
                <TheCardParentCreator cardTitle="Back End" inputArray={bckDesc} />
                <TheCardParentCreator cardTitle="Front End" inputArray={frntDesc} />
                <TheCardParentCreator cardTitle="Database" inputArray={dbDesc} />
                <TheCardParentCreator cardTitle="Libraries" inputArray={libDesc} />
                <TheCardParentCreator cardTitle="Editors And Source Control" inputArray={otherDesc} />
            </Card.Body>
        </Card>
    );
};

const TheCardParentCreator = ({ cardTitle, inputArray }) => {
    return (
        <div style={{ marginTop: "10px" }} className="skillContainer">
            <Card>
                <h2 className="mt-2"> {cardTitle}</h2>
                <Container>
                    <Row>
                        {inputArray.length > 0 ? (
                            inputArray.map((input, idx) => (
                                <TheCardCreator key={idx} inputDetails={input} />
                            ))
                        ) : null}
                    </Row>
                </Container>
            </Card>
        </div>
    );
}

const TheCardCreator = ({ inputDetails }) => {
    const logoPath = require('../Assets/Logos/' + inputDetails.file);
    const imgHeight = "300px";
    return (
        <div className="col-sm-6 col-lg-3 py-2">
            <div class="card h-100" >
                <Card.Body className="skillContainer">
                    <Card.Img variant="top" className="card-img-top img-fluid h-100" src={logoPath}
                        height={imgHeight} alt="Repair" />

                </Card.Body>
                <Card.Footer id="skillFoot">{inputDetails.desc}</Card.Footer>
            </div>
        </div>
    )
}


export default SkillPage;