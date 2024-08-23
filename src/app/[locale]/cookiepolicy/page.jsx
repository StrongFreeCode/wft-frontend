'use client'
import React from 'react';
import { useGlobalContext } from '@/helpers/Global';

const CookiePolicy = () => {
    const { language } = useGlobalContext();

    const content = {
        en: {
            title: "COOKIE POLICY",
            subtitle: "wonderfulltime.com",
            sections: [
                {
                    title: "Introduction",
                    paragraphs: [
                        "Access to this Website may involve the use of cookies. Cookies are small amounts of information that are stored in the browser used by each User —on the various devices that they may use to browse— so that the server remembers certain information that it will later read only by the server that implemented it. Cookies facilitate navigation, make it more user-friendly, and do not damage the browsing device.",
                        "Cookies are automatic procedures for collecting information related to the preferences determined by the User during their visit to the Website in order to recognize them as a User, and personalize their experience and use of the Website, and may also, for example, help identify and resolve errors."
                    ]
                },
                {
                    title: "Information Collected",
                    paragraphs: [
                        "The information collected through cookies may include the date and time of visits to the Website, the pages viewed, the time spent on the Website, and the sites visited just before and after it. However, no cookie allows it to contact the User's phone number or any other personal contact method. No cookie can extract information from the User's hard drive or steal personal information. The only way that the User's private information becomes part of the Cookie file is if the User personally provides that information to the server."
                    ]
                },
                {
                    title: "Personal Data and Consent",
                    paragraphs: [
                        "Cookies that allow identifying a person are considered personal data. Therefore, they will be subject to the Privacy Policy described above. In this regard, the User's consent will be necessary for their use. This consent will be communicated, based on an authentic choice, offered through an affirmative and positive decision, before the initial processing, removable and documented."
                    ]
                },
                {
                    title: "Own Cookies",
                    paragraphs: [
                        "These are cookies that are sent to the User's computer or device and managed exclusively by wonderfulltime for the better functioning of the Website. The information collected is used to improve the quality of the Website and its Content and the User's experience. These cookies allow recognizing the User as a recurring visitor to the Website and adapt the content to offer them content that matches their preferences."
                    ]
                },
                {
                    title: "Third-Party Cookies",
                    paragraphs: [
                        "These are cookies used and managed by external entities that provide wonderfulltime with services requested by the same to improve the Website and the user experience while browsing the Website. The main objectives for which third-party cookies are used are the acquisition of access statistics and the analysis of navigation information, i.e., how the User interacts with the Website.",
                        "The information obtained refers, for example, to the number of pages visited, the language, the place to which the IP address from which the User accesses, the number of Users who access, the frequency and recurrence of visits, the time of visit, the browser used, the operator or type of device from which the visit is made. This information is used to improve the Website, and detect new needs to offer Users Content and/or service of optimal quality. In any case, the information is collected anonymously and trend reports of the Website are prepared without identifying individual users.",
                        "You can obtain more information about cookies, privacy information, or consult the description of the type of cookies used, their main characteristics, expiration period, etc. at the following link(s):",
                        "Google Analytics"
                    ]
                },
                {
                    title: "Social Media Cookies",
                    paragraphs: [
                        "wonderfulltime incorporates social media plugins, which allow access to them from the Website. For this reason, social media cookies may be stored in the User's browser. The owners of these social networks have their own privacy and cookie policies, being themselves, in each case, responsible for their own files and their own privacy practices. The User should refer to them to learn about these cookies and, where appropriate, the processing of their personal data. Only for informational purposes, the following links to their privacy and/or cookie policies are provided:",
                        "Facebook: https://www.facebook.com/policies/cookies/",
                        "Twitter: https://twitter.com/es/privacy",
                        "Instagram: https://help.instagram.com/1896641480634370?ref=ig",
                        "YouTube: https://policies.google.com/privacy?hl=es-419&gl=mx",
                        "Pinterest: https://policy.pinterest.com/es/privacy-policy",
                        "LinkedIn: https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies"
                    ]
                },
                {
                    title: "Disabling, Rejecting, and Deleting Cookies",
                    paragraphs: [
                        "The User can disable, reject, and delete cookies —totally or partially— installed on their device by setting their browser (among those available are, for example, Chrome, Firefox, Safari, Explorer). In this regard, the procedures for rejecting and deleting cookies may differ from one Internet browser to another. Consequently, the User must refer to the instructions provided by their own Internet browser. In the event that the User rejects the use of cookies —totally or partially— they may continue to use the Website, although they may have limited use of some of its features."
                    ]
                }
            ]
        },
        es: {
            title: "POLÍTICA DE COOKIES",
            subtitle: "wonderfulltime.com",
            sections: [
                {
                    title: "Introducción",
                    paragraphs: [
                        "El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.",
                        "Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores."
                    ]
                },
                {
                    title: "Información Recabada",
                    paragraphs: [
                        "La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor."
                    ]
                },
                {
                    title: "Datos Personales y Consentimiento",
                    paragraphs: [
                        "Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado."
                    ]
                },
                {
                    title: "Cookies Propias",
                    paragraphs: [
                        "Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por wonderfulltime para el mejor funcionamiento del Sitio Web. La información que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias."
                    ]
                },
                {
                    title: "Cookies de Terceros",
                    paragraphs: [
                        "Son cookies utilizadas y gestionadas por entidades externas que proporcionan a wonderfulltime servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.",
                        "La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.",
                        "Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente(s) enlace(s):",
                        "Google Analytics"
                    ]
                },
                {
                    title: "Cookies de Redes Sociales",
                    paragraphs: [
                        "wonderfulltime incorpora plugins de redes sociales, que permiten acceder a las mismas a partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad. El Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su caso, del tratamiento de sus datos personales. Únicamente a título informativo se indican a continuación los enlaces en los que se pueden consultar dichas políticas de privacidad y/o de cookies:",
                        "Facebook: https://www.facebook.com/policies/cookies/",
                        "Twitter: https://twitter.com/es/privacy",
                        "Instagram: https://help.instagram.com/1896641480634370?ref=ig",
                        "YouTube: https://policies.google.com/privacy?hl=es-419&gl=mx",
                        "Pinterest: https://policy.pinterest.com/es/privacy-policy",
                        "LinkedIn: https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies"
                    ]
                },
                {
                    title: "Deshabilitar, Rechazar y Eliminar Cookies",
                    paragraphs: [
                        "El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo."
                    ]
                }
            ]
        }
    };

    const selectedContent = content[language];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto py-12 px-4">
                <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6">
                    <header className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{selectedContent.title}</h2>
                        <h4 className="text-xl text-gray-600 dark:text-gray-300">{selectedContent.subtitle}</h4>
                    </header>
                    <div>
                        {selectedContent.sections.map((section, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">{section.title}</h3>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-600 dark:text-gray-300 mb-4">{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookiePolicy;