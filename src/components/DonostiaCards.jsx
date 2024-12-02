const Cards = [
    {
        title: "La Concha Beach",
        description: "One of Europe's most beautiful urban beaches, perfect for sunbathing and swimming.",
        tags: ["Beach", "Sunbathing", "Swimming"],
        image: ["https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/10/san-sebastian_la-concha_888.jpg"]
    },
    {
        title: "Old Town of Donostia",
        description: "Historic center filled with pintxos bars, shops, and beautiful architecture.",
        tags: ["Historic", "Pintxos", "Shopping"],
        image: ["https://a.travel-assets.com/findyours-php/viewfinder/images/res70/259000/259751-Old-Town-Basque.jpg"]
    },
    {
        title: "Monte Igueldo",
        description: "Mountain offering panoramic views of the city and an old-fashioned amusement park.",
        tags: ["Mountain", "Views", "Amusement Park"],
        image: ["https://estaticos-cdn.prensaiberica.es/clip/909446b4-2b1a-4196-a788-f00c18c4b401_source-aspect-ratio_default_0.jpg"]
    },
    {
        title: "Kursaal Congress Centre",
        description: "Modern architectural landmark hosting cultural events and conferences.",
        tags: ["Modern", "Cultural", "Conferences"],
        image: ["https://www.spain.info/.content/imagenes/cabeceras-grandes/pais-vasco/kursaal-san-sebastian_s2103153815.jpg"]
    },

]

export default function DonostiaCards() {
    return (
        <section className="bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
                {Cards.map((card, index) => (
                    <div 
                        key={index} 
                        className="card relative bg-cover bg-center sm:max-w-lg md:max-w-xl lg:max-w-2xl text-white" 
                        style={{ backgroundImage: `url(${card.image})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        <div className="relative p-6">
                            <div className="card-header">
                                <h5 className="card-title text-white text-2xl font-bold">{card.title}</h5>
                            </div>
                            <div className="card-body text-gray-100 text-lg">
                                <p>{card.description}</p>
                            </div>
                            <div className="card-footer mt-4">
                                {card.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="inline-block bg-gray-50 text-gray-800 font-bold text-sm rounded-full px-3 py-1 m-1"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

