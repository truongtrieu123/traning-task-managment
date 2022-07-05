import { Navbar, Nav, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { logoutUser } from "store/actions/auth-action";
import { Router, useRouter } from "next/router";

const NavbarMenu = () => {
  const authStore = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const router = useRouter();
  
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow">
      <Navbar.Brand className="fw-bolder text-white">
        <img
          src={'images/logo.svg'}
          alt="logo"
          className="mr-2"
          width="32"
          height="32"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="me-auto"
      ></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav>
          <Nav.Link className="fw-bolder text-white" href="/dashboard">
          Dashboard
          </Nav.Link>
          <Nav.Link className="fw-bolder text-white" href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="d-flex flex-row">
        <Nav.Link className="fw-bolder text-white" disabled>
          Welcome {authStore.user?.username||''}
        </Nav.Link>
        <Button
          variant="warning"
          className="fw-bolder text-white mx-2"
          onClick={() => {
            dispatch(logoutUser());
            router.push('/login');
          }}
        >
          <img
            src='images/logout.svg'
            alt="logoutIcon"
            width="32"
            height="32"
            className="mr-2"
          />
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default NavbarMenu;
