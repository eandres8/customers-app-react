import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = props => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <h3>Nombre: {name} / DNI: {dni} / Edad: {age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerEdit;