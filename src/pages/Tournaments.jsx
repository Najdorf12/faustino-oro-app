import StickyScroll from "../components/ui/StickyScroll";
import Navbar from "../components/Navbar";

const content = [
  {
    title: "Tata Steel Masters",
    description:
      "Work together in real time with your team, clients, and stakeholders.",
    date: "14/12/2024",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="/flags/flag-spain.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Lorem Impsum",
    description:
      "Work together in real time with your team, clients, and stakeholders.",
    date: "14/12/2024",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/flags/flag-france.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Tata Steel Masters",
    description:
      "Work together in real time with your team, clients, and stakeholders.",
    date: "14/12/2024",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/flags/flag-alemania.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Lorem Impsum",
    description:
      "Work together in real time with your team, clients, and stakeholders.",
    date: "14/12/2024",
    content: (
      <div className="h-full w-full  flex items-center justify-center object-cover text-white">
        <img
          src="/flags/flag-portugal.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Lorem Impsum",
    description:
      "Work together in real time with your team, clients, and stakeholders.",
    date: "14/12/2024",
    content: (
      <div className="h-full w-full  flex items-center justify-center object-cover text-white">
        <img
          src="/flags/flag-suecia.png"
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
const Tournaments = () => {
  return (
    <>
    <div className="z-">
      <StickyScroll content={content} />
    </div>
    </>
  );
};
export default Tournaments;
