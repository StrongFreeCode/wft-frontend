'use client'
import React from 'react';
import { useGlobalContext } from '@/helpers/Global';
import dataContacts from "../../../data/contacts.json";
const ContactUs = () => {
    const { language } = useGlobalContext();

    const content = {
        en: {
            title: "Contact Us",
            description: "We'd love to hear from you. Please fill out the form below to get in touch.",
            email: "Email address",
            subject: "Subject",
            message: "Message",
            send: "Send Message"
        },
        es: {
            title: "Contáctenos",
            description: "Nos encantaría saber de usted. Por favor, complete el siguiente formulario para ponerse en contacto.",
            email: "Dirección de correo electrónico",
            subject: "Asunto",
            message: "Mensaje",
            send: "Enviar Mensaje"
        }
    };

    const selectedContent = content[language];

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        // Create the mailto link
        const mailtoLink = `mailto:${dataContacts.contacts[1].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

        // Open the user's email client
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        {selectedContent.title}
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
                        {selectedContent.description}
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">{selectedContent.email}</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={selectedContent.email} />
                        </div>
                        <div>
                            <label htmlFor="subject" className="sr-only">{selectedContent.subject}</label>
                            <input id="subject" name="subject" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={selectedContent.subject} />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">{selectedContent.message}</label>
                            <textarea id="message" name="message" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder={selectedContent.message} rows="4"></textarea>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            {selectedContent.send}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;