import React from 'react';
import { connect } from 'dva';
import styles from './style.scss';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        const { theme } = this.props.setting;

        return (
            <div className={`${styles['home-container']} ${theme}`}>
                <h1 className={styles["title"]}>Thanks for using Green-spark. </h1>
            </div>
        );
    }
}

// 把models的state变成组件的props
function mapStateToProps (state) {
    return {
        setting: state.setting,
    };
}

export default connect(mapStateToProps)(Home);
