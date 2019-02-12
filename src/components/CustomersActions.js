import React from 'react';
import PropTypes from 'prop-types';

const CustomersActions = props => {
    return (
        <div>
            <div className="customers-actions">
                <div>{props.children}</div>
            </div>
            
        </div>
    );
};

CustomersActions.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CustomersActions;