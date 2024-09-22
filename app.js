import React from "react";
import * as ReactDOM from 'react-dom/client';

    const Title = () => {
        return (<h1> You are worthy</h1>);
    };
     const HeadingComponent = () => {
        return (<div> 
        <Title/>
        <h1> You alone are responsible for your Life.</h1>
        </div>);
     };
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent/>);