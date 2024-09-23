import React from "react";
import * as ReactDOM from 'react-dom/client';

    const Header = () => {
        return (
            <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src = "https://pngtree.com/freepng/beautiful-muslimah-chef-cartoon-character-illustration_6863411.html"/>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
            </div>
        );
    };
     const AppLayout = () => {
        return (
            <div className="app">
            <Header/>
            </div>
        );
     };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);