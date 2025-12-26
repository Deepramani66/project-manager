import React from 'react'

const ProjectCard = ({projectary, cardselect}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full">
            {projectary.map((project, index) => (
                <div
                    key={index}
                    className="bg-linear-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl p-6 hover:scale-[1.02] hover:shadow-blue-500/30 transform transition-all duration-300 cursor-pointer w-full"
                    onClick={() => cardselect(project)}
                >
                    {/* Title */}
                    <div className="mb-4">
                        <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Title</span>
                        <h3 className="text-2xl font-bold mt-1 truncate md:max-w-[25vw]">
                            {project.title || 'Untitled Project'}
                        </h3>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Description</span>
                        <p className="text-gray-300 text-[15px] mt-1 line-clamp-3 w-full md:max-w-[25vw]">
                            {project.description || 'No description provided'}
                        </p>
                    </div>

                    {/* Date */}
                    <div>
                        <span className="text-gray-400 uppercase text-xs tracking-wider font-semibold">Date</span>
                        <p className="text-gray-400 text-xs mt-1 md:max-w-[25vw] truncate">
                            {project.date || 'No date provided'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard