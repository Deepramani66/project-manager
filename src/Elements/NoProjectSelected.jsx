import React from 'react';
import Dialog from './DialogModel';

const NoProjectSelected = ({ datafetching }) => {

  return (
    <section className="flex flex-col items-center justify-center bg-black text-white">
      <div className="bg-gray-900 rounded-2xl p-12 flex flex-col items-center shadow-xl max-w-lg w-full">
        <h2 className="text-4xl font-extrabold mb-4">No Project Selected</h2>
        <p className="text-gray-400 text-center mb-8">
          Select an existing project or create a new one to get started quickly.
        </p>
        <div>
        <Dialog datalog={datafetching}/>
        </div>
      </div>
    </section>
  );
};

export default NoProjectSelected;
