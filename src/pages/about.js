import * as React from 'react';
import {ProgressSteps, NumberedStep} from 'baseui/progress-steps';
import {Button, SHAPE, KIND, SIZE} from 'baseui/button';
import {useStyletron} from 'baseui';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";

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
function AboutPage() {
  const [current, setCurrent] = React.useState(0);
  const [value, setValue] = React.useState("")
  const [css, theme] = useStyletron();
  return (
      <MDBContainer className="py-5 my-5">
        <form className="py-4" action="">
        <ProgressSteps current={current}>
        <NumberedStep title="Personal Information">
            <div className={css({...theme.typography.ParagraphSmall})}>
            Here is some step content
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
            Here is some more content
            </div>
            <SpacedButton onClick={() => setCurrent(0)}>
            Previous
            </SpacedButton>
            <SpacedButton onClick={() => setCurrent(2)}>
            Next
            </SpacedButton>
        </NumberedStep>
        <NumberedStep title="Content Management">
            <div className={css({...theme.typography.ParagraphSmall})}>
            Here too!
            </div>
            <SpacedButton onClick={() => setCurrent(1)}>
            Previous
            </SpacedButton>
            <SpacedButton disabled>Next</SpacedButton>
        </NumberedStep>
        </ProgressSteps>
        </form>
      </MDBContainer>
  );
}
export default AboutPage;