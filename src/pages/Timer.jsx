import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const Timer = () => {
    return (
            <Accordion defaultActiveKey="0" className="m-3 p-3 mb-0 bg-main">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="border-bottom">
                        <div>Timer</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div>00:00:00</div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    );
};

export default Timer;