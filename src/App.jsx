import React from "react";
import TabsWidget from "./components/TabsWidget";

const App = () => {
  return (
    <div className="min-h-screen body-bg text-gray-200">
      <div className="max-w-[1300px] mx-auto px-6 py-10 flex gap-8">
        {/* Left half - empty */}
        <div className="hidden lg:block w-1/2"></div>

        {/* Right half */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {/* Top widget*/}
          <div className="widget-bg rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
            <TabsWidget />
          </div>

          {/* Bottom widget */}
          <div className="widget-bg rounded-2xl p-6 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
