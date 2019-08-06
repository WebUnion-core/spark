import PropTypes from 'prop-types';
import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

class NavHeader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render () {
        const {
            tabIndex,
            handleChange,
            tabs,
            theme = 'day',
        } = this.props;

        return (
            <Tabs
                className={ theme }
                value={ tabIndex }
                onChange={ handleChange }
                aria-label="ant example"
            >
            {
                tabs.map((item, index) =>
                    <Tab disableRipple key={ index } label={ item.label } />
                )
            }
            </Tabs>
        );
    }
};

NavHeader.propTypes = {
    tabIndex: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    handleChange: PropTypes.func.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.object),
    theme: PropTypes.string,
};

export default NavHeader;
