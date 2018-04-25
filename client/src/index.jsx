import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router-3';

import Photo from './components/App.jsx';
import Related from './components/related/App.jsx';
import Description from './components/description/App';
import Review from './components/review/App.jsx';
// import './components/description/fonts';
// import './components/description/index.css';

const App = (props) => {
    const id = Number(props.location.pathname.substr(1));
    return (
        <div>
            <Photo id={id} />
            <Related id={id} />
            <Description id={id} />
            <Review id={id} />
        </div>
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