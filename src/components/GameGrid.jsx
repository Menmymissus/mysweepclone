import React from 'react';

const GameGrid = ({ games = [] }) => {
  const handleGameClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <div
            key={index}
            onClick={() => handleGameClick(game.url)}
            className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl border border-gray-700 hover:border-yellow-500/50">
              <div className="aspect-square relative">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-3">
                <h3 className="text-yellow-400 font-bold text-center text-sm sm:text-base truncate">
                  {game.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid;