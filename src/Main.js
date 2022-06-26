import React, { Component } from "react";
import useScript from 'hooks/useScript';

const MyComponent = props => {
  useScript('');
  window.uneeqInteractionsOptions = {
    personaShareId: "967c7e4f-fea0-4613-9aa3-d37ea3e8abac",
    layoutMode: 'overlay',
    showUserInputInterface: true,
    playWelcome: true,
    enableMicrophone: true,
    showUserInputInterface: true,
    renderContent: true
}
  useScript('https://hosted.us.uneeq.io/interactions/v1/deploy');
}

class Main extends Component {
    render() {
    return (
      <div className="application">
    <MyComponent />
  </div>
    );
    }
}

export default Main;

