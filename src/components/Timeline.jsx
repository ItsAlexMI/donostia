import React from "react";

const TimelineItem = ({ date, title, description, image, iconColor, reverse, mapUrl }) => (
  <li>
    <div className="timeline-middle h-16">
      <span
        className={`flex size-8 items-center justify-center rounded-full shadow-md ${iconColor}/20`}
      >
        <span className={`icon-[tabler--map-pin] size-5 ${iconColor}`}></span>
      </span>
    </div>
    <div className={`timeline-${reverse ? "end" : "start"} mt-6 px-1 md:mt-8`}>
      <div className="text-base-content/50 text-sm text-gray-400 font-normal">{date}</div>
    </div>
    <div className={`timeline-${reverse ? "start" : "end"} me-4 mb-8`}>
      <div className="card shadow-lg bg-white border border-gray-200 rounded-lg">
        <div
          className={`card-body flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } gap-4 items-center`}
        >
          <img
            src={image}
            alt={title}
            className="w-48 h-32 object-cover rounded-lg shadow-md"
          />
          <div>
            <h5 className="text-lg font-semibold text-gray-700">📍 {title}</h5>
            <p className="text-gray-500 text-sm mt-2">{description}</p>
            {mapUrl && (
              <div className="mt-4">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    <hr className="bg-gray-400"/>
  </li>
);

const Timeline = ({ items }) => (
  <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
    {items.map((item, index) => (
      <TimelineItem
        key={index}
        date={item.date}
        title={item.title}
        description={item.description}
        image={item.image}
        iconColor={item.iconColor}
        reverse={index % 2 !== 0} 
        mapUrl={item.mapUrl}
      />
    ))}
  </ul>
);

export default Timeline;
