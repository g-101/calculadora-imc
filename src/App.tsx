import { useState, ChangeEvent } from 'react';
import './App.css';
import poweredImage from './assets/icons/powered.png';
import { calculateImc, Level, levels } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {
  const [weightField, setWeightField] = useState<number>(0);
  const [heightField, setHeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const weightChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWeightField(parseFloat(event.target.value));
  };
  const heightChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setHeightField(parseFloat(event.target.value));
  };
  const buttonClickHandler = () => {
    if (weightField && heightField) {
      setToShow(calculateImc(weightField, heightField));
    }
  };

  return (
    <div className="wrap">
      <header>
        <div className="max-w-4xl my-10 mx-auto">
          <img className="inline-block" src={poweredImage} alt="logo" width={150} />
        </div>
      </header>
      <div className="flex max-w-4xl m-auto gap-10">
        <div className="flex-1">
          <h1 className="m-0 mb-5 text-4xl text-indigo-900">Calcule o seu IMC</h1>
          <p className="text-base text-gray-500 mb-10">
            IMC é a sigla para indice de massa corporea, <br />
            paramêtro adotado pela organização mundial de saude
            <br /> e usada para calcular se uma pessoa está no peso ideal.
          </p>
          {/* bg-fuchsia-500 */}
          <input
            className="w-full border-0 border-b-2 border-solid border-neutral-300 py-2.5 px-0.5 mb-5 text-sm outline-none"
            type="number"
            placeholder="Digite seu peso, Ex: 65.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={weightChangeHandler}
          />
          <input
            className="w-full border-0 border-b-2 border-solid border-neutral-300 py-2.5 px-0.5 mb-5 text-sm outline-none"
            type="number"
            placeholder="Digite sua altura, Ex: 1.7 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={heightChangeHandler}
          />
          <button
            onClick={buttonClickHandler}
            className="bg-cyan-600 text-white text-sm border-0 rounded-lg py-3.5 w-full cursor-pointer mt-10 transition ease-in-out  hover:opacity-80"
            type="submit"
          >
            Calcular
          </button>
        </div>
        <div className="flex-1 flex">
          {!toShow && (
            <div className="flex-1 grid grid-cols-2 gap-5">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className="flex-1 flex">
              {/* <div>button arrow</div> */}
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
