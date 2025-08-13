// App.jsx
import React from "react";
import Header from "./components/Header"; // adjust path if Header.jsx is in a different folder
import HomePage from "./components/HomePage";
import GamesData from './components/GamesData';
import TopWheelersSection from "./components/TopWheelersSection";
import StickyButtons from "./components/StickyButton";
function App() {
  return (
    <div className="w-full">
      {/* <Header /> */}
      {/* Other components or content go here */}
      <main className="w-full">
        <HomePage />
        <TopWheelersSection />
        <GamesData />
        <StickyButtons />
      </main>
    </div>
  );
}

export default App;
