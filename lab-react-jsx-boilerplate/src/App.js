import elephant from "./images/elephant.jpeg";
import "./App.css"

function App() {

  const imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ]
    return data;
  }

  const images = imageData();

  return (
    <div className="main">
      <h1>Kalvium</h1>
      <div className="container">
        {images.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={`elephant ${item.id}`}
            className="Image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;