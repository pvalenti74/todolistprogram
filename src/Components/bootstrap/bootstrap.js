import React from 'react'
import './Bootstrap.css'
import { Container, Row, Tab, Tabs, Nav, Col, Accordion, Head, Alert } from 'react-bootstrap'

export default function Bootstrap() {
    return (
        <section>
            <div className='bg'></div>
            {/* Header */}
            <div className='header'>
                <p>- REACT TO DO APP -</p>
            </div>
            {/* <hr className='superhr' /> */}
            <Container>
                {/* TABS */}
                <Tabs defaultActiveKey='0' justify variant='pills' className='t' fill>
                    <Tab eventKey='0' title='API'>
                        {/* API ALERTS*/}
                        <>
                            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((variant) => (
                                <Alert key={variant} variant={variant}>
                                    This is a {variant} colored task on my to-do!
                                </Alert>
                            ))}
                        </>
                    </Tab>
                    <Tab eventKey='1' title='How-To'>
                        {/* Accordian */}
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                </Tabs>
            </Container>
        </section>
    )
}
