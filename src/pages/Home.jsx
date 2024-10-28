// src/pages/Home.jsx
import React, { useState } from 'react';
import ShowcaseCard from '../components/ShowcaseCard';
import Modal from '../components/Modal';

function Home() {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        {
            title: "Gameplay Programming",
            description: "Explore the mechanics and systems behind gameplay.",
            imageUrl: "/assets/image1.jpg",
            details: "This section dives into the core gameplay mechanics...",
        },
        {
            title: "Creation of Virtual Experiences",
            description: "Designing immersive and interactive environments.",
            imageUrl: "/assets/image2.jpg",
            details: "This area covers the creation of realistic environments...",
        },
        {
            title: "Engine Tool Development",
            description: "Building tools to enhance game development.",
            imageUrl: "/assets/image3.jpg",
            details: "This section focuses on developing tools and plugins...",
        },
    ];

    const openModal = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="bg-charcoal flex justify-center items-center min-h-screen w-full">
            <div className="flex gap-4 w-full px-4">
                {cards.map((card, index) => (
                    <div key={index} className="basis-1/3" onClick={() => openModal(card)}>
                        <ShowcaseCard {...card} />
                    </div>
                ))}
            </div>

            {/* Render modal if a card is selected */}
            {selectedCard && (
                <Modal card={selectedCard} closeModal={closeModal} />
            )}
        </div>
    );
}

export default Home;
