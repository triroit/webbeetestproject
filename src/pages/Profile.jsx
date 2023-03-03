import React from "react";
import Stack from "react-bootstrap/Stack";
import Accordion from 'react-bootstrap/Accordion';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image'
import postphoto from '../images/postphoto.jpg'
import profilephoto from '../images/profilephoto.jpg'
import { Link } from "react-router-dom";
import '../styles/App.css';
import { Gear, Calendar, Person, People, Diagram2, PiggyBank, Eye, ChatLeftText, Clock } from "react-bootstrap-icons";
import { useMediaQuery } from 'react-responsive'

const Profile = () => {
    const isBigScreen = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isBigScreen && <div className='bg-main p-2'>
                <Stack direction="horizontal" gap={2} className="m-2 p-3">
                    <Stack gap={3} className="w-75 me-2">
                        <div className="bg-light border p-4 ">
                            <Image src={postphoto} alt='Post photo' className="img-fluid pt-3" fluid='true' />
                            <div className="p-2"><ChatLeftText /> <Link to="#">Jason Anderson</Link> commented:</div>
                            <div className="d-flex flex-row pt-4">
                                <div className="vr"></div>
                                <blockquote className="blockquote mb-0 ps-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jason, 10:30 am
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="d-flex flex-row pt-4">
                                <div className="p-2"><Eye /> 432 </div>
                                <div className="p-2"><ChatLeftText /> 47</div>
                            </div>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="border-bottom">
                                    <div>Sunset Sunset Sunset</div>
                                    <div className="ms-auto"><Clock /> 53 minutes ago</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Post
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="border-bottom">
                                    <div>Morning in Siberia</div>
                                    <div className="ms-auto"><Clock /> 56 minutes ago</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Post
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                    <Stack gap={3} className="w-25 ms-3">
                        <div className="bg-light border p-5 text-center">
                            <Image src={profilephoto} alt='Profile photo' roundedCircle='true' fluid='true' />
                            <h4 className="links-color">Hanna Dorman</h4>
                            <div className="text-secondary">UI/UX Designer</div>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="border-bottom">Navigation</Accordion.Header>
                                    <Accordion.Body>
                                        <Nav className="d-flex flex-column">
                                            <div className="border-bottom">
                                                <Nav.Link href="#"><Person /> My profile</Nav.Link>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><PiggyBank /> Balance</div><Badge pill bg="light" text="dark">$1,430</Badge></Nav.Link>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><Diagram2 /> Connections</div><Badge pill bg="danger" >39</Badge></Nav.Link>
                                                <Nav.Link href="#"><People /> Friends</Nav.Link>
                                            </div>
                                            <div>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><Calendar /> Events</div>
                                                    <Badge pill bg="success">49</Badge></Nav.Link>
                                                <Nav.Link href="#"><Gear />  Account settings</Nav.Link>
                                            </div>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="border-bottom">Share your thoughts</Accordion.Header>
                                    <Accordion.Body className="p-2">
                                        <InputGroup>
                                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter your message..." />
                                        </InputGroup><Button variant="primary" className="w-100 mt-2">Save</Button>{' '}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Stack>
                </Stack>
            </div >}
            {isTabletOrMobile &&
                <div>
                    <Stack gap={7} className="m-2 p-3">
                        <div className="bg-light border p-5 text-center mb-4">
                            <Image src={profilephoto} alt='Profile photo' roundedCircle='true' className="img-fluid w-50"/>
                            <h4 className="links-color">Hanna Dorman</h4>
                            <div className="text-secondary">UI/UX Designer</div>
                        </div>
                        <div className="mb-4">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="border-bottom">Navigation</Accordion.Header>
                                    <Accordion.Body>
                                        <Nav className="d-flex flex-column">
                                            <div className="border-bottom">
                                                <Nav.Link href="#"><Person /> My profile</Nav.Link>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><PiggyBank /> Balance</div><Badge pill bg="light" text="dark">$1,430</Badge></Nav.Link>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><Diagram2 /> Connections</div><Badge pill bg="danger" >39</Badge></Nav.Link>
                                                <Nav.Link href="#"><People /> Friends</Nav.Link>
                                            </div>
                                            <div>
                                                <Nav.Link href="#" className="d-flex justify-content-between"><div><Calendar /> Events</div>
                                                    <Badge pill bg="success">49</Badge></Nav.Link>
                                                <Nav.Link href="#"><Gear />  Account settings</Nav.Link>
                                            </div>
                                        </Nav>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="mb-4">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="border-bottom">Share your thoughts</Accordion.Header>
                                    <Accordion.Body className="p-2">
                                        <InputGroup>
                                            <Form.Control as="textarea" aria-label="With textarea" placeholder="Enter your message..." />
                                        </InputGroup><Button variant="primary" className="w-100 mt-2">Save</Button>{' '}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div><hr className="border border-3 opacity-100 "/></div>
                        <div className="bg-light border p-4 mb-4">
                            <Image src={postphoto} alt='Post photo' className="img-fluid pt-3" fluid='true' />
                            <div className="p-2"><ChatLeftText /> <Link to="#">Jason Anderson</Link> commented:</div>
                            <div className="d-flex flex-row pt-4">
                                <div className="vr"></div>
                                <blockquote className="blockquote mb-0 ps-2">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                    <footer className="blockquote-footer">
                                        Jason, 10:30 am
                                    </footer>
                                </blockquote>
                            </div>
                            <div className="d-flex flex-row pt-4">
                                <div className="p-2"><Eye /> 432 </div>
                                <div className="p-2"><ChatLeftText /> 47</div>
                            </div>
                        </div>
                        <Accordion className="mb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="border-bottom">
                                    <div>Sunset Sunset Sunset</div>
                                    <div className="ms-auto"><Clock /> 53 minutes ago</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Post
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className="mb-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="border-bottom">
                                    <div>Morning in Siberia</div>
                                    <div className="ms-auto"><Clock /> 56 minutes ago</div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    Post
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Stack>
                </div>
            }
        </div>
    );
};

export default Profile;
