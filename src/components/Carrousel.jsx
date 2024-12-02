const Carrousel = () => {
  return (
    <div
      id="carousel-7"
      data-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 2000}'
      className="relative w-full h-[450px] overflow-hidden bg-gray-50"
    >
      <div className="carousel rounded-none h-full w-full bg-gray-50">
        <div className="carousel-body opacity-0 h-full w-full">
          <div className="carousel-slide h-full w-full">
            <div className="flex h-full justify-center">
              <img
                src="https://www.gipuzkoasansebastian.eus/documents/14989880/21373050/cabecera-donostia.jpg/bd26ebdd-5c9e-ffcb-c4e3-ef8fbe150972?t=1618994954830"
                className="w-full h-full object-fit"
                alt="game"
              />
            </div>
          </div>
          <div className="carousel-slide h-full w-full">
            <div className="flex h-full justify-center">
              <img
                src="https://grupoabu.es/wp-content/uploads/2023/06/slider_donostia_entorno_1.jpg"
                className="w-full h-full object-fit"
                alt="game"
              />
            </div>
          </div>

          <div className="carousel-slide h-full w-full">
            <div className="flex h-full justify-center">
              <img
                src="https://www.telpark.com/wp-content/uploads/2023/03/Donostia_San_Sebastian-1920x640.jpg"
                className="w-full h-full object-fit"
                alt="game"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', letterSpacing: '2px', fontSize: '60px' }} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50  font-bold z-10"
      >
        Ongi etorri Donostiara
      </div>
    </div>
  );
};

export default Carrousel;
