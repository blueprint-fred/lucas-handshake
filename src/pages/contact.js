import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState } from 'react'
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import {Button} from 'baseui/button';
import ArrowRight from 'baseui/icon/arrow-right';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const { name, email, subject, message } = formData

    return (
        <MDBContainer className="py-5 my-5">
            <MDBRow>
                <MDBCol>
                    <h2 className="h2-responsive font-weight-bold">Need to talk?</h2>
                    <p className="lead">Business, Innovation & Technology</p>
                </MDBCol>
            </MDBRow>
            <form action="">
            <MDBRow className="py-4">
                <MDBCol md="6" lg="6">
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Input
                                value={name}
                                onChange={(e)=>onChange(e)}
                                placeholder="Full Name"
                                name="name"
                                type="text"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Input
                                value={email}
                                onChange={(e)=>onChange(e)}
                                placeholder="Email"
                                name="email"
                                type="email"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Input
                                value={subject}
                                onChange={(e)=>onChange(e)}
                                placeholder="Email"
                                name="subject"
                                type="text"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Textarea
                                name="message"
                                value={message}
                                onChange={(e)=>onChange(e)}
                                placeholder="Message"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Button type="submit" endEnhancer={() => <ArrowRight size={24} />}>
                                Send Message
                            </Button>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </form>
        </MDBContainer>
    )
}

export default ContactPage
