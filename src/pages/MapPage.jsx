import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/App.css';

const MapPage = () => {
    const defaultState = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };

    return (
        <div className="m-3 p-3 mb-0 bg-main">
            <Accordion defaultActiveKey="0" className="pb-0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="border-bottom">
                        <div>Basic Map</div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <YMaps>
                            <div className="m-4 border">
                                <Map
                                    defaultState={defaultState}
                                    width={'100%'}
                                    height={'50vh'}
                                    >
                                </Map>
                            </div>
                        </YMaps>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default MapPage;