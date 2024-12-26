import React from 'react';
import { Card as CardType } from './types';

interface CardProps {
  card: CardType;
  hidden?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, hidden = false }) => {
  const { suit, rank } = card;
  const color = suit === '♥' || suit === '♦' ? 'text-red-500' : 'text-black';

  return (
    <div className={`w-16 h-24 rounded-lg shadow-md flex items-center justify-center ${hidden ? 'bg-gray-300' : 'bg-white'}`}>
      {!hidden && (
        <div className={`text-2xl font-bold ${color}`}>
          {rank}
          <span className="text-3xl">{suit}</span>
        </div>
      )}
    </div>
  );
};

