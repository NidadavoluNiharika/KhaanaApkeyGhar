import React from "react";
import * as ReactDOM from 'react-dom/client';

    const Header = () => {
        return (
            <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPNMBVqQllPnayfCQqIzD1TnP8YE-dWwQRw&s"/>
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

    const Body = () => {
        return(
            <div className="body">
             <div className="search">
                Search
             </div>
             <div className="res-container">
             <RestaurantCard resName = "Big Bowl" cuisine = "Chinese"/>
             <RestaurantCard resName = "Taara" cuisine = "South Asian"/>
             </div>

            </div>
        );
    };

    const RestaurantCard = (props)=> {
        return(
            <div className="res-card">
            <img className="res-logo"
            src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh"/>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 star</h4>
            <h4>15 minutes</h4>
            </div>
        )
    }

    const AppLayout = () => {
        return (
            <div className="app">
            <Header/>
            <Body/>
            </div>
        );
     };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>);