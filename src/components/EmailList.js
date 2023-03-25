import React from "react"
import { Form, FormGroup, Label, Input, Container, Card, CardBody } from "reactstrap"

const EmailList = () => {
    return (
    
        <Container >
            <div className="justify-content-center d-flex">
            <Card className="col-md-6 text-center cardEmail">
                <CardBody>
                <Form>
            <FormGroup>
                <Label for="EmailList"><p>Join our <span className="bold">Email List</span> to be notify for our next drop</p>  </Label>
                <Input type="email" name="email" id="EmailList" placeholder="Email" />
            </FormGroup>
            </Form>
            </CardBody>
        </Card>
        </div>
        </Container>
    )
}

export default EmailList