import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import { StyledLink } from "baseui/link";

const AboutPage = () => {
    return (
        <MDBContainer className="py-5 my-5">
            <MDBRow>
                <MDBCol>
                    <h1 className="h1-responsive font-weight-bold">
                        What's the purpose of this application?
                    </h1>
                    <div className="content my-4">
                        <p className="lead">
                            The main purpose of this application is to help people create content for Dojo, especially get recognition to audiences from different kinds of social media platforms.
                            Educate people from here and the application does it's job to spread the good word out! We are moving forward in to the digital world. Everything and any content will be published
                            and used for the greater good.
                        </p>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-3">
                <MDBCol>
                    <h3 className="h3-responsive font-weight-bold">
                        Check out our other web applications
                    </h3>
                    <div className="content my-3">
                        <StyledLink href="https://baseweb.design">
                            Dojo
                        </StyledLink><br/>
                        <StyledLink href="https://baseweb.design">
                            Devasuki
                        </StyledLink><br/>
                        <StyledLink href="https://baseweb.design">
                            Real Raw Talent
                        </StyledLink><br/>
                        <StyledLink href="https://baseweb.design">
                            AIT
                        </StyledLink>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default AboutPage
