import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React, { useState } from 'react'
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import {Button} from 'baseui/button';
import ArrowRight from 'baseui/icon/arrow-right';
import emailjs from 'emailjs-com';
import { toaster, ToasterContainer } from "baseui/toast";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [toastKey, setToastKey] = useState(null);

    const onChange = e => setFormData({ [e.target.name]: e.target.value })

    const { name, email, subject, message } = formData

    const loadingProps = {
        isLoading: loading ? true : false
    }

    const closeToast = () => {
        toaster.clear(toastKey);
        setToastKey(null);
      };

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_sen0605', 'template_ule6sq4', e.target, 'user_7ixlPSGYnGWGHHuP7qW1q')
        .then((result) => {
            console.log(result.text);
            setTimeout(() =>{
                setToastKey(toaster.positive('Message Successfully Sent!'));
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                })
                setLoading(false)
            },1500)
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <MDBContainer className="py-5 my-5">
        <ToasterContainer onClick={closeToast} autoHideDuration={1000}>
            <MDBRow>
                <MDBCol>
                    <h2 className="h2-responsive font-weight-bold">Need to talk?</h2>
                    <p className="lead">Business, Innovation & Technology</p>
                </MDBCol>
            </MDBRow>
            <form onSubmit={onSubmit}>
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
                                required
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
                                required
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
                                placeholder="Subject"
                                required
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
                                required
                                value={message}
                                onChange={(e)=>onChange(e)}
                                placeholder="Message"
                                clearOnEscape
                            />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-2">
                        <MDBCol>
                            <Button {...loadingProps} type="submit" endEnhancer={() => <ArrowRight size={24} />}>
                                Send Message
                            </Button>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </form>
        </ToasterContainer>
        </MDBContainer>
    )
}

export default ContactPage
