import logo from './logo.svg';
import image from './HOUSE.png';
import './App.css';

function App() {
  return (
    <form>
      <div class="pr">
      <img src={image} alt="image" />
      </div>
      <h3>Blog post published</h3>
      <p>This blog post has been published Team members <br />will be able to edit this post and republish changes</p>
      <div class="pr">
        <input type="button" value="Cancel" id="b1" />
        <input type="button" value="Confirm" id="b2" />
      </div>
    </form>
  );
}

export default App;