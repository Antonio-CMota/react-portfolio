import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    return (
        <div className="bg-ash-gray p-6 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-black mb-6 text-center">Projects</h1>
            <div className="flex flex-wrap gap-4 justify-center max-w-5xl w-full">
                <div className="basis-full sm:basis-1/2 md:basis-1/3"> {/* Adjust width per breakpoint */}
                    <ProjectCard
                        title="Virtual Campus"
                        description="An app made in collaboration with LusoInfo, for the DGE (Direcao Geral de Educacao). Allows the user to take a virtual 360 tour through the school campus and other locations."
                        technologies="React, Unity for WebGL"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/project1.jpg`}
                        link="https://github.com/Antonio-CMota/VirtualCampus"
                    />
                </div>
                <div className="basis-full sm:basis-1/2 md:basis-1/3">
                    <ProjectCard
                        title="Rigidbody Recreation"
                        description="A simple recreation of a rigidbody utilizing realistic gravity and force calculations."
                        technologies="Unity"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/project2.jpg`}
                        link="https://github.com/Antonio-CMota/RigidbodyRecreation"
                    />
                </div>
                <div className="basis-full sm:basis-1/2 md:basis-1/3">
                    <ProjectCard
                        title="[WIP] Labyrinth Marble Game"
                        description="A recreation of the traditional marble labyrinth game featuring procedurally generated levels and gyroscope controls for mobile."
                        technologies="Unity for mobile, windows, WebGL"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/project3.jpg`}
                        link="https://github.com/your-repo-link-3"
                    />
                </div>
                <div className="basis-full sm:basis-1/2 md:basis-1/3">
                    <ProjectCard
                        title="[WIP] Classic Chess"
                        description="A simple chess game featuring an implementation of the Stockfish AI."
                        technologies="Unity for mobile, windows, WebGL"
                        imageUrl={`${process.env.PUBLIC_URL}/assets/project4.jpg`}
                        link="https://github.com/your-repo-link-4"
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
