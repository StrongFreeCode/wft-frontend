'use client'
import { useGlobalContext } from '@/helpers/Global';

const OptimizedContent = () => {
    const { language } = useGlobalContext();

    const content = {
        es: {
            "Turismo en Cuba": "Cuba, con su rica historia, vibrante cultura y hermosas playas, ofrece una experiencia turística única. Desde la animada La Habana hasta las tranquilas playas de Varadero, cada rincón de la isla tiene algo especial que ofrecer.",
            "Playas cubanas": "Las playas cubanas, como las de Varadero y Cayo Coco, son famosas por sus arenas blancas y aguas cristalinas. Ideal para relajarse y disfrutar del sol, son un paraíso tropical para los amantes del mar.",
            "La Habana": "La Habana, la capital de Cuba, es un crisol de arquitectura colonial, música en vivo y deliciosa gastronomía. Sus calles empedradas y edificios coloridos cuentan historias de un pasado glorioso.",
            "Varadero": "Varadero, conocida por su larga franja de playa, ofrece no solo sol y arena, sino también oportunidades para bucear y explorar el mar Caribe. Sus hoteles de lujo y resorts hacen de Varadero un destino perfecto para vacaciones.",
            "Cultura cubana": "La cultura cubana se manifiesta en su música, danza, arte y tradiciones. La salsa y el son resuenan en cada esquina, mientras que las fiestas populares celebran la rica herencia de la isla.",
            "Cayo Coco": "Cayo Coco, con sus playas intocables y reservas naturales, es un refugio para los amantes de la naturaleza y el buceo. Sus arrecifes de coral y vida marina hacen de este cayo un destino de buceo de clase mundial.",
            "Rutas de senderismo": "Cuba ofrece rutas de senderismo únicas a través de sus parques nacionales y reservas naturales. Desde el Parque Nacional Viñales hasta las montañas de Sierra Maestra, los amantes del aire libre encontrarán un paraíso.",
            "Música cubana": "La música cubana, con ritmos como la salsa, el son y la rumba, es una parte integral de la vida en la isla. Su vibrante ritmo contagia a todos los que la escuchan.",
            "Historia de Cuba": "La historia de Cuba es rica y variada, desde la época colonial hasta la revolución. Ciudades como La Habana y Trinidad son testigos de este pasado, con monumentos y museos que cuentan la historia de la isla.",
            "Gastronomía cubana": "La gastronomía cubana, con platos como el 'Ropa Vieja' y 'Moros y Cristianos', combina sabores únicos que reflejan la herencia multicultural de la isla. Los restaurantes locales ofrecen una experiencia culinaria auténtica.",
            "Arte en Cuba": "El arte en Cuba es diverso y vibrante, desde la pintura y la escultura hasta el teatro y la danza. La Habana, en particular, es un centro de arte contemporáneo con galerías y museos de renombre.",
            "Hoteles en Cuba": "Los hoteles en Cuba, desde los elegantes hoteles coloniales en La Habana hasta los resorts all-inclusive en Varadero, ofrecen una amplia gama de opciones para satisfacer todos los gustos y presupuestos.",
            "Tradiciones cubanas": "Las tradiciones cubanas, como las fiestas populares y las celebraciones religiosas, reflejan la rica herencia cultural de la isla. Estas tradiciones se mantienen vivas a través de la música, la danza y la comida.",
            "Naturaleza en Cuba": "La naturaleza en Cuba es diversa y preservada, con parques nacionales, reservas naturales y humedales que albergan una rica biodiversidad. Es un paraíso para los amantes de la naturaleza y la vida silvestre.",
            "Eventos en Cuba": "Los eventos en Cuba, desde festivales de música hasta celebraciones culturales, ofrecen una ventana a la vida y la cultura de la isla. Estos eventos son una oportunidad para experimentar la energía y la alegría de Cuba.",
            "Arquitectura cubana": "La arquitectura cubana, con su mezcla de estilos coloniales y modernos, es una joya arquitectónica. Ciudades como La Habana y Trinidad son ejemplos vivos de esta rica herencia arquitectónica.",
            "Buceo en Cuba": "El buceo en Cuba, especialmente en lugares como Cayo Coco y la Isla de la Juventud, ofrece algunas de las mejores experiencias de buceo en el Caribe. Sus aguas claras y arrecifes de coral atraen a buceadores de todo el mundo.",
            "Fiestas populares en Cuba": "Las fiestas populares en Cuba, como el Carnaval de La Habana y las celebraciones religiosas, son una manifestación de la alegría y la comunidad de la isla. Estas fiestas son un festín para los sentidos.",
            "Transporte en Cuba": "El transporte en Cuba, desde los clásicos coches estadounidenses hasta los autobuses y taxis, ofrece una experiencia única. Explorar la isla es una aventura en sí misma.",
            "Reservas naturales en Cuba": "Las reservas naturales en Cuba, como la Reserva de la Biosfera del Archipiélago de Sabana-Camagüey y el Parque Nacional Viñales, protegen una rica biodiversidad y ofrecen oportunidades para explorar la naturaleza cubana."
        },

        "en": {
            "Tourism in Cuba": "Cuba, with its rich history, vibrant culture, and beautiful beaches, offers a unique tourist experience. From the lively Havana to the tranquil beaches of Varadero, every corner of the island has something special to offer.",
            "Cuban Beaches": "Cuban beaches, such as those in Varadero and Cayo Coco, are famous for their white sands and crystal-clear waters. Ideal for relaxing and enjoying the sun, they are a tropical paradise for beach lovers.",
            "Havana": "Havana, the capital of Cuba, is a melting pot of colonial architecture, live music, and delicious cuisine. Its cobblestone streets and colorful buildings tell stories of a glorious past.",
            "Varadero": "Varadero, known for its long stretch of beach, offers not only sun and sand but also opportunities for diving and exploring the Caribbean Sea. Its luxury hotels and resorts make Varadero a perfect destination for vacations.",
            "Cuban Culture": "Cuban culture is manifested in its music, dance, art, and traditions. Salsa and son resonate in every corner, while popular festivals celebrate the rich heritage of the island.",
            "Cayo Coco": "Cayo Coco, with its untouched beaches and natural reserves, is a sanctuary for nature lovers and divers. Its coral reefs and marine life make this cay a world-class diving destination.",
            "Hiking Routes": "Cuba offers unique hiking routes through its national parks and natural reserves. From Viñales National Park to the mountains of Sierra Maestra, outdoor enthusiasts will find a paradise.",
            "Cuban Music": "Cuban music, with rhythms like salsa, son, and rumba, is an integral part of life on the island. Its vibrant rhythm infects everyone who listens.",
            "Cuba's History": "Cuba's history is rich and varied, from the colonial era to the revolution. Cities like Havana and Trinidad are witnesses to this past, with monuments and museums that tell the story of the island.",
            "Cuban Cuisine": "Cuban cuisine, with dishes like 'Ropa Vieja' and 'Moros y Cristianos', combines unique flavors that reflect the multicultural heritage of the island. Local restaurants offer an authentic culinary experience.",
            "Art in Cuba": "Art in Cuba is diverse and vibrant, from painting and sculpture to theater and dance. Havana, in particular, is a center of contemporary art with renowned galleries and museums.",
            "Hotels in Cuba": "Hotels in Cuba, from the elegant colonial hotels in Havana to the all-inclusive resorts in Varadero, offer a wide range of options to suit all tastes and budgets.",
            "Cuban Traditions": "Cuban traditions, such as popular festivals and religious celebrations, reflect the rich cultural heritage of the island. These traditions are kept alive through music, dance, and food.",
            "Nature in Cuba": "Nature in Cuba is diverse and preserved, with national parks, natural reserves, and wetlands that host rich biodiversity. It is a paradise for nature lovers and wildlife enthusiasts.",
            "Events in Cuba": "Events in Cuba, from music festivals to cultural celebrations, offer a window into the life and culture of the island. These events are an opportunity to experience the energy and joy of Cuba.",
            "Cuban Architecture": "Cuban architecture, with its mix of colonial and modern styles, is an architectural jewel. Cities like Havana and Trinidad are living examples of this rich architectural heritage.",
            "Diving in Cuba": "Diving in Cuba, especially in places like Cayo Coco and the Isle of Youth, offers some of the best diving experiences in the Caribbean. Its clear waters and coral reefs attract divers from around the world.",
            "Popular Festivals in Cuba": "Popular festivals in Cuba, such as the Havana Carnival and religious celebrations, are a manifestation of joy and community. These festivals are a feast for the senses.",
            "Transport in Cuba": "Transport in Cuba, from classic American cars to buses and taxis, offers a unique experience. Exploring the island is an adventure in itself.",
            "Natural Reserves in Cuba": "Natural reserves in Cuba, such as the Sabana-Camagüey Archipelago Biosphere Reserve and Viñales National Park, protect rich biodiversity and offer opportunities to explore Cuban nature."
        }

    };

    return (
        <div className="bg-slate-300 dark:bg-gray-800 my-2 mx-2 p-6 rounded-lg shadow-md">
            {/* <h2 className="text-2xl font-bold mb-4 dark:text-white">{language == 'es' ? `"Información de interes"` : `"Interest Information"`} </h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.keys(content[language]).map((key) => (
                    <div key={key} className="mb-4">
                        <h3 className="text-xl font-bold mb-2 dark:text-white">{key}</h3>
                        <p className="text-gray-700 font-serif dark:text-gray-300">{content[language][key]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptimizedContent;