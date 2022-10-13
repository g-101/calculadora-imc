import './App.css';
import poweredImage from './assets/icons/powered.png';

const App = () => {
  return (
    <div>
      <header className="max-w-screen-lg my-10 mx-auto">
        <div>
          <img className="inline-block" src={poweredImage} alt="logo" width={150} />
        </div>
      </header>
      <div className="flex max-w-screen-lg m-auto gap-10">
        <div className="grow bg-fuchsia-500">left</div>
        <div className="grow bg-cyan-300">right</div>
      </div>
    </div>
  );
};

export default App;
