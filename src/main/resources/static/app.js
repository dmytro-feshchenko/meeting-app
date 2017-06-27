import React from "react";
import ReactDOM from "react-dom";

// class MyCustomer extends React.Component {
//     render() {
//         return <div>Hi, there.</div>
//     }
// }

const MyCustomer = () => {
    return <div>Hi, there</div>
};

ReactDOM.render(<MyCustomer />, document.getElementById("react"));