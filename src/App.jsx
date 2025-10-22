import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen body-bg text-gray-200">
      <div className="max-w-[1300px] mx-auto px-6 py-10 flex gap-8">
        {/* Left half - empty */}
        <div className="w-1/2"></div>

        {/* Right half */}
        <div className="w-1/2 flex flex-col gap-8">
          {/* Widgets will go here */}
        </div>
      </div>
    </div>
  );
}

export default App


