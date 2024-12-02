import BioCard from "../components/BioCard";
import Timeline from "../components/Timeline";
import radoksiiiBg from "../assets/images/radoksiiibg.png";
import radokBeach from "../assets/images/radokplaya1.png";
import zuriola from "../assets/images/zuriola.png";
import rad3 from "../assets/images/rad3.png";
import Footer from "../components/Footer";  

const Radoksiii = () => {
  const timelineData = [
    {
      date: "La concha beach",
      title: "Place 1: La Concha Beach",
      description:
        "La Concha Beach is a beach located in the La Concha bay of the city of San Sebastián.",
      image: radokBeach,
      iconColor: "text-primary",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11611.39703896717!2d-2.001690183585733!3d43.31741488791714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51baa91847a353%3A0x2cdefc6d7978bef3!2sPlaya%20de%20la%20Concha!5e0!3m2!1ses-419!2sni!4v1733100475499!5m2!1ses-419!2sni",

    },
    {
      date: "Zurriola",
      title: "Place 2: Zurriola",
      description:
        "Zurriola Beach is one of the three beaches in the city of San Sebastián. It is located between the mouth of the Urumea River and Mount Ulía.",
      image: zuriola,
      iconColor: "text-success",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5804.881054949072!2d-1.9828812040517108!3d43.325969984477815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a545ed2e1be9%3A0xa635d76ac3894843!2sPlaya%20de%20Zurriola!5e0!3m2!1ses-419!2sni!4v1733101242367!5m2!1ses-419!2sni",
    },
    {
      date: "Random Place",
      title: "Place 3: Donostia",
      description:
        "This city combines colonial and modern architecture, offering a fascinating tour of its history and culture.",
      image: rad3,
      iconColor: "text-warning",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5804.881054949072!2d-1.9828812040517108!3d43.325969984477815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a545ed2e1be9%3A0xa635d76ac3894843!2sPlaya%20de%20Zurriola!5e0!3m2!1ses-419!2sni!4v1733101242367!5m2!1ses-419!2sni",
    },
  ];

  const bioText = [
    "My name is Rada and I was born on October 13, 2007, in Ukraine. I remember my childhood as a happy and peaceful time. When I was four years old, my younger sister was born; I had dreamed of having a sister, and I was very happy with her arrival.",
    "When I turned ten, my parents got divorced, but this didn't affect me negatively. I changed schools twice in Ukraine, and at each one, I made good friends and have special memories.",
    "In 2022, when I was 14 years old, the war in Ukraine began. In April, I had to move to Spain. It was a difficult change, and it took me a while to adjust, but after six months, I managed to make friends and feel better.",
    "Here in Spain, I also changed schools twice. I am now studying to become an administrator, I really enjoy what I do, and I want to keep learning.",
    "Today, I feel happy and stronger because of everything I have lived through. Spain is now my second home, but I will always carry Ukraine in my heart, with the hope for a peaceful future.",
  ];

  return (
    <div className="bg-white overflow-hidden">
      <BioCard
        imageSrc={radoksiiiBg}
        title="Rada's Biography 🇺🇦"
        text={bioText}
        instagramUrl="https://www.instagram.com/radoksiii"
      />
      <h2 className="text-3xl font-bold mb-4 text-gray-800 container mx-auto px-4 py-6 text-center">
      📍 My Favorite Places
      </h2>
      <Timeline items={timelineData} />
      <Footer />
    </div>
  );
};

export default Radoksiii;
