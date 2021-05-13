import { Card, Container, Row, Form, Col, Button } from 'react-bootstrap';
import qrCode from '../assets/qrCode.png';

const Body = () => {
    return (
        <Container>
            <Row className='justify-content-center'>
                <div >
                    <div className='text-center justify-content-center'>
                        <h1>Survey for PSYC 515</h1>
                        <Card body>
                            <small><b>Disclosure:</b> I have this mostly set up for demo. Currently the 'Send' button is not actually taking data from the form to send, and it's pulling up your default email. Once my class is done I would revisit this. Step one would be connect the form date into the email and set it up so that it just sends without needing to go back to the person's email. Once this is complete you would have a url to a web-app that you could email. I could also generate you a QR code (or other technology) that you could print and laminate or save to your phone. Then people could scan that to pull up your current survey and go on their merry way while completing it, if you'd like to use it that way.turn Second step would involve wrapping this in an app that would allow you to select which type of question and type it in, building your thing from components.</small>
                        </Card>
                        <br />
                        <Card className='bg-light border-dark rounded-pill mx-auto' style={{ width: '24rem' }}>
                            <Card.Body>
                                <Card.Title>Spirituality</Card.Title>
                                <Card.Text>a personal belief that there is more to life than you and the things that relate to you</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Row>
                <br />
                <p><b>Directions:</b> Please circle the number that best reflects your answer for each question.</p>
            <Row className='justify-content-center mt-3'>
                <Form action='mailto:"tedawilder@gmail.com" method="post" enctype="text/plain"'>
                    <Form.Group controlId='demographics'>
                        <Form.Label>What is your gender and age?</Form.Label>
                        <Row>
                            <Col><Form.Control type='number' placeholder='age'></Form.Control></Col>
                            <Col>    
                                <Form.Control as="select">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other/prefer not to say</option>
                                </Form.Control>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Isn't Maggie the coolest?</Form.Label>
                        <Row>
                            <Col className='text-left'>Definitely</Col>
                            <Col className='text-right'>Indubitably</Col>
                        </Row>
                        <Row>
                            <Form.Control type='range' />
                            
                        </Row>
                        
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type='submit'>Send</Button>    
                    </div>
                    
                </Form>
            </Row>
            <Card className='mt-3'>
                <Card.Img src={qrCode} style={{ width: '50%', height: '50%' }} className='mx-auto' />
            </Card>

        </Container>
    )
}

export default Body

// In terms of the questions I have about my life, my spirituality answers
// No questions                Absolutely all of my questions

// Growing spiritually is
// More important that any else in my life         Of no importance to me

// When I’m faced with an important decision, my spirituality
// Plays absolutely no role                    Is always the overriding consideration

// Spirituality is
// The master motive of my life, direction every other aspect of my life               Not part of my life

// When I think of the things that help me to grow and mature as a person, my spirituality
// Has no effect on my personal growth                             Is absolutely the most important factor in my personal growth

// My spiritual beliefs affect
// Absolutely every aspect of my life                      No aspect of my life

// This portion pertains to physiological effects associated with anxiety.
// The rating scale is as follows:
// Did not apply to me at all
// Applied to me to some degree, or some of the time
// Applied to me to a considerable degree or a good part of the time
// Applied to me very much of most of the time

// In the last 2 weeks:
//     I was aware of dryness of my mouth
//     I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion
//     I experienced trembling (e.g. in the hands)
//     I was worried about situations in which I might panic and make a fool of myself
//     I felt I was close to panic
//     I was aware of the action of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)
//     I felt scared without any good reason
