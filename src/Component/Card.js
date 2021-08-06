import React from 'react';

function Card({ topic }) {

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex mt-10 mb-10">
      <div className="w-full sm:w-1/3">
        <img className="object-cover w-full h-48" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky" />
      </div>
      <div className="flex-1 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">Topic: {topic.theme}</h4>
        <p className="leading-normal text-gray-700 mb-5">Study starts at {topic.studyDate}</p>

        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2"></span> */}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">{topic.numOfParticipant}</span>
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"></span> */}
        <div className="-space-x-2 ">
          <img className="relative z-30 inline object-cover w-10 h-10 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile" />
          <img className="relative z-20 inline object-cover w-10 h-10 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile" />
          <img className="relative z-10 inline object-cover w-10 h-10 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile" />
        </div>

      </div>

    </div>
  )
}

export default Card;