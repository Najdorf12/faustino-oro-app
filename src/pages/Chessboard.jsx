import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";

function Chessboard1() {
  const pgn = [
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1",
    "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
    "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
    "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
    "r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4",
    "r1bqkbnr/1ppp1ppp/p1n5/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 1 4",
    "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5",
    "r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 b kq - 3 5",
    "r1bqkb1r/2pp1ppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 0 6",
    "r1bqkb1r/2pp1ppp/p1n2n2/1p2p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 0 6",
    "r1bqk2r/2pp1ppp/p1n2n2/1pb1p3/B3P3/3P1N2/PPP2PPP/RNBQ1RK1 w kq - 1 7",
    "r1bqk2r/2pp1ppp/p1n2n2/1pb1p3/4P3/1B1P1N2/PPP2PPP/RNBQ1RK1 b kq - 2 7",
    "r1bqk2r/2p2ppp/p1np1n2/1pb1p3/4P3/1B1P1N2/PPP2PPP/RNBQ1RK1 w kq - 0 8",
    "r1bqk2r/2p2ppp/p1np1n2/1pb1p3/4P3/1BPP1N2/PP3PPP/RNBQ1RK1 b kq - 0 8",
    "r1bq1rk1/2p2ppp/p1np1n2/1pb1p3/4P3/1BPP1N2/PP3PPP/RNBQ1RK1 w - - 1 9",
    "r1bq1rk1/2p2ppp/p1np1n2/1pb1p3/4P3/1BPP1N2/PP1N1PPP/R1BQ1RK1 b - - 2 9",
    "r1bq1rk1/2p2pp1/p1np1n1p/1pb1p3/4P3/1BPP1N2/PP1N1PPP/R1BQ1RK1 w - - 0 10",
    "r1bq1rk1/2p2pp1/p1np1n1p/1pb1p3/4P3/1BPP1N2/PP1N1PPP/R1BQR1K1 b - - 1 10",
    "r1bqr1k1/2p2pp1/p1np1n1p/1pb1p3/4P3/1BPP1N2/PP1N1PPP/R1BQR1K1 w - - 2 11",
    "r1bqr1k1/2p2pp1/p1np1n1p/1pb1p3/4P3/1BPP1N1P/PP1N1PP1/R1BQR1K1 b - - 0 11",
    "r1bqr1k1/2p2pp1/pbnp1n1p/1p2p3/4P3/1BPP1N1P/PP1N1PP1/R1BQR1K1 w - - 1 12",
    "r1bqr1k1/2p2pp1/pbnp1n1p/1p2p3/4P3/1BPP1N1P/PP3PP1/R1BQRNK1 b - - 2 12",
    "r2qr1k1/2p2pp1/pbnpbn1p/1p2p3/4P3/1BPP1N1P/PP3PP1/R1BQRNK1 w - - 3 13",
    "r2qr1k1/2p2pp1/pbnpBn1p/1p2p3/4P3/2PP1N1P/PP3PP1/R1BQRNK1 b - - 0 13",
    "r2q2k1/2p2pp1/pbnprn1p/1p2p3/4P3/2PP1N1P/PP3PP1/R1BQRNK1 w - - 0 14",
    "r2q2k1/2p2pp1/pbnprn1p/1p2p3/4P3/2PP1NNP/PP3PP1/R1BQR1K1 b - - 1 14",
    "r2q2k1/2p2pp1/pbn1rn1p/1p1pp3/4P3/2PP1NNP/PP3PP1/R1BQR1K1 w - - 0 15",
    "r2q2k1/2p2pp1/pbn1rn1p/1p1pp3/4P3/2PP1NNP/PP2QPP1/R1B1R1K1 b - - 1 15",
    "r5k1/2pq1pp1/pbn1rn1p/1p1pp3/4P3/2PP1NNP/PP2QPP1/R1B1R1K1 w - - 2 16",
    "r5k1/2pq1pp1/pbn1rn1p/1p1pp3/P3P3/2PP1NNP/1P2QPP1/R1B1R1K1 b - - 0 16",
    "r5k1/2pq1pp1/pbn1rn1p/3pp3/Pp2P3/2PP1NNP/1P2QPP1/R1B1R1K1 w - - 0 17",
    "r5k1/2pq1pp1/pbn1rn1p/3pp3/Pp2P2N/2PP2NP/1P2QPP1/R1B1R1K1 b - - 1 17",
    "r5k1/2pq1pp1/pbn1rn1p/3pp3/P3P2N/2pP2NP/1P2QPP1/R1B1R1K1 w - - 0 18",
    "r5k1/2pq1pp1/pbn1rn1p/3pp3/P3P2N/2PP2NP/4QPP1/R1B1R1K1 b - - 0 18",
    "3r2k1/2pq1pp1/pbn1rn1p/3pp3/P3P2N/2PP2NP/4QPP1/R1B1R1K1 w - - 1 19",
    "3r2k1/2pq1pp1/pbn1rn1p/3ppN2/P3P3/2PP2NP/4QPP1/R1B1R1K1 b - - 2 19",
    "3r2k1/2pq1pp1/pbn1rn1p/4pN2/P3p3/2PP2NP/4QPP1/R1B1R1K1 w - - 0 20",
    "3r2k1/2pq1pp1/pbn1rn1p/4pN2/P3P3/2P3NP/4QPP1/R1B1R1K1 b - - 0 20",
    "3r2k1/2p2pp1/pbn1rn1p/4pN2/P3P3/2Pq2NP/4QPP1/R1B1R1K1 w - - 1 21",
    "3r2k1/2p2pp1/pbn1rn1p/4pN2/P3P3/2PQ2NP/5PP1/R1B1R1K1 b - - 0 21",
    "6k1/2p2pp1/pbn1rn1p/4pN2/P3P3/2Pr2NP/5PP1/R1B1R1K1 w - - 0 22",
    "6k1/2p2pp1/pbn1rn1p/4pN2/P3P3/2Pr2NP/1B3PP1/R3R1K1 b - - 1 22",
    "6k1/2p2p2/pbn1rnpp/4pN2/P3P3/2Pr2NP/1B3PP1/R3R1K1 w - - 0 23",
    "6k1/2p2p2/pbn1rnpN/4p3/P3P3/2Pr2NP/1B3PP1/R3R1K1 b - - 0 23",
    "8/2p2pk1/pbn1rnpN/4p3/P3P3/2Pr2NP/1B3PP1/R3R1K1 w - - 1 24",
    "8/2p2pk1/pbn1rnp1/4p3/P3P1N1/2Pr2NP/1B3PP1/R3R1K1 b - - 2 24",
    "8/2p2pk1/pbn1r1p1/4p3/P3P1n1/2Pr2NP/1B3PP1/R3R1K1 w - - 0 25",
    "8/2p2pk1/pbn1r1p1/4p3/P3P1P1/2Pr2N1/1B3PP1/R3R1K1 b - - 0 25",
    "8/2p2pk1/pbn1r1p1/4p3/P3P1P1/2P3r1/1B3PP1/R3R1K1 w - - 0 26",
    "8/2p2pk1/pbn1r1p1/P3p3/4P1P1/2P3r1/1B3PP1/R3R1K1 b - - 0 26",
    "8/b1p2pk1/p1n1r1p1/P3p3/4P1P1/2P3r1/1B3PP1/R3R1K1 w - - 1 27",
    "8/b1p2pk1/p1n1r1p1/P3p3/4P1P1/2P3r1/1B3PP1/3RR1K1 b - - 2 27",
    "8/b1p2pk1/p1nr2p1/P3p3/4P1P1/2P3r1/1B3PP1/3RR1K1 w - - 3 28",
    "8/b1p2pk1/p1nR2p1/P3p3/4P1P1/2P3r1/1B3PP1/4R1K1 b - - 0 28",
    "8/b4pk1/p1np2p1/P3p3/4P1P1/2P3r1/1B3PP1/4R1K1 w - - 0 29",
    "8/b4pk1/p1np2p1/P3p3/4P1P1/2P3r1/1B3PP1/3R2K1 b - - 1 29",
    "8/b4pk1/p1np2p1/P3p3/4P1r1/2P5/1B3PP1/3R2K1 w - - 0 30",
    "8/b4pk1/p1nR2p1/P3p3/4P1r1/2P5/1B3PP1/6K1 b - - 0 30",
    "8/b4pk1/p2R2p1/n3p3/4P1r1/2P5/1B3PP1/6K1 w - - 0 31",
    "8/b4pk1/R5p1/n3p3/4P1r1/2P5/1B3PP1/6K1 b - - 0 31",
    "8/b4pk1/R5p1/4p3/2n1P1r1/2P5/1B3PP1/6K1 w - - 1 32",
    "8/b4pk1/R5p1/4p3/2n1P1r1/2P5/5PP1/2B3K1 b - - 2 32",
    "8/b4pk1/R5p1/4p3/2n1r3/2P5/5PP1/2B3K1 w - - 0 33",
    "8/b4pk1/R5p1/4p3/2n1r3/2P5/5PP1/2B2K2 b - - 1 33",
    "8/5pk1/Rb4p1/4p3/2n1r3/2P5/5PP1/2B2K2 w - - 2 34",
    "8/5pk1/Rb4p1/4p3/2n1r3/2P2P2/6P1/2B2K2 b - - 0 34",
    "8/5pk1/Rb4p1/4p3/2n4r/2P2P2/6P1/2B2K2 w - - 1 35",
    "8/5pk1/Rb4p1/4p3/2n4r/2P2P2/4K1P1/2B5 b - - 2 35",
    "7r/5pk1/Rb4p1/4p3/2n5/2P2P2/4K1P1/2B5 w - - 3 36",
    "7r/5pk1/Rb4p1/4p3/2n5/2PK1P2/6P1/2B5 b - - 4 36",
    "2r5/5pk1/Rb4p1/4p3/2n5/2PK1P2/6P1/2B5 w - - 5 37",
    "2r5/5pk1/Rb4p1/4p1B1/2n5/2PK1P2/6P1/8 b - - 6 37",
    "2r5/6k1/Rb3pp1/4p1B1/2n5/2PK1P2/6P1/8 w - - 0 38",
    "2r5/6k1/Rb3pp1/4p3/2n5/2PK1P2/6P1/2B5 b - - 1 38",
    "2r5/6k1/Rb4p1/4pp2/2n5/2PK1P2/6P1/2B5 w - - 0 39",
    "2r5/6k1/Rb4p1/4ppB1/2n5/2PK1P2/6P1/8 b - - 1 39",
    "8/2r3k1/Rb4p1/4ppB1/2n5/2PK1P2/6P1/8 w - - 2 40",
    "R7/2r3k1/1b4p1/4ppB1/2n5/2PK1P2/6P1/8 b - - 3 40",
    "R7/2r3k1/1b1n2p1/4ppB1/8/2PK1P2/6P1/8 w - - 4 41",
    "3R4/2r3k1/1b1n2p1/4ppB1/8/2PK1P2/6P1/8 b - - 5 41",
    "3R4/2r3k1/1b1n2p1/5pB1/4p3/2PK1P2/6P1/8 w - - 0 42",
    "3R4/2r3k1/1b1n2p1/5pB1/4P3/2PK4/6P1/8 b - - 0 42",
    "3R4/2r3k1/1b4p1/5pB1/4n3/2PK4/6P1/8 w - - 0 43",
    "3R4/2r3k1/1b4p1/5p2/4nB2/2PK4/6P1/8 b - - 1 43",
    "3R4/6k1/1b4p1/5p2/4nB2/2rK4/6P1/8 w - - 0 44",
  ];
  const games = [
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
    "vs Lorem Impusm",
  ];
  const [game, setGame] = useState(new Chess());
  const [currentMove, setCurrentMove] = useState(0);

  useEffect(() => {
    setGame(new Chess(pgn[currentMove]));
  }, [currentMove]);

  const handleMoveNext = () => {
    if (currentMove >= 0) setCurrentMove(currentMove + 1);
    if (currentMove === pgn.length) setCurrentMove(0);
  };

  const handleMovePrev = () => {
    if (currentMove > 0) setCurrentMove(currentMove - 1);
  };

  return (
    <>
      <h6 className="flex items-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-slate-600 px-4 font-raleway text-gray-200 font-extrabold text-3xl mt-1 lg:text-4xl lg:-mb-10">
        SOME GAMES{" "}
        <i className="bx bx-chevrons-right text-5xl text-yellow-600"></i>
      </h6>
      <main className="md:flex flex-row-reverse items-center lg:pb-20">
        <div id="chessboard-container" className="" >
          <Chessboard
            id="CustomStyledBoard"
            position={game.fen()}
            draggable={false}
            animationDuration={200}
            customDarkSquareStyle={{ backgroundColor: "rgb(51, 50, 50)" }}
            customLightSquareStyle={{ backgroundColor: "#ca870c" }}
          />
          <div className="btns-chessboard">
            <button onClick={handleMovePrev}>
              <i className="bx bx-left-arrow"></i>
            </button>
            <button onClick={handleMoveNext}>
              <i className="bx bx-right-arrow"></i>
            </button>
          </div>
        </div>
        <section className="w-full flex flex-col justify-center items-center md:w-auto lg:ml-36">
          {games.map((game, index) => (
            <button
              id="btn-game"
              key={index}
              className=" min-w-64 z-100 mb-4 inline-flex h-8 items-center justify-center font-semibold text-neutral-500 md:text-lg md:w-64 md:h-8"
            >
              {game}
            </button>
          ))}
        </section>
      </main>
    </>
  );
}

export default Chessboard1;
