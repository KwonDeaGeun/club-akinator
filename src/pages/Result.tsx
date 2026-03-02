import { useMemo } from "react";
import { useQuizStore } from "../store/useQuizStore";
import { clubsData } from "../constants/clubsData";
import mascotImg from "../assets/mascot.png";

export default function Result() {
  const { resultClubs, resetQuiz, prevQuestion } = useQuizStore();

  const matchedClubs = useMemo(() => {
    return clubsData.filter((club) => resultClubs.includes(club.name));
  }, [resultClubs]);

  return (
    <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 pb-32">
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={prevQuestion}
            className="text-slate-400 font-semibold p-2 -ml-2"
          >
            ← 이전 질문
          </button>
        </div>

        <h2 className="text-xl font-bold text-center text-slate-500 mt-2 mb-2">
          위비가 찾은 동아리들!
        </h2>

        <div className="flex flex-col gap-6 relative z-0 mt-20 mb-8">
          {matchedClubs.map((club, index) => (
            <div key={club.id} className="relative">
              {index === 0 && (
                <img
                  src={mascotImg}
                  className="w-32 h-auto object-contain absolute -top-16 left-1/2 -translate-x-1/2 z-10"
                />
              )}
              <div
                className={`bg-white ${index === 0 ? "pt-16" : "pt-8"} pb-8 px-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center animate-in slide-in-from-bottom-8 duration-500 relative z-0`}
              >
                <div className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold mb-4">
                  {club.category} 분과
                </div>
                <h1 className="text-3xl font-black text-slate-800 mb-2 break-keep">
                  {club.name}
                </h1>
                <p className="text-slate-500 mb-6 font-medium text-sm">
                  📍 {club.location}
                </p>
                <p className="text-slate-700 bg-slate-50 p-4 rounded-2xl w-full text-sm break-keep leading-relaxed">
                  "{club.description}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {matchedClubs.length === 0 && (
          <div className="text-center text-slate-400 my-10">
            해당하는 동아리를 찾지 못했어요 😢
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-50 via-slate-50 to-transparent pt-12 z-20 pointer-events-none">
        <button
          onClick={resetQuiz}
          className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl text-lg active:scale-95 transition-transform shadow-xl pointer-events-auto"
        >
          처음부터 다시하기
        </button>
      </div>
    </div>
  );
}
