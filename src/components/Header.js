import React, { Component } from 'react';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import {logoutUser} from "../actions/authActions";
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';
import {Navbar, Nav} from 'react-bootstrap';

// maybe add buttons to go to profile and to go to chat


// class Header extends Component {
//     logout() {
//         this.props.dispatch(logoutUser());
//     }
// render() {
//     return (
//         <div>
//             <div className="header">
//                 <IconButton>
//                     <PersonIcon fontSize="large" className="header__icon"/>
//                 </IconButton>
//                 <img className="header__logo" src="logo192.png" alt="header"/>
//                 <h1><span className="ribbon-highlight">BTT DATING</span></h1>
//                 <img className="header__logo" src="logo192.png" alt="header"/>
//                 <IconButton>
//                     <ForumIcon fontSize="large" className="header__icon"/>
//                 </IconButton>
//             </div>
//
//             <div className="headerLogin">
//                 <Navbar expand="lg" bg="dark" variant="dark">
//                     <Navbar.Brand>
//                         Dating App
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//                     <Navbar.Collapse id="basic-navbar-nav">
//                         <Nav>
//                             <LinkContainer to="/dating/cards">
//                                 <Nav.Link disabled={!this.props.loggedIn}>Singles For You</Nav.Link>
//                             </LinkContainer>
//                             <LinkContainer to="/signin">
//                                 <Nav.Link>{this.props.loggedIn ?
//                                     <button onClick={this.logout.bind(this)}>Logout</button> : 'Login'}</Nav.Link>
//                             </LinkContainer>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Navbar>
//             </div>
//         </div>
//
//         )
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         loggedIn : state.auth.loggedIn,
//         username : state.auth.username,
//     }
// }
//
// export default connect(mapStateToProps)(Header);

const Header = () => {

    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header__logo" src="logo192.png" alt="header" />
            <h1> <span className="ribbon-highlight">BTT DATING</span></h1>
            <img className="header__logo" src="logo192.png" alt="header" />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div> )
}
export default Header;