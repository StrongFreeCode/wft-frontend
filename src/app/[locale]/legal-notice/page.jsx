'use client'
import React from 'react';
import { useGlobalContext } from '@/helpers/Global';

const LegalNotice = () => {
    const { language } = useGlobalContext();

    const content = {
        en: {
            title: "LEGAL NOTICE AND GENERAL TERMS OF USE",
            subtitle: "wonderfulltime.com",
            sections: [
                {
                    title: "I. GENERAL INFORMATION",
                    paragraphs: [
                        "In compliance with the duty of information provided in Law 34/2002 of July 11 on Information Society Services and Electronic Commerce (LSSI-CE), the following general information data of this website is provided below:",
                        "The ownership of this website, wonderfulltime.com, (hereinafter, Website) is held by: [Company Name], with VAT number: [VAT Number], and whose contact details are:",
                        "Address: Havana, Cuba, 10700",
                        "Contact phone: 053878045",
                        "Email: info@wonderfulltime.com"
                    ]
                },
                {
                    title: "II. TERMS AND GENERAL CONDITIONS OF USE",
                    paragraphs: [
                        "The purpose of these General Terms of Use (hereinafter, Conditions) is to regulate the access and use of the Website. For the purposes of these Conditions, Website shall mean: the external appearance of the screen interfaces, both statically and dynamically, i.e., the navigation tree; and all the elements integrated both in the screen interfaces and in the navigation tree (hereinafter, Contents) and all those online services or resources that may be offered to Users (hereinafter, Services).",
                        "wonderfulltime reserves the right to modify, at any time and without prior notice, the presentation and configuration of the Website and of the Contents and Services that may be incorporated therein. The User acknowledges and accepts that wonderfulltime may at any time interrupt, deactivate and/or cancel any of these elements that are integrated into the Website or access to them.",
                        "Access to the Website by the User is of a general nature and, as a rule, is free without the User having to provide a consideration to be able to enjoy it, except in relation to the cost of connection through the telecommunications network provided by the access provider that the User has contracted.",
                        "The use of some of the Contents or Services of the Website may be made by the User upon prior subscription or registration of the User."
                    ]
                },
                {
                    title: "III. ACCESS AND NAVIGATION ON THE WEBSITE: EXCLUSION OF WARRANTIES AND LIABILITY",
                    paragraphs: [
                        "wonderfulltime does not guarantee the continuity, availability, and usefulness of the Website, nor of the Contents or Services. wonderfulltime will do its best for the proper functioning of the Website, however, it is not responsible nor guarantees that the access to this Website will be uninterrupted or error-free.",
                        "Neither is it responsible or guarantees that the content or software that can be accessed through this Website, is free of error or causes damage to the User's computer system (software and hardware). Under no circumstances will wonderfulltime be responsible for losses, damages, or harm of any kind arising from access, navigation, and use of the Website, including, but not limited to, those caused to computer systems or those caused by the introduction of viruses."
                    ]
                },
                {
                    title: "IV. LINK POLICY",
                    paragraphs: [
                        "It is informed that the wonderfulltime Website makes or may make available to Users linking means (such as, among others, links, banners, buttons), directories, and search engines that allow Users to access websites belonging to and/or managed by third parties.",
                        "The installation of these links, directories, and search engines on the Website is intended to facilitate Users' search for and access to information available on the Internet, without being considered a suggestion, recommendation, or invitation to visit them.",
                        "wonderfulltime does not offer or market by itself or through third parties the products and/or services available on those linked sites.",
                        "Likewise, it does not guarantee the technical availability, accuracy, veracity, validity, or legality of sites outside its property that can be accessed through the links.",
                        "wonderfulltime in no case will review or control the content of other websites, nor does it approve, examine, or own the products, services, contents, files, and any other material existing on the linked sites.",
                        "wonderfulltime does not assume any responsibility for the damages that may be caused by the access, use, quality, or legality of the contents, communications, opinions, products, and services of the websites not managed by wonderfulltime and that are linked on this Website."
                    ]
                },
                {
                    title: "V. INTELLECTUAL AND INDUSTRIAL PROPERTY",
                    paragraphs: [
                        "wonderfulltime by itself or as an assignee, is the owner of all intellectual and industrial property rights of the Website, as well as of the elements contained therein (for illustrative and non-exhaustive purposes, images, sound, audio, video, software, or texts, trademarks or logos, color combinations, structure, and design, selection of materials used, computer programs necessary for its operation, access, and use, etc.). They are, therefore, protected works as intellectual property by the Spanish legal system, to which both the Spanish and Community regulations in this field apply, as well as the international treaties related to the matter and signed by Spain.",
                        "All rights reserved. In accordance with the provisions of the Intellectual Property Law, the reproduction, distribution, and public communication, including the method of making available, of all or part of the contents of this website, for commercial purposes, on any medium and by any technical means, are expressly prohibited without the authorization of wonderfulltime."
                    ]
                },
                {
                    title: "VI. LEGAL ACTIONS, APPLICABLE LEGISLATION, AND JURISDICTION",
                    paragraphs: [
                        "wonderfulltime reserves the right to file civil or criminal actions it deems necessary for the improper use of the Website and Contents, or for the breach of these Conditions.",
                        "The relationship between the User and wonderfulltime shall be governed by the applicable and valid regulations in the Spanish territory. Should any controversy arise in relation to the interpretation and/or application of these Conditions, the parties shall submit their disputes to the ordinary jurisdiction, submitting to the corresponding judges and courts in accordance with the law."
                    ]
                }
            ]
        },
        es: {
            title: "AVISO LEGAL Y CONDICIONES GENERALES DE USO",
            subtitle: "wonderfulltime.com",
            sections: [
                {
                    title: "I. INFORMACIÓN GENERAL",
                    paragraphs: [
                        "En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:",
                        "La titularidad de este sitio web, wonderfulltime.com, (en adelante, Sitio Web) la ostenta: [Company Name], con NIF: [NIF], y cuyos datos de contacto son:",
                        "Dirección: La Habana, Cuba, 10700",
                        "Teléfono de contacto: 053878045",
                        "Email de contacto: info@wonderfulltime.com"
                    ]
                },
                {
                    title: "II. TÉRMINOS Y CONDICIONES GENERALES DE USO",
                    paragraphs: [
                        "El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).",
                        "wonderfulltime se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento wonderfulltime pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.",
                        "El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.",
                        "La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario."
                    ]
                },
                {
                    title: "III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD",
                    paragraphs: [
                        "wonderfulltime no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. wonderfulltime hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.",
                        "Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso wonderfulltime será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus."
                    ]
                },
                {
                    title: "IV. POLÍTICA DE ENLACES",
                    paragraphs: [
                        "Se informa que el Sitio Web de wonderfulltime pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.",
                        "La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos.",
                        "wonderfulltime no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.",
                        "Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.",
                        "wonderfulltime en ningún caso revisará o controlará el contenido de otros sitios web, así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro material existente en los referidos sitios enlazados.",
                        "wonderfulltime no asume ninguna responsabilidad por los daños y perjuicios que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir."
                    ]
                },
                {
                    title: "V. PROPIEDAD INTELECTUAL E INDUSTRIAL",
                    paragraphs: [
                        "wonderfulltime por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España.",
                        "Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de wonderfulltime."
                    ]
                },
                {
                    title: "VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN",
                    paragraphs: [
                        "wonderfulltime se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.",
                        "La relación entre el Usuario y wonderfulltime se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho."
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

export default LegalNotice;