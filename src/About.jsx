import { Card, CardImg, Row, Col } from 'reactstrap';

function About() {
    return (
        <div className='about-container'>

            <Row >
                <Col sm="6">
                    <Card>
                        <div>
                        <p >
                            What every human being wants is to truly be them selves and be accepted
                            for who they are. I have often struggled to accept myself, particularly 
                            the music aspect, it was so close to my heart , i thought letting anyone
                            into my world would break me.Yet its been the most humbling and healing experience
                            i have ever had.

                            Through-out the writing process I have cried and laughed, felt weak and strong, happy 
                            and sad.Through all of it I have experienced what it truly means to live. To want something 
                            as much as you want to breath.There is nothing I want more.There is nothin I enjoy more.
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.”

                            The purpose of lorem ipsum is to create a natural looking block of
                            text (sentence, paragraph, page, etc.)
                            that doesn't distract from the layout. A practice not without controversy,
                            laying out pages with meaningless filler
                            text can be very useful when the focus is meant to be on design, not content.

                            The passage experienced a surge in popularity during the 1960s when
                            Letraset used it on their dry-transfer sheets,
                            and again during the 90s as desktop publishers
                            bundled the text with their software. Today it's seen all around the web;
                            on templates, websites, and stock designs.
                            Use our generator to get your own, or read on for
                            the authoritative history of lorem ipsum.
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.”

                            The purpose of lorem ipsum is to create a natural looking block of
                           
                            that doesn't distract from the layout. A practice not without controversy,
                            laying out pages with meaningless filler
                            text can be very useful when the focus is meant to be on design, not content.
                            The passage experienced a surge in popularity during the 1960s when
                            Letraset used it on their dry-transfer sheets,
                            and again during the 90s as desktop publishers
                            and again during the 90s as desktop publishers
                            and again during the 90s as desktop publishers
                            the authoritative history of lorem ipsum.
                        </p>


                        </div>
                       
                    </Card>
                </Col>
                <Col sm="6">
                    <CardImg
                        class="card-img-top"
                        src="images/ayshan.png"
                        alt="text" />

                </Col>
            </Row>

        </div>
    )
}
export default About;