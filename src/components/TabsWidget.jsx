import React, { useState } from "react";

const TabsWidget = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
    <div>
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("expenses")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "expenses" ? "bg-blue-600 text-white" : "bg-gray-700"
          }`}
        >
          Expenses
        </button>
        <button
          onClick={() => setActiveTab("stats")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "stats" ? "bg-blue-600 text-white" : "bg-gray-700"
          }`}
        >
          Statistics
        </button>
      </div>

      {activeTab === "expenses" ? (
        <p className="text-center text-gray-400">List of your recent expenses...</p>
      ) : (
        <p className="text-center text-gray-400">Expense statistics will appear here...</p>
      )}
    </div>
  );
};

export default TabsWidget;
