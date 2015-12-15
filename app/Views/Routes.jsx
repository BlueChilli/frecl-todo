import React from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Container from "../Components/Container.jsx";
import Home from './Home.jsx';
import ToDo from './ToDo.jsx';
import StyleGuide from '../../Frecl/StyleGuide/style-guide.jsx';
import ga from "../Helpers/GoogleAnalytics";


// Documentation Imports
// (This prob should be somewhere else)

import DocHome from './../../doc/Views/Home.jsx';
import DocShowComponent from './../../doc/Views/Component.jsx';
import Doc from './../../doc/Views/Layout.jsx';

var appHistory = createBrowserHistory();


export default React.createClass({
    unlisten: null,
    componentWillMount(){
        this.unlisten = appHistory.listen(location => {
            if (location.action !== 'POP') {
                ga('send', 'pageview', location.pathname);
            }
        });
    },
    componentWillUnmount(){
        this.unlisten();
    },
    handleRouterUpdate(){
        window.scrollTo(0, 0)
    },
    render() {
        return (
            <Router history={appHistory} onUpdate={this.handleRouterUpdate}>
                <Route>
                    <Route path="/" component={Home}/>
                    <Route path="/ToDo">
                      <Route path="/*" component={ToDo}/>
                    </Route>
                    <Route path="/style-guide" component={StyleGuide}/>
                </Route>
                <Route component={Doc}>
                    <Route path="doc" component={DocHome}/>
                    <Route path="doc/component/:name(/:tab)" component={DocShowComponent}/>
                </Route>
            </Router>
        );
    }
});
