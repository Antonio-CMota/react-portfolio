// src/pages/Contact.jsx
import React from 'react';

function Contact() {
    return (
        <div className="bg-charcoal p-6 min-h-screen">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>

            <form className="space-y-4 max-w-md">
                <div>
                    <label className="block text-lg font-semibold text-light-gray">Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Name" />
                </div>

                <div>
                    <label className="block text-lg font-semibold text-light-gray">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Email" />
                </div>

                <div>
                    <label className="block text-lg font-semibold text-light-gray">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded-md" placeholder="Your Message"></textarea>
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Send</button>
            </form>
        </div>
    );
}

export default Contact;
