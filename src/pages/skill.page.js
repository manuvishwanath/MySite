import React from 'react';
import { Row, Col, Card, CardDeck } from 'react-bootstrap';

const prgDesc = [{
    file: 'c_sharp.png',
    desc: 'Programming starts here'
}, {
    file: 'js-logo.png',
    desc: 'Imagination starts here'
}, {
    file: 'vb_logo.png',
    desc: 'Imagination starts here'
}
]

const bckDesc = [{
    file: 'node_js.png',
    desc: 'The general backend'
}, {
    file: 'express_js.png',
    desc: '"THE" Backend '
}, {
    file: 'api.png',
    desc: 'For the connection'
}
]

const frntDesc = [{
    file: 'html.png',
    desc: 'It is not "programming" language'
}, {
    file: 'react.png',
    desc: 'The general backend'
}, {
    file: 'ejs.jpeg',
    desc: 'The general backend'
}, {
    file: 'css3.png',
    desc: 'The general backend'
},
]

const dbDesc = [{
    file: 'mongo.png',
    desc: 'The "no sql" database'
}, {
    file: 'ms_sql.png',
    desc: 'Microsoft SQL'
}, {
    file: 'entityFrame.png',
    desc: 'The structure and linker'
}, {
    file: 'mongoose.jpg',
    desc: 'The structure and linker'
}
]

const libDesc = [{
    file: 'npm.png',
    desc: 'the package manager'
}, {
    file: 'dot_net.png',
    desc: 'Microsoft SQL'
}, {
    file: 'redux.png',
    desc: 'The structure and linker'
}, {
    file: 'bootstrap.png',
    desc: 'The structure and linker'
}, {
    file: 'firebase.png',
    desc: 'The structure and linker'
}, {
    file: 'material_ui.png',
    desc: 'The structure and linker'
}]

const otherDesc = [{
    file: 'visual_studio.png',
    desc: 'The structure and linker'
}, {
    file: 'vs_code.png',
    desc: 'The structure and linker'
}, {
    file: 'git.png',
    desc: 'The structure and linker'
}]

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
                <Card >
                    <Card.Title> PROGRAMING LANGUAGES</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {prgDesc.length > 0 ? (
                                prgDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Back End</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {bckDesc.length > 0 ? (
                                bckDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Front End</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {frntDesc.length > 0 ? (
                                frntDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Database</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {dbDesc.length > 0 ? (
                                dbDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Front End</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {libDesc.length > 0 ? (
                                libDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Front End</Card.Title>
                    <Card.Body>
                        <CardDeck>
                            {otherDesc.length > 0 ? (
                                otherDesc.map((input, idx) => (
                                    <TheCardCreator key={idx} inputDetails={input} />
                                ))
                            ) : null}
                        </CardDeck>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    );
};

const TheCardCreator = ({ inputDetails }) => {
    const logoPath = require('../Assets/Logos/' + inputDetails.file);
    const imgHeight = "300px";
    return (
        <Card>
            <Card.Body>
                <img className="d-block w-100" src={logoPath}
                    height={imgHeight} alt="Repair" />
            </Card.Body>
            <Card.Footer>
                <p>{inputDetails.desc}</p>
            </Card.Footer>
        </Card>
    )
}

export default SkillPage;