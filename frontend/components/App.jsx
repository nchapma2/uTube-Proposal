import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import UploadFormContainer from './video/upload_form_container';
import VideoPlayerContainer from './video/video_player_container';
import VideoShowContainer from './video/video_show_container';
import VideoListContainer from './video/video_list_container';
import SearchListContainer from './video/search_list_container';


const App = () => (
  <div>
    <header className='header'>
      <NavbarContainer />
    </header>
    <Route exact path='/' component={VideoListContainer}/>
    <Route path='/search' component={SearchListContainer}/>
    <ProtectedRoute path='/upload' component={UploadFormContainer}/>
    <Route path='/videos/:videoId' component={VideoShowContainer}/>
    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>
  </div>
);

export default App;
