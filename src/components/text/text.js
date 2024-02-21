import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    fontFamily: 'sans-serif',
};

const Text = ({ text }) => {
    return <div style={styles}>{text}</div>;
};

Text.propTypes = {
    text: PropTypes.string,
};

Text.defaultProps = {
    text: 'Hello World',
};

export default Text;