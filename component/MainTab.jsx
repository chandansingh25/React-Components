import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import OneVideoWillPlayOnlyWithSilder from "./video/OneVideoWillPlayOnlyWithSilder";
import StudentVideo from "./video/StudentVideo";
import FormWithYup from "./Form/FormWithYup";
import CalcWrap from "./Form/Calc/CalcWrap";
import ReviewImageUpload from "./ImageUpload/ReviewImageUpload";
import HeroSection from "./Form/Hero/HeroSection";

const MainTab = () => {
  return (
    <Tab.Container defaultActiveKey="hero">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column pt-3 ps-3">
            <Nav.Item>
              <Nav.Link eventKey="hero">Welcome</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="calc">Calc</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="form1">Form</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="video1">Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="video2">Video With Slider</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="multiimageupload">
                Multi Image Upload
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="p-4 rounded bg-light">
            <Tab.Pane eventKey="hero">
              <HeroSection />
            </Tab.Pane>
            <Tab.Pane eventKey="calc">
              <h5 className="text-center mb-3">Calc</h5>
              <CalcWrap />
            </Tab.Pane>
            <Tab.Pane eventKey="form1">
              <h5 className="text-center mb-3">Form With Yup Validation</h5>
              <FormWithYup />
            </Tab.Pane>
            <Tab.Pane eventKey="video1">
              <h5 className="text-center mb-3">
                One Video Will Play at One Time
              </h5>
              <StudentVideo />
            </Tab.Pane>
            <Tab.Pane eventKey="video2">
              <h5 className="text-center mb-3">
                One Video Will Play at One Time in Slider
              </h5>
              <OneVideoWillPlayOnlyWithSilder />
            </Tab.Pane>
            <Tab.Pane eventKey="multiimageupload">
              <h5 className="text-center mb-3">
                One Video Will Play at One Time in Slider
              </h5>
              <ReviewImageUpload />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default MainTab;
