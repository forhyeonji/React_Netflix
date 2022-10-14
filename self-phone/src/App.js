import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import InsertForm from "./component/InsertForm";
import StoreBox from "./component/StoreBox";


function App() {
  return (
    <div>
      <h1 className="title">Hyeon-Ji Phone Book</h1>

      <Container>
        <Row>
          <Col>
            <InsertForm />
          </Col>
          <Col>
            <StoreBox />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
