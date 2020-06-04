import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './containers/Home';
import City_home from './containers/Home/city_home';
import Expert_home from './containers/Home/expert_home';
import Institution_home from './containers/Home/institution_home';
import Write from './containers/Home/write';
import Detail from './containers/Home/detail';
import Detail_any from './containers/Home/detail_any';
import CheckUser from './util/check-user';
import All_marble from './containers/Home/all_marble';
import History from './containers/Home/history';
import Transfer from './containers/Home/transfer';
import Judge_u from './containers/Home/judge_u';
import Judge_m from './containers/Home/judge_m';
class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <PersistGate loading={null} persistor={this.props.persistor}>
          <Router>
                    <Route path="/" exact={true} component={CheckUser(Home, null, false)}/>
                    <Route path="/" exact={true} component={CheckUser(City_home, 'city', false)} />
                    <Route path="/" exact={true} component={CheckUser(Expert_home, 'expert', false)} />
                    <Route path="/" exact={true} component={CheckUser(Institution_home, 'institution', false)} />
                    <Route path="/" exact={true} component={CheckUser(All_marble, 'admin', false)} />
                    <Route path="/detail" exact={true} component={Detail} />
                    <Route path="/detail_zy" exact={true} component={Detail_any} />
                    <Route path="/write" exact={true} component={Write} />
                    <Route path="/search" exact={true} component={All_marble} />
                    <Route path="/history" exact={true} component={History} />
                    <Route path="/transfer" exact={true} component={Transfer} />
                    <Route path="/judge_u" exact={true} component={Judge_u} />
                    <Route path="/judge_m" exact={true} component={Judge_m} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
