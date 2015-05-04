'use strict';

var React = require('react/addons');
var LinkedStateMixin = React.addons.LinkedStateMixin;

var Switch = require('./index');

var App = React.createClass({
    mixins: [
        LinkedStateMixin
    ],
    getInitialState: function() {
        return {
            switchValue: false
        };
    },
    render: function() {
        return (
            <Switch className="switch" valueLink={this.linkState('switchValue')}>Click me to toggle {this.state.switchValue ? "Off" : "On"}</Switch>
        );
    }
});

var el = document.getElementById('app');
React.render(<App />, el);