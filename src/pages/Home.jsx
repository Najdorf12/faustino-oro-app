import imgChess from "/img-chess.png";
import BackgroundBeamsDemo from "../components/BackgroundBeamsDemo";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section
        className="relative w-full h-screen bg-center bg-fixed bg-cover bg-no-repeat opacity-500"
        style={{
          backgroundImage: "url('/fausti5.jpg')",
        }}
        >
        <article
          className="text-center absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center"
          style={{
            backgroundColor: "rgba(32, 27, 27, 0.7)",
          }}
        >
          <h1 className="bg-clip-text text-transparent font-montserrat bg-gradient-to-b from-neutral-100 to-neutral-500 px-4  text-gray-200 font-extrabold text-4xl mt-44 md:text-6xl md:mt-64">
            FAUSTINO ORO
          </h1>
          <p className="font-raleway font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#f8ca74] to-neutral-500 md:text-xl">
            MAESTRO FIDE
          </p>
        </article>
      </section>

      <section className="px-4 py-8 w-full flex flex-col items-center justify-center text-center lg:flex-row lg:text-start lg:h-screen lg:pl-10">
        <p className="font-extrabold font-montserrat text-3xl text-neutral-900 lg:text-7xl lg:w-2/3 lg:leading-tight lg:pl-8  xl:leading-normal">
          LA VIDA ES UNA INTERRUPCIÓN INSÍPIDA DEL{" "}
          <span className="text-[#f09c01]">AJEDREZ</span>
        </p>
        <picture className="max-w-sm xl:mr-32 xl:max-w-xl xl:mt-12">
          <img src={imgChess} className="w-full -mt-2" />
        </picture>
      </section>

      <BackgroundBeamsDemo />
   
    </main>
  );
};

export default Home;
