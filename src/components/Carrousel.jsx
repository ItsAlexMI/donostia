const Carrousel = () => {
    return (
      <div
        id="carousel-7"
        data-carousel='{"loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 2000}'
        className="relative w-full h-[600px]"
      >
        <div className="carousel h-full">
          <div className="carousel-body opacity-0 h-full">
            <div className="carousel-slide h-full">
              <div className="flex h-full justify-center">
                <img
                  src="https://www.gipuzkoasansebastian.eus/documents/14989880/21373050/cabecera-donostia.jpg/bd26ebdd-5c9e-ffcb-c4e3-ef8fbe150972?t=1618994954830"
                  className="w-full h-full object-cover"
                  alt="game"
                />
              </div>
            </div>
            <div className="carousel-slide h-full">
              <div className="flex h-full justify-center">
                <img
                  src="https://grupoabu.es/wp-content/uploads/2023/06/slider_donostia_entorno_1.jpg"
                  className="w-full h-full object-cover"
                  alt="game"
                />
              </div>
            </div>

            <div className="carousel-slide h-full">
              <div className="flex h-full justify-center">
                <img
                  src="https://www.telpark.com/wp-content/uploads/2023/03/Donostia_San_Sebastian-1920x640.jpg"
                  className="w-full h-full object-cover"
                  alt="game"
                />
              </div>
            </div>
          </div>
        </div>
  
        <div style={{fontFamily: 'cursive'}} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-50 text-4xl font-bold z-10">
        Ongi etorri Donostiara
        </div>
      </div>
    );
  };
  
  export default Carrousel;
