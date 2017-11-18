import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Collapsible Content</h1>
        </header>
        <div className="content">
          <div className="panel-group">
            <Collapsible title="Overview">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
            </Collapsible>
            <Collapsible title="Features">
              Lorem ipsum dolor sit amet.
            </Collapsible>
            <Collapsible title="Software">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, placeat.
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
