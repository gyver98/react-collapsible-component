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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus odio eos eveniet animi omnis unde quasi aliquid repellat placeat vero a illo, nobis tempora magnam ut? Eos maxime, dignissimos qui commodi praesentium saepe repellendus consequuntur exercitationem voluptate, a tempore voluptatibus doloribus amet maiores numquam nemo? Eius dolores provident totam deleniti nemo, asperiores quos. Consectetur aliquam alias delectus quisquam maiores! Rem nesciunt voluptate suscipit ea nemo totam enim eveniet quo iste doloribus distinctio, porro ullam eius earum doloremque incidunt explicabo aliquid itaque, nam perferendis aliquam, quisquam rerum sapiente! Reprehenderit earum repellendus, provident placeat consequuntur non itaque corporis, beatae at ut blanditiis!</p>
            </Collapsible>
            <Collapsible title="Features">
              <p>Lorem ipsum dolor sit amet.</p>
            </Collapsible>
            <Collapsible title="Software">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, placeat.</p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
