import Image from 'next/image';

const CoinNameRow = ({ name, icon }) => {
  return (
    <div children="flex">
      <Image src={icon} alt={name} width={20} height={20} />
      <p>{name}</p>
    </div>
  );
};

export default CoinNameRow;
