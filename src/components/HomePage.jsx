
// // import React, { useState, useEffect } from "react";


// // const Homepage = () => {
// //   const images = ['/images/homepage1.png', '/images/homepage2.png'];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) =>
// //         prevIndex === images.length - 1 ? 0 : prevIndex + 1
// //       );
// //     }, 5000); // change every 3 seconds

// //     return () => clearInterval(interval); // cleanup
// //   }, [images.length]);

// //   return (
// //     <div className="relative w-full h-[500px] overflow-hidden">
// //       {images.map((img, index) => (
// //         <img
// //           key={index}
// //           src={img}
// //           alt={`Slide ${index}`}
// //           className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
// //             index === currentIndex ? "opacity-100" : "opacity-0"
// //           }`}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // export default Homepage;
// import React, { useState, useEffect } from "react";

// const Homepage = () => {
//   const images = ["/images/homepage1.png", "/images/homepage2.png"];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // change every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Slide ${index}`}
//             className="w-full h-[500px] object-cover flex-shrink-0"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;
// import React, { useState, useEffect, useRef } from "react";

// const Homepage = () => {
//   const images = ["/images/homepage1.png", "/images/homepage2.png"];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const slideRef = useRef(null);
//   const headerRef = useRef(null);
//   const [sliderHeight, setSliderHeight] = useState("100vh");

//   const slides = [...images, images[0]];

//   // Measure header height on mount & window resize
//   useEffect(() => {
//     const updateHeight = () => {
//       if (headerRef.current) {
//         const headerH = headerRef.current.offsetHeight;
//         setSliderHeight(`calc(100vh - ${headerH}px)`);
//       }
//     };
//     updateHeight();
//     window.addEventListener("resize", updateHeight);
//     return () => window.removeEventListener("resize", updateHeight);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (currentIndex === slides.length - 1) {
//       const timeout = setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(0);
//       }, 1000);
//       return () => clearTimeout(timeout);
//     } else {
//       setIsTransitioning(true);
//     }
//   }, [currentIndex, slides.length]);

//   return (
//     <>
//       {/* Header wrapped with ref */}
//       <header
//         ref={headerRef}
//         className="top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-black bg-opacity-50"
//       >
//         <div className="text-yellow-400 font-bold text-xl">
//           <span className="border-b-2 border-yellow-400 pb-1">
//             Check My Sweep
//           </span>
//         </div>
//         <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
//           Login
//         </button>
//       </header>

//       {/* Slider fills remaining space */}
//       <div className="relative w-full overflow-hidden" style={{ height: sliderHeight }}>
//         <div
//           ref={slideRef}
//           className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Slide ${index}`}
//               className="w-full h-full object-cover flex-shrink-0"
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;

import React, { useState, useEffect, useRef } from "react";

const HomePage = () => {
  const images = ["/images/homepage1.png", "/images/homepage2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef(null);
  const headerRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState("100vh");

  // Login modal states
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const slides = [...images, images[0]];

  // Measure header height on mount & window resize
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const headerH = headerRef.current.offsetHeight;
        setSliderHeight(`calc(100vh - ${headerH}px)`);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length]);

  // Login modal functions
  const handleLogin = () => {
    // Add your login logic here
    console.log('Login attempt:', { username, password });
    // For demo purposes, just close the modal
    setShowLoginModal(false);
  };

  const handleCancel = () => {
    setShowLoginModal(false);
    setUsername('');
    setPassword('');
  };

  const handleFacebookClick = () => {
    window.open('https://facebook.com/yourpage', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Header wrapped with ref */}
      <header
        ref={headerRef}
        className="top-0 left-0 right-0 z-10 flex justify-between items-center p-6 bg-black bg-opacity-50"
      >
        <div className="text-yellow-400 font-bold text-xl">
          <span className="border-b-2 border-yellow-400 pb-1">
            Check My Sweep
          </span>
        </div>
        <button 
          onClick={() => setShowLoginModal(true)}
          className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          Login
        </button>
      </header>

      {/* Slider fills remaining space */}
      <div className="relative w-full overflow-hidden" style={{ height: sliderHeight }}>
        <div
          ref={slideRef}
          className={`flex ${isTransitioning ? "transition-transform duration-1000 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={handleCancel}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-gray-900/30 backdrop-blur-md border border-gray-600/50 rounded-lg shadow-2xl w-full max-w-md mx-4">
            {/* Close Button */}
            <button
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-700/50 rounded-full transition-all duration-200"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="p-6 pb-4">
              <h2 className="text-white text-2xl font-bold">
                Login
              </h2>
            </div>

            {/* Modal Body */}
            <div className="px-6 pb-6 space-y-6">
              {/* Username Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Enter your username"
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleCancel}
                  className="flex-1 px-4 py-3 bg-transparent border border-gray-600 text-white rounded-lg hover:bg-gray-700/30 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogin}
                  className="flex-1 px-4 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold"
                >
                  Login
                </button>
              </div>

              {/* Facebook Contact Message */}
              <div className="text-center pt-4 border-t border-gray-600/50">
                <p className="text-gray-300 text-sm italic">
                  To Sign Up, Please Contact Admin through{' '}
                  <button
                    onClick={handleFacebookClick}
                    className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                  >
                    Facebook
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;