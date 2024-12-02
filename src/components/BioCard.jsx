import Instagram from '@mui/icons-material/Instagram';

const BioCard = ({ imageSrc, title, text, instagramUrl }) => {
    return (
        <div className="relative w-full bg-green-100 py-8 px-4">

            <div className="card sm:card-side max-w-full mx-auto flex flex-col sm:flex-row items-start bg-white bg-opacity-80 shadow-lg rounded-lg overflow-hidden mx-5">

                <div className="flex flex-col items-center sm:w-auto">
                    <figure className="w-auto flex justify-center items-center">
                        <img 
                            src={imageSrc} 
                            alt="Biografía" 
                            className="h-auto max-w-full object-contain"
                        />
                    </figure>

                    <div className="w-full  text-center ml-2 py-4" style={{ marginTop: '-40px' }}>

                        <Instagram className='text-green-300 mt-0' style={{ fontSize: '25px' }}/>
                        <a href={instagramUrl} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           className="text-gray-800 font-semibold hover:text-gray-600 hover:underline">
                            Follow me on Instagram
                        </a>
                    </div>
                </div>

                <div className="card-body w-full sm:w-3/4 px-6 py-4">
                    <h5 className="card-title text-3xl font-semibold text-gray-800 mb-6">{title}</h5>
                    {text.map((paragraph, index) => (
                        <p key={index} className="mb-3 text-lg text-gray-700">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
           
        </div>
    );
};

export default BioCard;
