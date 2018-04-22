import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router-3';

import photoList from './components/App.jsx';

const App = (props) => {
    const id = Number(props.location.pathname.substr(1));
    return (
        //Gallery where id={id}
        <div>Test</div>
    );
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App} />
            <Route path='/:id' component={App} />
        </Route>
    </Router>,
document.getElementById('photoGallery'))