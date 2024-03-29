//react
import * as React from 'react';

//icon
import Ionicon from 'react-ionicons';

//dbk svg import
import dbk from '../assets/img/dbk.svg';

const Footer = () => {
  return (
    <footer>
      <div className="wrapper" id="footer-wrapper">
        <div className="credits">
          <h3 className="credits-heading">Credits</h3>
          <div className="credits-list-container">
            <ul>
              Reporters
              <li>Hallie Miller</li>
              <li>Lindsey Feingold</li>
              <li>Audrey Decker</li>
              <li>Brooks DuBose</li>
              <li>Christine Condon</li>
              <li>Leah Brennan</li>
            </ul>
            <ul>
              Copy Editors
              <li>Ryan Romano</li>
              <li>Jillian Atelsek</li>
              <li>Arya Hodjat</li>
              <li>Rebecca Stryer</li>
              <li>Anastasia Marks</li>
              <li>Iris Vukmanovic</li>
              <li>Ben Cooper</li>
            </ul>
            <ul>
              Design & Development
              <li>Lexus Drumgold</li>
              <li>Akshay Guthal</li>
              <li>Shivam Agrawal</li>
            </ul>
            <ul>
              Project Editors
              <li>Hallie Miller</li>
              <li>Ryan Romano</li>
            </ul>
            <ul>
              Photos & Graphics
              <li>Tom Hausman</li>
              <li>Maris Medina</li>
            </ul>
          </div>
        </div>

        <div className="footer-main">
          <a
            className="logo"
            href="http://www.dbknews.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={dbk} alt="" />
          </a>
          <a
            className="donate"
            href="http://www.dbknews.com/donate/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Ionicon icon="md-heart" color="white" />
            <p>Support DBK</p>
          </a>
          <div className="addthis_sharing_toolbox" id="add-this" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
