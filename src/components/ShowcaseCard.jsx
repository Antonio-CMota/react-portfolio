// src/components/ShowcaseCard.jsx
import React from 'react';

function ShowcaseCard({ title, description, imageUrl }) {
    return (
        <div className="bg-gray-200 rounded-lg shadow-lg flex flex-col items-center p-4 h-[80vh] cursor-pointer"> {/* Added cursor-pointer */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-[40%] object-cover mb-4 rounded"
            />
            <h2 className="text-4xl font-bold text-black mb-2 text-center flex-grow">
                {title}
            </h2>
            <p className="text-lg text-black text-center mb-4">
                {description}
            </p>
        </div>
    );
}

export default ShowcaseCard;
