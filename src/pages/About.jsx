// src/pages/About.jsx
import React from 'react';

function About() {
    return (
        <div className="bg-charcoal p-6 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
            <p className="text-light-gray mb-6">
                This is the about page where you can share more about yourself. Discuss your background, experience, and what motivates you in your career.
            </p>

            <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
            <ul className="text-light-gray list-disc list-inside mb-4">
                <li>Phone: +351 913 113 702</li>
                <li>Email: a039689@ipmaia.pt / antoniomcmota@live.com.pt</li>
                <li>Location: Avenida da República, 81, R-C Esquerdo, Matosinhos</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-2">Social Media</h2>
            <ul className="text-light-gray list-disc list-inside mb-4">
                <li>
                    <a href="https://github.com/Antonio-CMota" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="https://www.artstation.com/antonio_cmota" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline">
                        ArtStation
                    </a>
                </li>
                <li>
                    <a href="www.linkedin.com/in/antonio-mota-595350231" target="_blank" rel="noopener noreferrer" className="text-light-gray hover:underline">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default About;
