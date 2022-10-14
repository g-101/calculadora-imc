import { useState, ChangeEvent } from 'react';
import './App.css';
import poweredImage from './assets/icons/powered.png';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const heightChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setHeightField(parseFloat(event.target.value));
  };
  const weightChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setWeightField(parseFloat(event.target.value));
  };
  const calculateHandler = () => {
    if (heightField && weightField) {
      const out = weightField / (heightField * heightField);
      alert(out);
    } else {
      alert('DIGITE TODOS OS CAMPOS');
    }
  };
  return (
    <div className="wrap">
      <header className="max-w-4xl my-10 mx-auto">
        <div>
          <img className="inline-block" src={poweredImage} alt="logo" width={150} />
        </div>
      </header>
      <div className="flex max-w-4xl m-auto gap-10">
        <div className="grow">
          <h1 className="text-4xl">Calcule o seu IMC</h1>
          <p className="text-base mb-10">
            IMC é a sigla para indice de massa corporea, <br />
            paramêtro adotado pela organização mundial de saude
            <br /> e usada para calcular se uma pessoa está no peso ideal.
          </p>
          {/* bg-fuchsia-500 */}
          <input
            type="number"
            placeholder="Digite seu peso, Ex: 65.3 (em kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={weightChangeHandler}
          />
          <input
            type="number"
            placeholder="Digite sua altura, Ex: 1.7 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={heightChangeHandler}
          />
          <button type="submit" onClick={calculateHandler}>
            Calcular
          </button>
        </div>
        <div className="grow bg-cyan-300">RIGHT</div>
      </div>
    </div>
  );
};

export default App;
