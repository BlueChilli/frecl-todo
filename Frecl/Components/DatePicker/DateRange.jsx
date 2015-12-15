import React from "react";
import moment from 'moment';

import classnames from 'classnames';

import ReactOutsideClick from "react-onclickoutside";

import InputWrapper from '../Form/InputWrapper.jsx';
import InputGroup from '../Form/InputGroup.jsx';
import {InputSetUpMixin,  onInputChange} from '../Form/Mixins/InputSetUp.js';
import {DateRange} from 'react-date-range';
import {getItemFromPath} from '../../Helpers/objectHelpers';

import "./DateRange.scss";

export default React.createClass({
    mixins: [InputSetUpMixin, ReactOutsideClick],
    getDefaultProps(){
        return {
            dateFormat: 'DD/MM/YYYY'
        }
    },
    getInitialState(){
        return {
            hidden: true
        }
    },
    handleChange(dateRange){
        onInputChange(this.context, this.props, dateRange);
    },
    handleFocus(e){
        e.preventDefault();
        this.setState({hidden: false});
    },
    handleClickOutside() {
        this.setState({hidden: true});
    },
    render() {
        var dateRangeClasses = classnames({hidden: this.state.hidden}, 'date-range-container');
        var getValue = () => {
            const dateRange = this.context.Form.getIn(['fields', this.context.nameSpace, this.props.name, 'value']);
            if (dateRange) {
                return moment(dateRange.startDate).format(this.props.dateFormat) +
                    " to " + moment(dateRange.endDate).format(this.props.dateFormat);
            }
            return "";
        };
        return (
            <div className="date-range-wrapper">
                <InputWrapper className="input date-picker" name={this.props.name}
                              labelPostfix={this.props.labelPostfix}
                              label={this.props.label}>
                    <InputGroup prepend={this.props.prepend} append={this.props.append}>
                        <input onFocus={this.handleFocus} placeholder={this.props.placeholder}
                               value={getValue()} readOnly="true"/>
                    </InputGroup>
                </InputWrapper>

                <div className={dateRangeClasses}>
                    <DateRange calendars={1} onChange={this.handleChange}/>
                </div>
            </div>
        );
    }
});

