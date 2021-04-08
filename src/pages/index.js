import React, { useState } from 'react'
import { Input } from "baseui/input";
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Textarea } from "baseui/textarea";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button} from 'baseui/button';
import { FileUploader } from "baseui/file-uploader";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import fb from '../icons/facebook.svg';
// import ig from '../icons/instagram.svg';
import tw from '../icons/twitter.svg';
import yt from '../icons/youtube.svg';
import ln from '../icons/linkedin.svg';

const Index = () => {
    const [value, setValue] = useState("");
    const [option, setOption] = useState("1");
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <>
        <MDBContainer className="my-5 py-5">
            <MDBRow>
                <MDBCol>
                    <h3 className="h3-responsive font-weight-bold">Personal Information</h3>
                </MDBCol>
            </MDBRow>
            <form className="py-4" action="">
            <MDBRow>
                <MDBCol md="8" lg="8">
                    <MDBRow className="py-2">
                    <MDBCol md="6" lg="6">
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="First Name"
                            clearOnEscape
                        />
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Last Name"
                            clearOnEscape
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-2">
                    <MDBCol md="6" lg="6">
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Email"
                            clearOnEscape
                        />
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <Input
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Company"
                            clearOnEscape
                        />
                    </MDBCol>
                </MDBRow>
                <MDBRow className="py-2">
                    <MDBCol>
                    <Textarea
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Reason for using handshake"
                        clearOnEscape
                    />
                    </MDBCol>
                </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-4">
                <MDBCol>
                    <Button endEnhancer={() => <ArrowRight size={24} />}>
                        Next Step
                    </Button>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <h3 className="h3-responsive font-weight-bold">Upload Content</h3>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-4">
                <MDBCol md="8" lg="8">
                    <FileUploader errorMessage={errorMessage} />
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-2">
                <MDBCol>
                    <Button endEnhancer={() => <ArrowRight size={24} />}>
                        Next Step
                    </Button>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <h3 className="h3-responsive font-weight-bold">Choosing a template</h3>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-4">
                <MDBCol md="8" lg="8">
                    <RadioGroup
                        value={option}
                        onChange={e => setOption(e.target.value)}
                        name="number"
                        align={ALIGN.vertical}
                    >
                        <Radio value="1">One</Radio>
                        <Radio
                            value="2"
                            description="This is a radio description"
                        >
                            Two
                        </Radio>
                        <Radio value="3">Three</Radio>
                    </RadioGroup>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-2">
                <MDBCol>
                    <Button endEnhancer={() => <ArrowRight size={24} />}>
                        Next Step
                    </Button>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-4">
                <MDBCol md="8" lg="8">
                    <MDBRow>
                        <MDBCol md="3" lg="3">
                            <img className="clickable" src={fb} alt=""/>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <img className="clickable" src={ln} alt=""/>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <img className="clickable" src={tw} alt=""/>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <img className="clickable" src={yt} alt=""/>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            <MDBRow className="py-2">
                <MDBCol>
                    <Button endEnhancer={() => <ArrowRight size={24} />}>
                        Initiate Handshake
                    </Button>
                </MDBCol>
            </MDBRow>
            </form>
        </MDBContainer>
        </>
    )
}

export default Index
