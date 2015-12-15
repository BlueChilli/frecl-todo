import React from "react";
import classnames from "classnames";

function insertModifier(string, modifier){
	if(typeof string === 'string'){
		var itemsArr = string.split(' ');
		return itemsArr.map(function(value){
			return value.replace(/-/, modifier);
		}).join(' ');
	}
}

export default React.createClass({
	render: function() {
		var colClasses = insertModifier(this.props.cols, '-col-');
		var offsetClasses = insertModifier(this.props.offset, '-offset-');
		var pullClasses = insertModifier(this.props.pull, '-pull-');
		var pushClasses = insertModifier(this.props.push, '-push-');

		var classes = classnames(colClasses, offsetClasses, pullClasses, pushClasses, this.props.className);

		return <div className={classes}>{this.props.children}</div>;
	}
});
