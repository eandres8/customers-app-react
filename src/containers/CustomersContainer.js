import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomerList from '../components/CustomerList';

const customers = [
    { 'dni': '27000000', 'name': 'Juan Perez', 'age': 37 },
    { 'dni': '30000000', 'name': 'Otro', 'age': 35 },
    { 'dni': '37000000', 'name': 'Luis Martinez', 'age': 32 },
];

class CustomersContainer extends Component {

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers} urlPath={'customers/'}>
            </CustomerList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame header={'Listado de Clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;