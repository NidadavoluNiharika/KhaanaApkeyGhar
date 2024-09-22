import React from "react";
import * as ReactDOM from 'react-dom';

    const heading = React.createElement("div", {id:'main'},[React.createElement("h1",{id:"child1"},"You are worthy!"),
    React.createElement("h1",{id:"child2"},"You are responsible for your life!!")   
    ]);
     const jsxHeading = <h1> You are worthy. You alone are responsible for your Life.</h1>
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxHeading);