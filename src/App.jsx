import React from "react";
import Priyanshu from "./assets/Priyanshu.png"; // apni image ko src/assets me rakho

function App() {
  return (
    <div className="w-full min-h-screen bg-linear-to-r from-gray-900 via-black to-gray-800 text-white font-sans">
      
      {/* Hero Section */}
      <div 
        className="w-full h-[350px] flex flex-col justify-center items-center bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${Priyanshu})` }}
      >
        <h1 className="text-5xl font-bold drop-shadow-lg">Priyanshu Yadav</h1>
        <p className="text-xl mt-3">MERN Stack Developer | UI/UX Enthusiast | System Architect</p>
        
      </div>

      {/* Skills Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-5">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-semibold text-gray-300">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>TailwindCSS</span>
          <span>Bootstrap (Basic)</span>
          <span>C (Basic)</span>
          <span>C++ (Basic)</span>
          <span>Python (Basic)</span>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-5">Education</h2>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Computer Science & Engineering</li>
          <li>Veer Bahadur Singh Purvanchal University, Jaunpur</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        
        {/* Ride Sync Project Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3">Ride Sync</h3>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Real-time ride booking and management system</li>
            <li>Connects users with nearby drivers instantly</li>
            <li>Google Maps API for live location display</li>
            <li>Socket.io for real-time communication</li>
            <li>JWT authentication for users & drivers</li>
            <li>MongoDB for secure data storage</li>
            <li>React + TailwindCSS for responsive UI</li>
          </ul>
        </div>

        {/* My Bus Project Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-3">My Bus Location</h3>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Driver registration with bus number & photo verification</li>
            <li>Admin approval system to prevent fake/spam drivers</li>
            <li>Live GPS sharing by drivers via mobile interface</li>
            <li>Passenger dashboard with interactive map & bus search</li>
            <li>Auto-centering map to passenger’s location</li>
            <li>Estimated arrival times & route visualization</li>
            <li>Built with MERN Stack, TailwindCSS, GSAP animations, Google APIs</li>
          </ul>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full h-[250px] bg-gray-900 flex flex-col justify-center items-center mt-20">
        <p className="mb-3 text-lg">Connect with me:</p>
        <div className="flex gap-6 text-gray-300">
          <a href="https://leetcode.com/u/priyanshuup04/" className="hover:text-yellow-400">LeetCode</a>
          <a href="https://www.codechef.com/users/priyanshu9987" className="hover:text-blue-400">CodeChef</a>
          <a href="https://github.com/Priyanshu9987" className="hover:text-green-400">GitHub</a>
        </div>
        <p className="mt-4">📧 <a href="mailto:priyanshuup04@gmail.com">priyanshuup04@gmail.com </a> | <a href="tel:+918168731446">📱 (+91)8168731446</a></p>
        <p className="mt-2 text-sm text-gray-500">Sir,Just give me a chance & I will prove myself.</p>
      </footer>
    </div>
  );
}

export default App;