'use client'

import React, { useState, useEffect } from 'react';
import { Card } from './card';
import { createDeck, calculateHandValue } from './utils';
import { GameState } from './types';

export default function Game() {
  const [gameState, setGameState] = useState<GameState>({
    deck: [],
    playerHand: [],
    dealerHand: [],
    gameStatus: 'betting',
  });

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newDeck = createDeck();
    setGameState({
      deck: newDeck.slice(4),
      playerHand: [newDeck[0], newDeck[2]],
      dealerHand: [newDeck[1], newDeck[3]],
      gameStatus: 'playing',
    });
  };

  const hit = () => {
    if (gameState.gameStatus !== 'playing') return;

    const newPlayerHand = [...gameState.playerHand, gameState.deck[0]];
    const newDeck = gameState.deck.slice(1);
    const playerValue = calculateHandValue(newPlayerHand);

    if (playerValue > 21) {
      setGameState({
        ...gameState,
        playerHand: newPlayerHand,
        deck: newDeck,
        gameStatus: 'playerBust',
      });
    } else {
      setGameState({
        ...gameState,
        playerHand: newPlayerHand,
        deck: newDeck,
      });
    }
  };

  const stand = () => {
    if (gameState.gameStatus !== 'playing') return;

    let newDealerHand = [...gameState.dealerHand];
    let newDeck = [...gameState.deck];
    let dealerValue = calculateHandValue(newDealerHand);

    while (dealerValue < 17) {
      newDealerHand.push(newDeck[0]);
      newDeck = newDeck.slice(1);
      dealerValue = calculateHandValue(newDealerHand);
    }

    const playerValue = calculateHandValue(gameState.playerHand);

    let newGameStatus: GameState['gameStatus'];
    if (dealerValue > 21) {
      newGameStatus = 'dealerBust';
    } else if (dealerValue > playerValue) {
      newGameStatus = 'dealerWin';
    } else if (dealerValue < playerValue) {
      newGameStatus = 'playerWin';
    } else {
      newGameStatus = 'push';
    }

    setGameState({
      ...gameState,
      dealerHand: newDealerHand,
      deck: newDeck,
      gameStatus: newGameStatus,
    });
  };

  return (
    <div className="min-h-screen bg-green-800 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Blackjack</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dealer's Hand</h2>
          <div className="flex space-x-4">
            {gameState.dealerHand.map((card, index) => (
              <Card key={index} card={card} hidden={index === 1 && gameState.gameStatus === 'playing'} />
            ))}
          </div>
          {gameState.gameStatus !== 'playing' && (
            <p className="mt-2">Value: {calculateHandValue(gameState.dealerHand)}</p>
          )}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Hand</h2>
          <div className="flex space-x-4">
            {gameState.playerHand.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
          <p className="mt-2">Value: {calculateHandValue(gameState.playerHand)}</p>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={hit}
            disabled={gameState.gameStatus !== 'playing'}
          >
            Hit
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={stand}
            disabled={gameState.gameStatus !== 'playing'}
          >
            Stand
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            onClick={startNewGame}
          >
            New Game
          </button>
        </div>
        {gameState.gameStatus !== 'playing' && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">
              {gameState.gameStatus === 'playerBust' && "You bust! Dealer wins."}
              {gameState.gameStatus === 'dealerBust' && "Dealer busts! You win!"}
              {gameState.gameStatus === 'playerWin' && "You win!"}
              {gameState.gameStatus === 'dealerWin' && "Dealer wins."}
              {gameState.gameStatus === 'push' && "It's a tie!"}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

