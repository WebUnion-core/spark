import React from 'react';
import { connect } from 'dva';
import styles from './style.scss';

// ui
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class Setting extends React.Component {
    handleChange = (event) => {
        this.props.dispatch({
            type: 'setting/save',
            payload: {
                theme: event.target.value,
            },
        });
    }

    render() {
        const { theme } = this.props;

        return (
            <div className={`${styles['setting-container']} ${theme}`}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Choice theme style: </FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="theme"
                        value={ theme }
                        onChange={ this.handleChange }
                    >
                        <FormControlLabel
                            value="day"
                            control={<Radio />}
                            label="Day"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="night"
                            control={<Radio />}
                            label="Night"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                    <FormHelperText>You can set your theme here. </FormHelperText>
                </FormControl>
            </div>
        );
    }
}

// 把models的state变成组件的props
function mapStateToProps (state) {
    return { ...state.setting };
}

export default connect(mapStateToProps)(Setting);
