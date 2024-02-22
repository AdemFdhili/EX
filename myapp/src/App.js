import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form>
      <div class="pr">
        <img src="https://res.cloudinary.com/dgci0ivas/image/upload/v1684534060/Image_1_g5mxyi.png" alt="image" />
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