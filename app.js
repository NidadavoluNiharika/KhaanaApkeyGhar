
const heading = React.createElement("div", {id:'main'},[React.createElement("h1",{id:"child1"},"You are worthy!"),
    React.createElement("h1",{id:"child2"},"You are responsible for your life!!")   
    ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);