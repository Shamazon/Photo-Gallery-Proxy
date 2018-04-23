import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router-3';

import Photo from './components/App.jsx';

const App = (props) => {
    const id = Number(props.location.pathname.substr(1));
    return (
        <Photo id={id} />
    );
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/'>
            <IndexRoute component={App} />
            <Route path='/:id' component={App} />
        </Route>
    </Router>,
document.getElementById('photoGallery'));