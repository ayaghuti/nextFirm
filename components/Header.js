import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import NProgress from 'nprogress'
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import '.././node_modules/nprogress/nprogress.css';

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // console.log(APP_NAME);
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <Link href="/"><NavLink className="font-weight-bold">{APP_NAME}</NavLink></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link href="/about"><NavLink>درباره ما</NavLink></Link>              
            </NavItem>           
            <NavItem>
              <Link href="/contact"><NavLink>تماس با ما</NavLink></Link>              
            </NavItem>           
            <NavItem>
              <Link href="/consult"><NavLink>مشاوره</NavLink></Link>              
            </NavItem>           
            <NavItem>
              <Link href="/"><NavLink>خانه</NavLink></Link>              
            </NavItem>           
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;