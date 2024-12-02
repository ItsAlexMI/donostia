const Events = [
    {
        title: "San Sebastián International Film Festival",
        description: "One of Europe's most important film festivals, held annually in September.",
        date: "September"
    },
    {
        title: "Tamborrada",
        description: "A 24-hour drumming festival celebrating San Sebastián's patron saint.",
        date: "January 20"
    },
    {
        title: "Semana Grande (Big Week)",
        description: "A week-long festival with concerts, fireworks, and cultural events.",
        date: "Mid-August"
    },
    {
        title: "San Sebastián Jazz Festival (Jazzaldia)",
        description: "One of the oldest jazz festivals in Europe, featuring international artists.",
        date: "July"
    },
    {
        title: "Santo Tomás Fair",
        description: "Traditional Basque fair with local products, music, and festivities.",
        date: "December 21"
    }
]

export default function DonostiaEvents() {
    return (
        <section className="">
            <div className="accordion divide-neutral/20 w-full max-w-3xl divide-y mx-auto ">
                {Events.map((event, index) => (
                    <div key={index} className="accordion-item active">
                        <button className="accordion-toggle inline-flex items-center justify-between w-full gap-x-4 text-start py-4" aria-controls="payment-icon-collapse" aria-expanded="true">
                            <span className="icon-[tabler--calendar-week] text-base-content size-6 text-red-500 shrink-0"></span>
                            <span className="text-gray-800 font-semibold">{event.title}</span>
                            <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180 ml-auto" ></span>
                        </button>
                        <div id="payment-icon-collapse" className="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-icon" role="region">
                            <div className="px-5 pb-4">
                                <p className="text-base-content/80 font-normal text-gray-500">
                                    {event.description}
                                </p>
                            </div>
                            <div className="px-5 pb-4">
                                <p className="text-base-content/80 font-normal text-gray-400">
                                    {event.date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
