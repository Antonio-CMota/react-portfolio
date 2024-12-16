// src/components/Modal.jsx
import React from 'react';

function Modal({ card, closeModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-[90%] w-full h-[90vh] overflow-y-auto relative text-black"> {/* Increased width and added text-black */}

                {/* Close button */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold">
                    ×
                </button>

                {/* Modal Content */}
                <h2 className="text-5xl font-bold mb-4 text-center">{card.title}</h2>
                <p className="text-lg mb-8 text-center">{card.description}</p>
                <div className="text-gray-700 text-md mb-4">{card.details}</div>

                {/* Placeholder for additional project details */}
                <div className="mt-8">
                    <h3 className="text-3xl font-semibold mb-4">Project Examples</h3>
                    <p>Here you can add examples or images of the projects related to {card.title}.</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
