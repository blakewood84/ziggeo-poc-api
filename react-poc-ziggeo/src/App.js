import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import { PageLayout, Content, TopNavigation } from '@atlaskit/page-layout';

import Navigation from './components/navigation/navigation';
import Home from './components/home/home';
import RecordVideo from './components/record-video/record-video';
import ViewVideos from './components/view-videos/view-videos';
import FilterVideos from './components/filter-videos/filter-videos';
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }

  }
  ///<Navigation { ...this.props } />  
  render(){
    return (
      <PageLayout>
        <TopNavigation>
          <Navigation { ...this.props } />
        </TopNavigation>
        <Content>
          <Switch>
            <Route path="/" exact render={ route_props => 
              <Home />
            } />
            <Route path="/record-video" render={ route_props => 
              <RecordVideo />
            } />
            <Route path="/view-videos" render={ route_props => 
              <ViewVideos />
            } />
            <Route path="/filter-videos" render={ route_props => 
              <FilterVideos />
            } />
          </Switch>
        </Content>
      </PageLayout>
    );
  }
}

export default withRouter(App);


