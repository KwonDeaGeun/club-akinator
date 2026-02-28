import { useQuizStore } from "../store/useQuizStore";
import { QUIZ_QUESTIONS } from "../constants/questions";

export default function Quiz() {
  const { currentStepIndex, setAnswer, prevQuestion, history } = useQuizStore();
  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];

  // 진행률 계산 (총 16문항 기준, 현재 지나온 히스토리 길이로 대략적 진행도 표시)
  const progressPercent = Math.min(((history.length + 1) / 10) * 100, 100);

  return (
    <div className="flex-1 flex flex-col p-6 animate-in fade-in zoom-in-95 duration-300">
      {/* 헤더 & 프로그레스 바 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 h-8">
          {history.length > 0 ? (
            <button
              onClick={prevQuestion}
              className="text-slate-400 font-semibold p-2 -ml-2"
            >
              ← 뒤로
            </button>
          ) : (
            <div />
          )}
        </div>
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 질문 영역 */}
      <div className="flex-1 flex items-center justify-center py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 text-center leading-snug break-keep">
          {currentQuestion.text}
        </h2>
      </div>

      {/* 버튼 영역 */}
      <div className="flex flex-col gap-3 pb-6">
        <button
          onClick={() => setAnswer(currentQuestion.id, 2)}
          className="w-full bg-blue-50 text-blue-600 border border-blue-200 py-4 rounded-2xl font-bold text-lg active:bg-blue-100"
        >
          예, 맞습니다
        </button>
        <button
          onClick={() => setAnswer(currentQuestion.id, 0)}
          className="w-full bg-slate-50 text-slate-600 border border-slate-200 py-4 rounded-2xl font-bold text-lg active:bg-slate-100"
        >
          잘 모르겠습니다
        </button>
        <button
          onClick={() => setAnswer(currentQuestion.id, -2)}
          className="w-full bg-red-50 text-red-600 border border-red-200 py-4 rounded-2xl font-bold text-lg active:bg-red-100"
        >
          아닙니다
        </button>
      </div>
    </div>
  );
}
