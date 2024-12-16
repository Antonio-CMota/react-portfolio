// src/pages/Curriculum.jsx
import React from 'react';

function Curriculum() {
    return (
        <div className="bg-charcoal p-6 min-h-screen pt-16"> {/* Added pt-16 for navbar spacing */}
            <h1 className="text-4xl font-bold text-white mb-4">Curriculum</h1>
            <div className="flex items-center mb-6">
                <img
                    src="/assets/cvphoto.jpg"
                    alt="António Cunha da Mota"
                    className="w-32 h-32 rounded-full object-cover mr-4"
                />
                <div className="text-light-gray">
                    <h2 className="text-2xl font-bold">António Maria Cunha da Mota</h2>
                    <p>Date of Birth: 28-06-2000</p>
                    <p>Nationality: Portuguesa</p>
                    <p>Gender: Masculino</p>
                </div>
            </div>
            <p className="text-light-gray">
                This is the curriculum page where you can outline your skills and education. List relevant courses, certifications, and experiences that highlight your expertise.
            </p>
            <div className="mt-6 text-light-gray">
                <h2 className="text-2xl font-bold mb-2">Contact</h2>
                <p>Phone: +351 913 113 702</p>
                <p>Email: a039689@ipmaia.pt / antoniomcmota@live.com.pt</p>
                <p>Address: Avenida da República, 81, R-C Esquerdo, Matosinhos</p>

                <h2 className="text-2xl font-bold mb-2 mt-4">Software Skills</h2>
                <ul className="list-disc list-inside">
                    <li>Microsoft Office</li>
                    <li>Adobe Photoshop, Illustrator, Premiere, and XD</li>
                    <li>3ds Max</li>
                    <li>Ableton</li>
                    <li>Fl Studio</li>
                    <li>Unity (Main Focus)</li>
                    <li>Generalized Computer Knowledge</li>
                </ul>

                <h2 className="text-2xl font-bold mb-2 mt-4">Education</h2>
                <p>
                    Ensino Secundário: 10º Ano concluído na Escola Secundária Garcia de Orta - Ciências com Físico-Química e Geometria Descritiva (2016/2017); Um ano de estudos na Escola Secundária Soares dos Reis (2017/2018); Ensino Completado em Curso EFA (Educação e Formação para Adultos) (2019);
                </p>
                <p>
                    Ensino Superior: CTESP - Produção Multimédia e Jogos Digitais (2020 / 2022) em IPMAIA; Licenciatura - Desenvolvimento de Jogos Digitais (2022 / atualidade) em IPMAIA;
                </p>

                <h2 className="text-2xl font-bold mb-2 mt-4">Professional Experience</h2>
                <h3 className="font-bold">Unity Developer / Game Design Internship - Emvenci Business Services (2020-2022)</h3>
                <p>
                    Trabalhou dentro de uma equipa dinâmica focada no desenvolvimento de jogos educativos, desde a conceptualização inicial de jogos até a produção de documentos e criação de protótipos.
                </p>

                <h2 className="text-2xl font-bold mb-2 mt-4">Programming Skills</h2>
                <ul className="list-disc list-inside">
                    <li>C# (Native and MonoBehaviour)</li>
                    <li>SQL</li>
                    <li>Basic Level HTML</li>
                </ul>
            </div>
        </div>
    );
}

export default Curriculum;
