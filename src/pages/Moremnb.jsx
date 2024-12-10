import BioCard from "../components/BioCard";
import Timeline from "../components/Timeline";
import MoremnbBg from "../assets/images/moremnb.png";
import moremnbPlaya from "../assets/images/moremnbPlaya.png";
import Footer from "../components/Footer";  
import Kale from "../assets/images/Kale.png";
import Urumea from "../assets/images/Urumea.png";

const Moremnb = () => {
  const timelineData = [
    {
      date: "Donostiako portua",
      title: "Place 1: Donostiako portua  ",
      description:
        "Port of Donostia It is located at the eastern end of La Concha Bay, at the foot of the statue of the Sacred Heart that crowns Mount Urgull.",
      image: moremnbPlaya,
      iconColor: "text-primary",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1451.3149614988372!2d-1.9872125305559842!3d43.3220059515743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a50a840a7295%3A0xe7332395057b062d!2sPuerto%20de%20San%20Sebasti%C3%A1n!5e0!3m2!1ses-419!2sni!4v1733165908253!5m2!1ses-419!2sni" ,

    },
    {
      date: "Kale Nagusia Kalea",
      title: "Place 2: Kale Nagusia Kalea",
      description:
        "One of the streets of the old town of Villabona. It is characterized by being an industrial town, it also has great commercial and hospitality activity.",
      image: Kale,
      iconColor: "text-success",
      mapUrl:
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6166.350595349779!2d-2.0730580680994923!3d43.16479392794663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b4a862e9a0bb%3A0x39f12284dcc43a4d!2sKale%20Nagusia%20Kalea%2C%2020270%2C%20Gipuzkoa%2C%20Espa%C3%B1a!5e0!3m2!1ses-419!2sni!4v1733166550987!5m2!1ses-419!2sni"    },
    {
      date: "Urumea ibaia",
      title: "Place 3: Urumea ibaia",
      description:
        "TThe Urumea is a river in the north of the Iberian Peninsula that runs through Spain. It rises in Navarra and empties into the Cantabrian Sea in San Sebastián .",
      image: Urumea,
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
        imageSrc={MoremnbBg}
        bgColor="bg-cyan-100"
        igColor="text-cyan-300"
        title="Fio's Biography 🦋"
        text={bioText}
        instagramUrl="https://www.instagram.com/_moremnb_"
      />
      <h2 className="text-3xl font-bold mb-4 text-gray-800 container mx-auto px-4 py-6 text-center">
      📍 My Favorite Places
      </h2>
      <Timeline items={timelineData} />
      <Footer />
    </div>
  );
};

export default Moremnb;
