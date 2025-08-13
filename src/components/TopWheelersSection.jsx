import React, { useState } from 'react';

const TopWheelersSection = () => {
  const [activeTab, setActiveTab] = useState('player');

  const topWheelers = [
    { name: "Becky Vasquez DDS", amount: "$96.68", rank: 1 },
    { name: "Michelle Foley", amount: "$60.94", rank: 2 },
    { name: "Rodney Rogers", amount: "$52.86", rank: 3 }
  ];

  return (
    <div className="bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top 3 Wheelers Section */}
        <div className="text-center mb-12">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-8">
            Yesterday's top 3 wheelers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topWheelers.map((wheeler, index) => (
              <div
                key={index}
                className="bg-transparent border-2 border-yellow-400 rounded-full px-6 py-4 hover:bg-yellow-400/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-400 font-bold text-lg">
                      {wheeler.rank}.
                    </span>
                    <span className="text-white font-medium">
                      {wheeler.name}
                    </span>
                  </div>
                  <span className="text-yellow-400 font-bold text-lg">
                    {wheeler.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Links Section */}
        <div className="text-center">
          <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold mb-8">
            Game Links
          </h2>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Tab Buttons */}
              <div className="flex border-b border-gray-600">
                <button
                  onClick={() => setActiveTab('player')}
                  className={`px-8 py-3 font-bold text-lg transition-all duration-300 relative ${
                    activeTab === 'player'
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-400 hover:text-yellow-400'
                  }`}
                >
                  Player Link
                </button>
                
                {/* Vertical Divider */}
                <div className="w-px bg-gray-600 mx-4"></div>
                
                <button
                  onClick={() => setActiveTab('agent')}
                  className={`px-8 py-3 font-bold text-lg transition-all duration-300 relative ${
                    activeTab === 'agent'
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-400 hover:text-yellow-400'
                  }`}
                >
                  Agent Link
                </button>
              </div>
              
              {/* Tab Content */}
              {/* <div className="mt-6 p-6 bg-gray-900/50 rounded-lg min-h-[100px] flex items-center justify-center">
                {activeTab === 'player' ? (
                  <div className="text-center">
                    <p className="text-yellow-400 text-lg mb-2">Player Link Content</p>
                    <p className="text-gray-300">Player registration and access links will appear here</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-yellow-400 text-lg mb-2">Agent Link Content</p>
                    <p className="text-gray-300">Agent registration and access links will appear here</p>
                  </div>
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopWheelersSection;