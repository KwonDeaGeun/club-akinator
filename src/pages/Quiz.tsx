import { useQuizStore } from "../store/useQuizStore";
import { QUIZ_QUESTIONS } from "../constants/questions";
import mascotImg from "../assets/mascot.png";

export default function Quiz() {
  const { currentStepIndex, setAnswer, prevQuestion, history } = useQuizStore();
  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];

  const progressPercent = Math.min(((history.length + 1) / 10) * 100, 100);

  return (
    <div className="flex-1 flex flex-col p-6 animate-in fade-in zoom-in-95 duration-300">
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
            className="h-full bg-primary-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <img
          src={mascotImg}
          alt="질문하는 마스코트"
          className="w-24 h-auto object-contain mb-[-12px] z-10"
        />

        <div className="bg-white w-full border-2 border-primary-100 rounded-3xl p-8 shadow-sm relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0 h-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>

          <h2 className="text-2xl font-bold text-slate-800 leading-snug break-keep">
            {currentQuestion.text}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 pb-6">
        <button
          onClick={() => setAnswer(currentQuestion.id, 2)}
          className="w-full bg-primary-50 text-primary-600 border border-primary-200 py-4 rounded-2xl font-bold text-lg active:bg-primary-100"
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
