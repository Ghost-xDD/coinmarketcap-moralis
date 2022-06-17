import React from 'react';
import Image from 'next/image';
import Rate from './cmc-table/Rate';
import btc from '../assets/btc.p';
import eth from '../assets/eth.png';
import usdc from '../assets/usdc.png';
import usdt from '../assets/usdt.png';
import xrp from '../assets/xrp.png';
import cardano from '../assets/cardano.png';
import terra from '../assets/terra.png';
import solana from '../assets/solana.png';
import bnb from '../assets/bnb.png';
import avalanche from '../assets/avalanche.png';

const styles = {
  coinDetails: 'min-h-screen text-white',
  coinDetailsLinks: 'flex mt-3 flex-wrap',
  greyBtn: 'mr-3 mb-3 bg-slate-800 px-3 py-1 rounded-xl',
  borderLeft: 'ml-10 pl-5 w-full border-1 border-gray-800',
  title: 'text-grey-400 whitespace-nowrap'
};

const CoinDetails = () => {
  const coinIcon = () => {
    switch (from) {
      case 'Bitcoin':
        return (
          <Image
            src={btc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Ethereum':
        return (
          <Image
            src={eth}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'USD Coin':
        return (
          <Image
            src={usdc}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Tether':
        return (
          <Image
            src={usdt}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Ripple':
        return (
          <Image
            src={xrp}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Cardano':
        return (
          <Image
            src={cardano}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Terra':
        return (
          <Image
            src={terra}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Solana':
        return (
          <Image
            src={solana}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Binance Coin':
        return (
          <Image
            src={bnb}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
      case 'Avalanche':
        return (
          <Image
            src={avalanche}
            className="rounded-full"
            width={50}
            height={50}
            alt=""
          />
        );
    }
  };

  return <div>CoinDetails</div>;
};

export default CoinDetails;
