import React from "react";
import ReactDOM from "react-dom";
import client from './client';

const Customer = ({ key, customer }) => {
    return <div>{customer.firstName}</div>
};

const CustomersList = ({ customers }) => {
    const customersList = customers.map(customer => {
        return <Customer key={customer._links.self.href} customer={customer}/>
    });
    return <div>{customersList}</div>
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { customers: [] };
    }
    componentDidMount() {
        client({ method: 'GET', path: '/api/customers' }).then(response => {
            this.setState({ customers: response.entity._embedded.customers });
        });
    }

    render() {
        return <CustomersList customers={this.state.customers} />
    }
}

ReactDOM.render(<App />, document.getElementById("react"));