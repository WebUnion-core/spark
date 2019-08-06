import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'dva/router';
import { connect } from 'dva';
import NavHeader from './components/NavHeader';

const routes = require('./routes.json');
const menuModules = [];

routes.forEach((item) => {
    menuModules.push(require('./routes/' + item.name).default);
});

class RouterConfig extends React.Component {
    constructor(props) {
        super(props);

        this.allTabs = [
            {
                label: 'Home',
                pathname: '/',
            },
            {
                label: 'Setting',
                pathname: '/setting',
            },
        ];
    }

    getCurrentRouteIndex = (history) => {
        let index = 0;

        this.allTabs.forEach((tabItem, tabIndex) => {
            if (tabItem.pathname === history.location.pathname) {
                index = tabIndex;
            }
        });

        return index;
    }

    handleChange = (event, newValue) => {
        const { history } = this.props;
        const { pathname } = this.allTabs[newValue];
        history.replace({ pathname });
        this.forceUpdate();
    }

    render() {
        const { history, setting } = this.props;
        const tabIndex = this.getCurrentRouteIndex(history);

        return (
            <Router history={ history }>
                <React.Fragment>
                    <NavHeader
                        theme={ setting.theme }
                        handleChange={ this.handleChange }
                        tabIndex={ tabIndex }
                        tabs={ this.allTabs }
                    />
                    <Switch>
                    {
                        routes.map((routeItem, routeIndex) =>
                            <Route
                                key={ routeIndex }
                                path={ routeItem.pathname }
                                component={ menuModules[routeIndex] }
                                exact
                            />
                        )
                    }
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

// 把models的state变成组件的props
function mapStateToProps (state) {
    return {
        setting: state.setting,
    };
}

RouterConfig = connect(mapStateToProps)(RouterConfig);

export default function ({ history }) {
    return <RouterConfig history={ history } />
};
