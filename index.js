'use strict';

var React = require('react/addons');
var cx = require('classnames');

var Switch = React.createClass({
    getDefaultProps: function() {
    },
    getValueLink: function(props) {
        return props.valueLink || {
            value: props.value,
            requestChange: props.onChange
        };
    },
    componentWillMount: function() {
        var valueLink = this.getValueLink(this.props);
        this.setState({on: valueLink.value});
    },
    componentWillReceiveProps: function(nextProps) {
        var valueLink = this.getValueLink(nextProps);
        this.setState({on: valueLink.value});
    },
    toggle: function(e) {
        var on = !this.state.on;
        this.setState({on: on});
        var valueLink = this.getValueLink(this.props);
        valueLink.requestChange && valueLink.requestChange(on);
    },
    isActive: function() {
        return this.state.on;
    },
    render: function () {
        return (
            <div onClick={this.toggle} className={cx(this.props.className, {active: this.isActive()})}>{this.props.children}</div>
        );
    }
});

module.exports = Switch;
