/**
 * Copyright 2016, Sourcepole AG.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const {connect} = require('react-redux');
const Message = require('../../MapStore2/web/client/components/I18N/Message');
const {SideBar} = require('../components/SideBar');

const Help = React.createClass({
    propTypes: {
        renderBody: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            renderBody: () => { return null; }
        }
    },
    render() {
        return (
            <SideBar id="Help" width="20em">
                <span className="sidebar-title" role="title">
                    <img src="assets/img/info_white.svg"/>
                    <Message msgId="appmenu.items.help" />
                </span>
                <div role="body">
                    {this.props.renderBody()}
                </div>
            </SideBar>
        );
    }
});

module.exports = (renderHelp) => { return {
    HelpPlugin: connect((state) => ({
        renderBody: renderHelp
    }), {})(Help),
    reducers: {
        task: require('../reducers/task')
    }
}};
