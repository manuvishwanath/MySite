import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Hobbies from './makesMeTick.data'

const MakesMeTick = () => {
    return (
        <Card className="my-4  MakesMeTick">
            <Card.Body>
                <Card.Title>
                    <h4> Whats interests me..</h4>
                </Card.Title>
                <Row>
                    {
                        Hobbies.map((hob, idx) => {
                            const imgPath = require('../../Assets/Hobbies/' + hob.image);
                            return (
                                // <div key={idx} className="col-sm-6 col-lg-3 py-2">
                                //     <div class="card h-100" >
                                //         <Card.Body className="skillContainer">
                                //             <Card.Img variant="top" className="card-img-top img-fluid h-100" src={imgPath}
                                //                 height="300px" alt={hob.title} />
                                //         </Card.Body>
                                //         <Card.Footer id="skillFoot">{hob.title}</Card.Footer>
                                //     </div>
                                // </div>
                                <Col s={12} lg={3} className="my-2" key={idx}>
                                    <Card className="aboutContainer h-100">
                                        <Card.Title>
                                            <h3 style={{ margin: "4px 0px" }}>
                                                {hob.title}
                                            </h3>
                                            <hr />
                                        </Card.Title>
                                        <Card.Img alt={hob.title} src={imgPath} height="100px" />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Card.Body>
        </Card>
    );

}

export default MakesMeTick;