import {APP} from '../Constants/APP';
import {DEBUGGING} from '../Constants/DEBUGGING';
import {isProduction} from './Enviroment';

if (window && document) {
    (function (window, document, script, url, r, tag, firstScriptTag) {
        window['GoogleAnalyticsObject'] = r;
        window[r] = window[r] || function () {
                (window[r].q = window[r].q || []).push(arguments)
            };
        window[r].l = 1 * new Date();
        tag = document.createElement(script),
            firstScriptTag = document.getElementsByTagName(script)[0];
        tag.async = 1;
        tag.src = url;
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    })(
        window,
        document,
        'script',
        '//www.google-analytics.com/analytics.js',
        'ga'
    );
}

var ga = function (...args) {
    if (window && document) {
        if (isProduction()) {
            if (typeof APP.GA_TRACKING_CODE !== 'undefined' && APP.GA_TRACKING_CODE !== "UA-XXXXXXXX-X") {
                console.warn('GA_TRACKING_CODE doesn\'t exist', args);
            } else {
                return window.ga.apply(window.ga, args);
            }
        } else {
            if(DEBUGGING.GA){
                console.log('GA event simulated', args);
            }
        }
    }
};

ga('create', APP.GA_TRACKING_CODE, 'auto');
ga('send', 'pageview');

export default ga;
