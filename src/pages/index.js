import React, { useState } from 'react'
import { Input } from "baseui/input";
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Textarea } from "baseui/textarea";
import ArrowRight from 'baseui/icon/arrow-right';
import {Button, SHAPE, KIND, SIZE} from 'baseui/button';
import { FileUploader } from "baseui/file-uploader";
import { RadioGroup, Radio, ALIGN } from "baseui/radio";
import fb from '../icons/facebook.svg';
import ig from '../icons/instagram.svg';
import tw from '../icons/twitter.svg';
// import yt from '../icons/youtube.svg';
import ln from '../icons/linkedin.svg';
import {ProgressSteps, NumberedStep} from 'baseui/progress-steps';
import {useStyletron} from 'baseui';
import {FacebookShareButton, LinkedinShareButton, TwitterShareButton, InstapaperShareButton} from 'react-share'

function SpacedButton(props) {
    return (
      <Button
        {...props}
        shape={SHAPE.pill}
        kind={KIND.secondary}
        size={SIZE.compact}
        overrides={{
          BaseButton: {
            style: ({$theme}) => ({
              marginLeft: $theme.sizing.scale200,
              marginRight: $theme.sizing.scale200,
              marginTop: $theme.sizing.scale800,
            }),
          },
        }}
      />
    );
}

const Index = () => {
    const [value, setValue] = useState("");
    const [option, setOption] = useState("1");
    const [errorMessage] = useState("");
    const [sucess, setSuccess] = useState(false);
    const [current, setCurrent] = useState(0);
    const [css, theme] = useStyletron();

    const sucessProps = {
        disabled: sucess ? true : false
    }

    return (
        <>
        <MDBContainer className="py-5 my-5">
            <form className="py-4" action="">
            <ProgressSteps       
            overrides={{
            Content: {
            style: ({ $theme }) => ({ width: `1000px` })
            }
        }} current={current}>
            <NumberedStep title="Personal Information">
                <div className={css({...theme.typography.ParagraphSmall})}>
                    Let's get acquainted!
                </div>
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
                <SpacedButton disabled>Previous</SpacedButton>
                <SpacedButton onClick={() => setCurrent(1)}>
                Next
                </SpacedButton>
            </NumberedStep>
            <NumberedStep title="Choosing a template">
                <div className={css({...theme.typography.ParagraphSmall})}>
                    Decide what to put on your video
                </div>
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
                <SpacedButton onClick={() => setCurrent(0)}>
                Previous
                </SpacedButton>
                <SpacedButton onClick={() => setCurrent(2)}>
                Next
                </SpacedButton>
            </NumberedStep>
            <NumberedStep title="Content Management">
                <div className={css({...theme.typography.ParagraphSmall})}>
                    Upload your content here
                </div>
                <MDBRow className="py-4">
                    <MDBCol md="8" lg="8">
                        <FileUploader errorMessage={errorMessage} />
                    </MDBCol>
                </MDBRow>
                <SpacedButton onClick={() => setCurrent(1)}>
                Previous
                </SpacedButton>
                <SpacedButton onClick={() => setCurrent(3)}>Next</SpacedButton>
            </NumberedStep>
            <NumberedStep title="Publishing Content">
                <div className={css({...theme.typography.ParagraphSmall})}>
                    You need to integrate your social media platforms before continuing, just tap on them to get started
                </div>
                <MDBRow className="py-4">
                    <MDBCol md="8" lg="8">
                        <MDBRow>
                            <MDBCol md="3" lg="3">
                                <FacebookShareButton onShareWindowClose={()=>setSuccess(true)} url={`https://stream.mux.com/eMVdTuBU01rRqbyYEvAcZygJHNDJl01v502.m3u8`}>
                                    <img className="clickable" src={fb} alt=""/>
                                </FacebookShareButton>
                            </MDBCol>
                            <MDBCol md="3" lg="3">
                                <LinkedinShareButton openShareDialogOnClick={()=>setSuccess(true)} url={`https://stream.mux.com/eMVdTuBU01rRqbyYEvAcZygJHNDJl01v502.m3u8`}>
                                    <img className="clickable" src={ln} alt=""/>
                                </LinkedinShareButton>
                            </MDBCol>
                            <MDBCol md="3" lg="3">
                                <TwitterShareButton url={`https://stream.mux.com/eMVdTuBU01rRqbyYEvAcZygJHNDJl01v502.m3u8`}>
                                    <img className="clickable" src={tw} alt=""/>
                                </TwitterShareButton>
                            </MDBCol>
                            <MDBCol md="3" lg="3">
                                <InstapaperShareButton url={`https://stream.mux.com/eMVdTuBU01rRqbyYEvAcZygJHNDJl01v502.m3u8`}>
                                    <img className="clickable" src={ig} alt=""/>
                                </InstapaperShareButton>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <SpacedButton onClick={()=>setCurrent(2)}>
                Previous
                </SpacedButton>
                <SpacedButton {...sucessProps} type="submit" endEnhancer={() => <ArrowRight size={24} />}>
                    Initiate Handshake
                </SpacedButton>
            </NumberedStep>
            </ProgressSteps>
            </form>
        </MDBContainer>
        </>
    )
}

export default Index
