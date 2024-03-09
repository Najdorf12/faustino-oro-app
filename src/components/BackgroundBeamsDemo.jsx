import { BackgroundBeams } from "./ui/BackgroundBeams";
import InfiniteMovingCardsDemo from "./InfiniteMovingCardsDemo";
import Chessboard1 from "../pages/Chessboard";

const BackgroundBeamsDemo = () => {
  return (
    <div className="overflow-x-hidden w-full rounded-md bg-neutral-950 relative flex flex-col items-center pt-8 antialiased md:pt-20">
      <div className="max-w-2xl mx-auto">
        <h1
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1px white",
            margin:"0 auto"
          }}
          className="relative font-raleway text-gray-100 z-10 min-w-sm max-w-lg text-4xl text-center font-bold flex justify-center items-center pl-8 self-center justify-self-center md:text-6xl"
        >
          SOBRE MI{" "}
          <i
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px #f7ae27",
            }}
            className="bx bx-chevrons-right text-8xl"
          ></i>
          <div className="line-about"></div>
        </h1>
       
        <p
          style={{
            textWrap: "balance"
          }}
          className="text-center px-4 font-raleway text-neutral-500 max-w-5xl mx-auto mt-8 leading-5 text-sm text-semibold  relative z-10 md:font-semibold md:text-base md:mt-12 "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          eveniet! Ab, quasi quis dolorum eos nemo assumenda velit odit suscipit
          mollitia commodi possimus fuga reprehenderit facere unde voluptatibus
          iste inventore? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laudantium, eveniet! Ab, quasi quis dolorum eos nemo assumenda velit
          odit suscipit mollitia commodi.Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </div>

      <section>
        <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo>
      </section>
      
      <section className="chessboard-wrapper">
        <Chessboard1></Chessboard1>
      </section>

      <BackgroundBeams />
    </div>
  );
};
export default BackgroundBeamsDemo;
