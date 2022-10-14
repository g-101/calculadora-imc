import { Level } from '../../helpers/imc';
import upImage from '../../assets/icons/up.png';
import downImage from '../../assets/icons/down.png';

type Props = {
  item: Level;
};
export const GridItem = ({ item }: Props) => {
  return (
    <div
      className="text-white rounded-lg flex flex-1 justify-center items-center flex-col p-5"
      style={{ backgroundColor: item.color }}
    >
      <div className="w-16 h-16 rounded-full bg-black/[.06] flex justify-center items-center">
        <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30" />
      </div>
      <div className="text-xl font-bold mt-1">{item.title}</div>
      <div className="text-xs mt-3.5">
        IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
      </div>
    </div>
  );
};
