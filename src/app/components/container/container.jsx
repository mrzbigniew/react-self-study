import React from 'react';
import PropTypes from 'prop-types';

import './styles/styles.scss';

const Container = ({children}) => {
    return (
        <div className="container-fluid">
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node
}

export default Container;