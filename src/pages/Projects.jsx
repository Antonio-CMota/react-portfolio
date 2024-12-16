import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    return (
        <div className="bg-ash-gray p-6 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-black mb-6 text-center">Projects</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
                <ProjectCard
                    title="Virtual Campus"
                    description="An app made in collaboration with LusoInfo, for the DGE (Direcao Geral de Educacao). Allows the user to take a virtual 360 tour through the school campus and other locations."
                    technologies="React, Unity for WebGL"
                    imageUrl="/assets/project1.jpg"
                    trailerUrl="https://youtu.be/SN_7krgupIc"
                    repoUrl="https://github.com/Antonio-CMota/VirtualCampus"
                />
                <ProjectCard
                    title="Rigidbody Recreation"
                    description="A simple recreation of a rigidbody utilizing realistic gravity and force calculations."
                    technologies="Unity"
                    imageUrl="/assets/project2.jpg"
                    trailerUrl="https://youtu.be/trailer2"
                    repoUrl="https://github.com/Antonio-CMota/RigidbodyRecreation"
                />
                <ProjectCard
                    title="Unity Custom Event System"
                    description="Simple package for easy integration of a Custom Event System, with several premade components."
                    technologies="Unity"
                    imageUrl="/assets/project2.jpg"
                    trailerUrl="https://youtu.be/trailer3"
                    repoUrl="https://github.com/Antonio-CMota/UnityCustomEventSystem"
                />
                <ProjectCard
                    title="Camera Capture"
                    description="A mobile game built using the Niantic AR SDK and the OpenStreetMaps Nominatim API."
                    technologies="Unity"
                    imageUrl="/assets/cameracapture.jpg"
                    trailerUrl="https://youtu.be/uRfVSwJwz9I"
                    repoUrl="https://github.com/PauloRodrigues12/CameraCapture"
                />
                <ProjectCard
                    title="[WIP] Labyrinth Marble Game"
                    description="A recreation of the traditional marble labyrinth game featuring procedurally generated levels and gyroscope controls for mobile."
                    technologies="Unity for mobile, windows, WebGL"
                    imageUrl="/assets/project3.jpg"
                    trailerUrl="https://youtu.be/trailer5"
                    repoUrl="https://github.com/Antonio-CMota/LabyrinthMarbleGame"
                />
                <ProjectCard
                    title="[WIP] Classic Chess"
                    description="A simple chess game featuring an implementation of the Stockfish AI."
                    technologies="Unity for mobile, windows, WebGL"
                    imageUrl="/assets/project4.jpg"
                    trailerUrl="https://youtu.be/trailer6"
                    repoUrl="https://github.com/Antonio-CMota/ClassicChess"
                />
                <ProjectCard
                    title="Mafia Invasion - Kill or Get Killed"
                    description="A mobile game made as a project for CTESP."
                    technologies="Unity"
                    imageUrl="/assets/project5.jpg"
                    trailerUrl="https://www.youtube.com/watch?v=hPD9LlnOy7U"
                    repoUrl="https://github.com/Antonio-CMota/MafiaInvasion"
                />               
            </div>
        </div>
    );
}

export default Projects;