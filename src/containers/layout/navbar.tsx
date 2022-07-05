import { Navbar, Nav, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "utils/hooks";
import { logoutUser } from "store/actions/auth-action";

const NavbarMenu = () => {
  const authStore = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="shadow d-flex">
      <Navbar.Brand className="font-weight-bolder text-white">
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
        className="mr-auto"
      ></Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link className="font-weight-bolder text-white" href="/dashboard">
          Dashboard
          </Nav.Link>
          <Nav.Link className="font-weight-bolder text-white" href="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav className="d-flex flex-row">
        <Nav.Link className="font-weight-bolder text-white" disabled>
          Welcome {authStore.user?.username||''}
        </Nav.Link>
        <Button
          variant="secondary"
          className="font-weight-bolder text-white ml-2"
          onClick={() => {
            dispatch(logoutUser());
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
