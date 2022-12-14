import { useState, ChangeEvent, KeyboardEvent } from 'react';
import './App.css';
import poweredImage from './assets/icons/powered2.png';
import leftArrowImage from './assets/icons/leftarrow.png';
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
  const blockInvalidCharHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-'].includes(event.key) && event.preventDefault();
  };

  const backButtonHandler = () => {
    setToShow(null);
    setWeightField(0);
    setHeightField(0);
  };
  return (
    <div className="wrap">
      <header>
        <div className="max-w-4xl my-10 mx-auto xs:py-0 xs:px-5 lg:p-0">
          <img className="inline-block" src={poweredImage} alt="logo" width={160} />
        </div>
      </header>
      <div className="flex max-w-4xl m-auto gap-10 xs:py-0 xs:px-5 xs:flex-col xs:gap-0 lg:p-0 lg:flex-row lg:gap-10">
        <div className="flex-1">
          <h1 className="m-0 mb-5 text-4xl font-bold text-sky-900">Calcule o seu IMC</h1>
          <p className="text-base text-gray-500 mb-10">
            IMC é a sigla para indice de massa corporea, <br />
            paramêtro adotado pela organização mundial de saude
            <br /> e usada para calcular se uma pessoa está no peso ideal.
          </p>

          <input
            className="w-full border-0 border-b-2 border-solid border-neutral-300 py-2.5 px-0.5 mb-5 text-sm outline-none disabled:opacity-30"
            type="number"
            placeholder="Digite seu peso, Ex: 65.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onKeyDown={blockInvalidCharHandler}
            onChange={weightChangeHandler}
            disabled={!!toShow}
          />
          <input
            className="w-full border-0 border-b-2 border-solid border-neutral-300 py-2.5 px-0.5 mb-5 text-sm outline-none disabled:opacity-30"
            type="number"
            placeholder="Digite sua altura, Ex: 1.7 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onKeyDown={blockInvalidCharHandler}
            onChange={heightChangeHandler}
            disabled={!!toShow}
          />
          <button
            disabled={!!toShow}
            onClick={buttonClickHandler}
            className="bg-sky-700 text-white text-sm border-0 rounded-lg py-3.5 w-full cursor-pointer mt-10 transition ease-in-out hover:opacity-80 disabled:opacity-30"
            type="submit"
          >
            Calcular
          </button>
        </div>
        <div className="flex-1 flex xs:mt-10 lg:m-0">
          {!toShow && (
            <div className="flex-1 grid grid-cols-2 gap-5 xs:grid-cols-1 lg:grid-cols-2">
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          )}
          {toShow && (
            <div className="flex-1 flex">
              <div
                onClick={backButtonHandler}
                className="absolute bg-sky-700 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer -ml-9 mt-36 hover:opacity-90 xs:mt-0 xs:ml-0 xs:rounded-lg lg:-ml-9 lg:mt-36"
              >
                <img src={leftArrowImage} alt="icone  voltar" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
