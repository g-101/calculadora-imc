import { Level } from '../../helpers/imc';

type Props = {
  item: Level;
};
export const GridItem = ({ item }: Props) => {
  return <div>{item.title}</div>;
};
