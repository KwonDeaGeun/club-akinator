import { useMemo } from "react";
import { useQuizStore } from "../store/useQuizStore";
import { calculateRecommendations } from "../utils/engine";
import { clubsData } from "../constants/clubsData";

export default function Result() {
  const { answers, resetQuiz } = useQuizStore();

  const topClubs = useMemo(() => {
    // 실제 데이터가 준비되면 dummyClubs 대신 clubsData 를 사용하세요.
    return calculateRecommendations(answers, clubsData);
  }, [answers]);

  const bestMatch = topClubs[0];

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto bg-slate-50">
      <h2 className="text-xl font-bold text-center text-slate-500 mt-8 mb-2">
        당신이 찾는 동아리는...
      </h2>

      {/* 1위 동아리 메인 카드 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center text-center mt-4 mb-8 animate-in slide-in-from-bottom-8 duration-500">
        <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold mb-4">
          {bestMatch?.category} 분과
        </div>
        <h1 className="text-4xl font-black text-slate-800 mb-2">
          {bestMatch?.name}
        </h1>
        <p className="text-slate-500 mb-6 font-medium">
          📍 {bestMatch?.location}
        </p>
        <p className="text-slate-700 bg-slate-50 p-4 rounded-2xl w-full break-keep">
          "{bestMatch?.description}"
        </p>
      </div>

      {/* 2위, 3위 리스트 */}
      {topClubs.length > 1 && (
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-400 mb-3 px-2">
            이런 동아리일 수도 있어요
          </h3>
          <div className="flex flex-col gap-3">
            {topClubs.slice(1, 3).map((club) => (
              <div
                key={club.id}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-bold text-slate-800">{club.name}</h4>
                  <span className="text-xs text-slate-400">
                    {club.location}
                  </span>
                </div>
                <div className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                  {club.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 다시하기 버튼 */}
      <button
        onClick={resetQuiz}
        className="w-full bg-slate-800 text-white font-bold py-4 rounded-2xl text-lg mt-auto active:scale-95 transition-transform"
      >
        처음부터 다시하기
      </button>
    </div>
  );
}
