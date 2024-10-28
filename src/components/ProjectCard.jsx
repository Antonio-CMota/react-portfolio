import React from 'react';

function ProjectCard({ title, description, technologies, imageUrl, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col h-full" // Added h-full to ensure the card takes full height
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-contain mb-4"
                style={{ maxHeight: '200px', width: '100%' }}
            />
            <h2 className="text-lg font-bold text-black mb-2 text-center">{title}</h2>
            <p className="text-black text-center mb-4">{description}</p>
            <p className="text-black text-center font-bold mt-auto">{technologies}</p> {/* Changed to bold and mt-auto to push it to the bottom */}
        </a>
    );
}

export default ProjectCard;
