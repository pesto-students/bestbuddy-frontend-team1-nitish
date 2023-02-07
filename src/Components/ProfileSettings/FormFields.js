import { Form, Button, Container, Row} from 'react-bootstrap';

const ProfileSettingsFormFields = () => {
    return <>
    <Container>
    <Form>
    <Row>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label column="sm" className='profile-settings-form-labels'>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
    </Row>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </>
}

export default ProfileSettingsFormFields;