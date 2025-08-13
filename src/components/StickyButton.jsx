import React, { useState } from 'react';

const StickyButtons = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFacebookClick = () => {
    // Replace with your Facebook page URL
    window.open('https://facebook.com/yourpage', '_blank', 'noopener,noreferrer');
  };

  const handleInfoClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Facebook Button */}
        <button
          onClick={handleFacebookClick}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group"
          aria-label="Visit our Facebook page"
        >
          <svg 
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>

        {/* Info Button */}
        <button
          onClick={handleInfoClick}
          className="w-14 h-14 bg-gray-700 hover:bg-gray-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group border-2 border-gray-500 hover:border-gray-400"
          aria-label="Information and help"
        >
          <svg 
            className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          {/* <div className="relative bg-gray-900/95 border border-gray-600 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"> */}
           <div className="relative bg-transparent backdrop-blur-xl border border-gray-600/40 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded-full transition-all duration-200"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="p-6 pb-4">
              <h2 className="text-white text-xl font-bold text-center">
                Account Creation and Eligibility for Free Spin Wheel
              </h2>
            </div>

            {/* Modal Body */}
            <div className="px-6 pb-6 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                To participate in the Free Spin Wheel, new players must message our official Facebook page to create an account.
              </p>

              {/* Free Spin Wheel Access Section */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Free Spin Wheel Access</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">• New Players:</span>
                    <span>New players will have access to the Free Spin Wheel for a <strong>24 hour period</strong> from the time of account creation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">•</span>
                    <span>To be eligible for Free Spin Wheel access beyond the first day, a player must make a <strong>deposit</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">• Deposit Players:</span>
                    <span>Players who make a deposit will have access to the Free Spin Wheel for <strong>3 days</strong> from the time of their deposit.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">•</span>
                    <span>Spins will reset every 2 hours, allowing players to spin the wheel multiple times per day within their eligibility window.</span>
                  </li>
                </ul>
              </div>

              {/* Winning and Redemption Section */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Winning and Redemption</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">•</span>
                    <span>Winnings from the Free Spin Wheel are credited directly to your balance and can be redeemed at any time within the time limit, which is 24hrs for non-depositing players and 72hrs (3days) for depositing players.</span>
                  </li>
                </ul>
              </div>


              {/* Abuse Prevention and Fair Play Section */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Abuse Prevention and Fair Play</h3>
                <p className="text-gray-300 leading-relaxed">
                  Any abuse or attempt to manipulate the Free Spin Wheel or redemption system will result in the suspension or termination of the player's account.
                </p>
              </div>

              {/* Changes to Terms and Responsible Gambling Section */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Changes to Terms and Responsible Gambling</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">•</span>
                    <span>We reserve the right to modify, suspend, or cancel the Free Spin Wheel promotion or any associated terms at any time without prior notice. All changes will be communicated to players via Facebook Page.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white font-semibold min-w-fit">•</span>
                    <span>We promote responsible gambling practices. If you or someone you know is experiencing gambling-related issues, please contact customer support for assistance.</span>
                  </li>
                </ul>
              </div>

              {/* Minimum Deposit Section */}
              <div>
                <h3 className="text-white text-lg font-bold mb-4">Minimum deposit for the wheel activation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Players need to deposit a minimum of $10 to activate the wheel and have access to the points accumulated on the wheels. Once the deposit is made the players will have access to it for 3 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyButtons;