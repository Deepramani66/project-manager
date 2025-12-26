import React from 'react';
import Dialog from './DialogModel';

const NoProjectSelected = ({ datafetching }) => {
  return (
    <section className="flex flex-col items-center pt-24 bg-black text-white min-h-screen px-4">
      <div className="bg-gray-900 rounded-2xl p-8 sm:p-12 flex flex-col items-center shadow-xl w-full max-w-md sm:max-w-lg lg:max-w-xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-center">
          No Project Selected
        </h2>
        <p className="text-gray-400 text-center text-sm sm:text-base mb-8">
          Select an existing project or create a new one to get started quickly.
        </p>
        <div className="w-full flex justify-center">
          <Dialog datalog={datafetching} />
        </div>
      </div>
    </section>
  );
};

export default NoProjectSelected;
