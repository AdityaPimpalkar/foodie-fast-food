import React from 'react';
import './App.css';
import Container from './components/Container';
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
function App() {
  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => console.log(response),
    googleAccountConfigs: {
      client_id: '721083983668-0pbu9bbn7ef0857c4bfp7oe2dqnmskii.apps.googleusercontent.com',
      auto_select: true
    }
  })
  return (
    <div className="App wrapper">
      <div className="container-fluid">
        <div className="row">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
