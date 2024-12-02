'use client'

const faqs = [
  {
    question: "What is Donostia also known as?",
    answer: "Donostia is the Basque name for San Sebastián, a city located in the Basque Country in northern Spain."
  },
  {
    question: "What is Donostia famous for?",
    answer: "Donostia is renowned for its beautiful beaches, particularly La Concha, its vibrant culinary scene featuring pintxos (Basque tapas), and its annual International Film Festival."
  },
  {
    question: "How do I get to Donostia?",
    answer: "You can reach Donostia by flying into San Sebastián Airport, or larger nearby airports like Bilbao or Biarritz. The city is also well-connected by train and bus services."
  },
  {
    question: "What languages are spoken in Donostia?",
    answer: "The official languages are Spanish and Basque (Euskara). Many people in the service industry also speak English, especially in tourist areas."
  },
  {
    question: "When is the best time to visit Donostia?",
    answer: "The best time to visit is during the summer months (June to September) for beach activities and festivals. However, spring and fall offer milder weather and fewer crowds."
  }
]

export default function DonostiaFAQ() {
  return (
    <section className="mb-12 mt-12 flex justify-center">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 container mx-auto md:mx-[450px] px-4 py-6 text-center md:text-left">Frequently Asked Questions about Donostia</h2>
        <div className="accordion divide-neutral/20 w-full divide-y">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index} id={`faq-item-${index}`}>
              <button
                className="accordion-toggle inline-flex items-center justify-between text-start w-full"
                aria-controls={`faq-collapse-${index}`}
                aria-expanded="false"
              >
                <span className="inline-flex items-center gap-x-4">
                  {faq.question}
                </span>
                <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
              </button>
              <div
                id={`faq-collapse-${index}`}
                className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby={`faq-item-${index}`}
                role="region"
              >
                <div className="px-5 pb-4">
                  <p className="text-base-content/80 font-normal">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
