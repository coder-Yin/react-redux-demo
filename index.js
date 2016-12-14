import React from 'react';
import ReactDom from 'react-dom';
import Container from './js/container';
import configureStore from './js/store';
import {Provider} from 'react-redux';
// import $ from 'zepto';

// const store = configureStore();

ReactDom.render(
    <Provider store={configureStore}>
        <Container />
    </Provider>,
    document.getElementById('root')
);


(function () {
    var documentElement = document.documentElement;
    //Use rem
    documentElement.style.fontSize = documentElement.getBoundingClientRect().width / 10 + 'px';

})();
