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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, id!</p>
            </Collapsible>
            <Collapsible title="Features">
              <p>Lorem ipsum dolor sit amet.</p>
            </Collapsible>
            <Collapsible title="Software">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, debitis nesciunt soluta saepe quidem dicta iusto enim tenetur, voluptatem beatae odit eaque, officiis expedita illum eius minus corporis nisi assumenda. Optio praesentium accusantium sequi repellendus, est velit cumque impedit, in molestias quod dolorem omnis temporibus fuga ab corrupti repellat, modi accusamus earum nisi iste et recusandae at? Qui molestias obcaecati eligendi sunt iure dolore optio accusantium deleniti fugiat repellendus? Voluptatibus minus doloremque facere. Et iusto, reiciendis optio non quo sed consectetur tenetur minus rem magni excepturi dolorum quos cum dolorem laborum quis perferendis id ullam voluptatem quia nam cupiditate ad voluptatum ipsam. Animi, odio eveniet ea unde rem impedit modi doloremque magni quam architecto? Accusamus corrupti rerum placeat error. Beatae, sed facere, magni illo voluptatibus incidunt, doloribus quaerat doloremque vero temporibus veniam optio repellendus? Quasi facilis doloribus deserunt cupiditate consequuntur pariatur voluptates perspiciatis, eveniet eligendi molestiae incidunt iure nemo reiciendis animi praesentium adipisci sint minima repellat amet voluptas voluptatem fuga delectus fugit. Quibusdam nulla tempora eius quaerat ducimus. Molestiae, saepe nulla culpa dolores amet, praesentium non illo expedita porro soluta ullam, dicta aliquid magni laborum similique eos repudiandae ad voluptatem distinctio? Voluptate, quam! Obcaecati hic asperiores sunt animi nihil voluptas inventore dolor omnis neque porro sint eaque architecto, officiis provident recusandae molestiae culpa ipsam consequatur perspiciatis mollitia saepe alias? Autem ea quod optio ipsa sit nulla architecto molestias dolor voluptatem recusandae nemo deleniti iure temporibus id libero, voluptatum repellat voluptas non voluptatibus! Harum accusantium totam blanditiis at repellat, facilis corporis beatae quam aspernatur eius tempore quas fugit dolores architecto dignissimos expedita nulla maiores aliquid iste minus magnam mollitia. Nobis ad explicabo quos, obcaecati aliquam saepe inventore omnis, exercitationem dolores, ex officia sit unde sint velit provident reiciendis. Culpa voluptates, eveniet quidem quam aliquam quae eligendi asperiores voluptas velit dolorem provident unde necessitatibus nemo expedita labore suscipit rem nulla corporis quos beatae mollitia optio dolorum perspiciatis? Commodi laborum iure temporibus aut eveniet velit labore officia consectetur repudiandae? Velit voluptatum enim corrupti harum tenetur aliquam quod quasi, reprehenderit eveniet repellat deleniti dolorem ipsum magnam rerum voluptates alias inventore laudantium saepe molestiae consequatur aspernatur sapiente quam obcaecati recusandae! Officiis dolores optio eveniet quas repellat! Aliquam, non facilis. Minima delectus, amet iste nemo pariatur vitae sit rem eos distinctio, dolores dolorum tenetur, neque minus quis quam architecto alias? Ut placeat quisquam, nulla excepturi assumenda consectetur perferendis rem, iusto qui, eos quam voluptas officiis vitae.</p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
