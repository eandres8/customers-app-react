import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomerList from '../components/CustomerList';
import { fetchCostumers } from '../actions/fetchCostumers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {

    componentDidMount() {
        this.props.fetchCostumers();
    }
    

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomerList
                customers={customers} urlPath={'/customers'}>
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
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCostumers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
}

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(
    connect( mapStateToProps, { fetchCostumers } )(CustomersContainer) 
);