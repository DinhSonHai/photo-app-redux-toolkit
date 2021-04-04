import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AddEdit from './pages/AddEdit';
import Main from './pages/Main';
import PropTypes from 'prop-types';
import NotFound from 'components/NotFound';

Photo.propTypes = {
  
};

function Photo(props) {
  const match = useRouteMatch();
  
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={Main} />
        <Route exact path={`${match.url}/add`} component={AddEdit} />
        <Route exact path={`${match.url}/:photoId`} component={AddEdit} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Photo;