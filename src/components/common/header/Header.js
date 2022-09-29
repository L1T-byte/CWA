import React from 'react';
import { Navbar } from '../../common' ;
//import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
//import { faChevronDown } from "@fontawesome/free-solid-svg-icons";




import './Header.css';

function Header () {

  return (
    <section className="header">

      <section className="header-top">

        <section className="avatar">
        <p>LOGO</p>
        </section>

        <section className="header-top_navbar">
          <section className="header-top_navigation">
            <Navbar />MENUBAR
          </section>
          <hr className="header-top_seperator" />
        </section>

      </section>

      <section className="header-bottom">BOTTOM HEADER
        <section className="header-bottom__phone">
          Phone number
        </section>
        <section className="header-bottom__email">
        <a href="#"><i class="fas fa-icon"></i>Email Link</a>
        </section>
      </section>

    </section>
        )

        
          
              
}

export default Header;