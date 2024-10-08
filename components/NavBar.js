/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

// prettier-ignore
import {
  Navbar, Container, Nav, Button, Image,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image src="/logo.png" height={70} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/rideHistory">
              <Nav.Link>ride history</Nav.Link>
            </Link>
            <Link passHref href="/startRide">
              <Nav.Link>start ride</Nav.Link>
            </Link>
            <Link passHref href="/faq">
              <Nav.Link>faq</Nav.Link>
            </Link>
            <Link passHref href="/modal">
              <Nav.Link>Modal Test</Nav.Link>
            </Link>
            <Link passHref href="/scooterMaintenance">
              <Nav.Link>Report An Issue</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
