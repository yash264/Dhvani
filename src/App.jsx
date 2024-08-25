import React from "react";
import { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "./App.css";

const App = () => {
  const [text,setText] = useState()
  const [isCopied, setCopied] = useClipboard(text);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language:'en-IN'});
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
      <div >
        <img src={require("./dhvani.jpg")} alt="Dhvani" />

        <Navbar className="bg-body-tertiary justify-content-between">
          <Form inline>
            <Row>
              <Col xs="auto">
                <Button variant="outline-secondary">Services</Button>
              </Col>
            </Row>
          </Form>
        </Navbar>


        <Card className="text-center">
          <Card.Header><h3>Voice to Text</h3></Card.Header>
            <Card.Body>
                <Card.Text>
                  <FloatingLabel controlId="floatingTextarea2" label="Generated Text">
                    <Form.Control as="textarea" defaultValue={transcript} onClick={()=>setText(transcript)} style={{ height: '100px' }} /><span style={{color:"red"}}>* After speaking, Please Click on the text to edit.</span>
                  </FloatingLabel>
                </Card.Text>
            </Card.Body>
            <Card.Header></Card.Header>
        </Card>

        <div className="btn-style">

          <Button variant="outline-primary" onClick={setCopied}>
            {isCopied ? "Copied" : "Copy to ClipBoard"}
          </Button>{' '}

          <Button variant="outline-success" onClick={startListening}>Start Listening</Button>{' '}
          <Button variant="outline-danger" onClick={SpeechRecognition.stopListening}>Stop Listening</Button>{' '}

        </div>
        <br/>

        <div class="footer">
          <br/>
            <p>&copy; 2024 Designed, Developed and Hosted by National Informatics Center.</p>
          <br/>
        </div>
      </div>
    </>
  );
};

export default App;
