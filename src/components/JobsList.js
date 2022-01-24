import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/solid';

const JobsList = props => {

  useEffect(() => {
    axios.get('https://loading-test.kitb.cc/api/v1/jobs.json')
        .then(res => setJobs(res.data))
      }, []);

  const [jobs, setJobs] = useState([]);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mt-10">
      <ul role="list" className="divide-y divide-gray-200">
        {jobs.map((job) => (
          <li key={job.id}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-indigo-600 truncate">{job.company}</p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">in {job.position}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                          Starting on <time dateTime={job.created_at}>{job.updated_at}</time>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};
export default JobsList;
