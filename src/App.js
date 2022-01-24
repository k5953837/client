import React from 'react';
import './App.css';
import JobsList from './components/JobsList';

function App() {

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Jobs</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Find your dream job.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Start your search for a job today.
          </p>
        </div>
        <JobsList />
      </div>
    </div>
  );
}

export default App;