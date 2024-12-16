import React from 'react';

function ProjectCard({ title, description, technologies, imageUrl, trailerUrl, repoUrl }) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col h-full">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-contain mb-4"
                style={{ maxHeight: '200px', width: '100%' }}
            />
            <h2 className="text-lg font-bold text-black mb-2 text-center">{title}</h2>
            <p className="text-black text-center mb-4">{description}</p>
            <p className="text-black text-center font-bold mb-4">{technologies}</p>
            <div className="flex justify-around mt-auto pt-4">
                <a
                    href={trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                >
                    Trailer
                </a>
                <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                >
                    Repo
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;