import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import IsLogout from "../isLogin/IsLogout";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../redux/Slice/authSlice";
import IsLogin from "../isLogin/IsLogin";
function Home() {
  const user = useSelector((state) => state.auth.user);
  const disPatch = useDispatch();
  let user_name = "";
  if (user) {
    user_name = "Hi, " + user.hoTen;
  }
  const logOut = () => {
    disPatch(LOGOUT());
  };
  return (
    <div id="nav-bar-header">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="/">
              <img
                style={{
                  width: "90px",
                  height: "50px",
                }}
                src="https://phanmemmarketing.vn/wp-content/uploads/2020/04/pinterest-logo.png"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <NavLink to={"/"}>Trang chủ</NavLink>
                  </Nav.Link>
                  <Nav.Link>
                    <NavLink to={"/create"}>Thêm ảnh</NavLink>
                  </Nav.Link>

                  <IsLogout>
                    <NavDropdown
                      title="Tài khoản"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link to={"/login"}>Đăng nhập</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link to={"/sign-up"}>Đăng Ký</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </IsLogout>
                  <IsLogin>
                    <NavDropdown
                      title={user_name}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link to={"/profile"}>Tùy chỉnh</Link>
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>
                        <Link onClick={logOut}>Đăng xuất</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </IsLogin>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Home;
