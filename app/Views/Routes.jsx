import React from "react";
import {Router, Route} from "react-router";
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Container from "../Components/Container.jsx";
import BackEnd from './BackEnd.jsx';
import Designer from './Designer.jsx';
import ToDo from './ToDo.jsx';
import StyleGuide from '../../Frecl/StyleGuide/style-guide.jsx';
import ga from "../Helpers/GoogleAnalytics";

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
                <Route component={Container}>
                    <Route path="/" component={BackEnd}/>
                    <Route path="/Designer" component={Designer}/>
                    <Route path="/ToDo">
                      <Route path="/*" component={ToDo}/>
                    </Route>
                    <Route path="/style-guide" component={StyleGuide}/>
                </Route>
            </Router>
        );
    }
});
