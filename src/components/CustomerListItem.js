import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({ name, dni, editAction, delAction, urlPath }) => {
    return (
        <div>
            <div className="customer-list-item">
                <div className="field">
                    <Link to={`${urlPath}/${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/edit/${dni}`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}/delete/${dni}`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    dni: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;