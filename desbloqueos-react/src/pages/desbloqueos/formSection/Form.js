import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBStepper,
  MDBStep,
  MDBBtn,
  MDBInput,
} from "mdbreact";

const Form = () => {
  const [formActivePanel, setFromActivePanel] = useState({
    formActivePanelId: 1,
    formActivePanelChange: false,
  });

  const swapFormActive = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  const handleNextPrevClick = (active) => {
    setFromActivePanel({
      formActivePanelId: active,
      formActivePanelChange: true,
    });
  };

  const handleSubmission = () => {
    alert("Form submitted!");
  };

  const calculateAutofocus = (a) => {
    if (formActivePanel.formActivePanelChange) {
      return true;
    }
  };

  return (
    <MDBContainer>
      <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
        <strong>Registration form</strong>
      </h2>
      <MDBStepper icon>
        <MDBStep
          far
          icon="folder-open"
          stepName="Basic Information"
          onClick={swapFormActive(1)}
        ></MDBStep>
        <MDBStep
          icon="pencil-alt"
          stepName="Personal Data"
          onClick={swapFormActive(2)}
        ></MDBStep>
        <MDBStep
          icon="photo"
          stepName="Terms and Conditions"
          onClick={swapFormActive(3)}
        ></MDBStep>
        <MDBStep
          icon="check"
          stepName="Finish"
          onClick={swapFormActive(4)}
        ></MDBStep>
      </MDBStepper>

      <form action="" method="post">
        <MDBRow>
          {formActivePanel === 1 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Basic Information</strong>
              </h3>
              <MDBInput
                label="Email"
                className="mt-4"
                autoFocus={calculateAutofocus(1)}
              />
              <MDBInput label="Username" className="mt-4" />
              <MDBInput label="Password" className="mt-4" />
              <MDBInput label="Repeat Password" className="mt-4" />
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-right"
                onClick={handleNextPrevClick(2)}
              >
                next
              </MDBBtn>
            </MDBCol>
          )}

          {formActivePanel === 2 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Personal Data</strong>
              </h3>
              <MDBInput
                label="First Name"
                className="mt-3"
                autoFocus={calculateAutofocus(1)}
              />
              <MDBInput label="Second Name" className="mt-3" />
              <MDBInput label="Surname" className="mt-3" />
              <MDBInput label="Address" type="textarea" rows="2" />
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-left"
                onClick={handleNextPrevClick(1)}
              >
                previous
              </MDBBtn>
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-right"
                onClick={handleNextPrevClick(3)}
              >
                next
              </MDBBtn>
            </MDBCol>
          )}

          {formActivePanel === 3 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Terms and conditions</strong>
              </h3>
              <MDBInput
                label="I agreee to the terms and conditions"
                type="checkbox"
                id="checkbox"
                autoFocus={this.calculateAutofocus(1)}
              />
              <MDBInput
                label="I want to receive newsletter"
                type="checkbox"
                id="checkbox2"
              />
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-left"
                onClick={handleNextPrevClick(2)}
              >
                previous
              </MDBBtn>
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-right"
                onClick={handleNextPrevClick(4)}
              >
                next
              </MDBBtn>
            </MDBCol>
          )}

          {formActivePanel === 4 && (
            <MDBCol md="12">
              <h3 className="font-weight-bold pl-0 my-4">
                <strong>Finish</strong>
              </h3>
              <h2 className="text-center font-weight-bold my-4">
                Registration completed!
              </h2>
              <MDBBtn
                color="mdb-color"
                rounded
                className="float-left"
                onClick={handleNextPrevClick(3)}
              >
                previous
              </MDBBtn>
              <MDBBtn
                color="success"
                rounded
                className="float-right"
                onClick={handleSubmission()}
              >
                submit
              </MDBBtn>
            </MDBCol>
          )}
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default Form;
