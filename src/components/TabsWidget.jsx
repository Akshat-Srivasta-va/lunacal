import React, { useState } from "react";

const TabWidget = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  const content = {
    about: `Hi 👋, I'm Akshat Srivastava — a Computer Science student passionate about building modern web applications and solving challenging problems.
I enjoy working with JavaScript, React, Node.js, Express, and MongoDB, and I’m always eager to learn new technologies that improve user experiences.`,

    experiences: `I have hands-on experience in full-stack web development, working with technologies like React, Node.js, Express, and MongoDB.
I’ve built projects such as an Expense Tracker and a Movie Booking System with real-time functionality.
On the frontend, I focus on creating clean and responsive designs using HTML, CSS, JavaScript, and Tailwind CSS.`,

    recommended: `I recommend staying curious and building real-world projects — hands-on experience with technologies like React, Node.js, and MongoDB has taught me more than any tutorial ever could.`,
  };

  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-2xl cursor-pointer font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-transparent text-gray-400 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-700 rounded-xl  p-6">
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {content[activeTab]}
        </p>
      </div>
    </div>
  );
};

export default TabWidget;
