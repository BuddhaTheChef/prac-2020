import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";


class NavBar extends Component {

  render() {
    return (
      <div>
        <div>
          <ul className="nav-list">
            <li className="nav-list__item nav-list__item--active">
              <Link to="/" className="nav-list__link">
                Home Base
              </Link>
            </li>
            <li className="nav-list__item">
              <Link to="/About" className="nav-list__link">
                Games
              </Link>
            </li>
        </ul>
        </div>
        </div>
    );
  }
}

 
export default withRouter(NavBar);