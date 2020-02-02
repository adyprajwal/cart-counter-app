import React, { Component } from "react";

//Stateless Functional Components
const Navbar = props => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Items
                <span className="m-2 badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
    );
};

//Above Functional Component works same as the class based component below
//While we have to define the simple components which doesn't have states then
//it is better to use stateless functional components

// class NavBar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">
//                     Items
//                     <span className="m-2 badge badge-pill badge-secondary">
//                         {this.props.totalCounters}
//                     </span>
//                 </a>
//             </nav>
//         );
//     }
// }

export default NavBar;
