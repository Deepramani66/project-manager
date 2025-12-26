import React from 'react';
import Dialog from './DialogModel';
import Galaxy from '../Background/Galaxy'

const Project = ({datafetching}) => {

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>

      <div className="relative z-10 h-full w-full flex \nitems-center pt-[15vh] justify-center">
        <section className="flex flex-col items-center gap-y-16 px-4 max-w-3xl">
          <div className="text-center">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl">
              Click the button below and kickstart your journey
            </h1>
          </div>
          <div>
            <Dialog datalog={datafetching}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;