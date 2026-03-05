import { useQuizStore } from "../store/useQuizStore";
import mascotImg from "../assets/mascot.png";

export default function Home() {
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
      <img
        src={mascotImg}
        alt="총동아리 마스코트"
        className="w-40 h-auto object-contain mb-6"
      />

      <h1 className="text-4xl font-black text-primary-500 mb-4 tracking-tight">
        동아리
        <br />
        아키네이터
      </h1>
      <p className="text-slate-600 mb-12 text-lg font-medium">
        위비가 당신에게 딱 맞는
        <br />
        동아리를 찾아줄게요!
      </p>
      <button
        onClick={() => {
          resetQuiz();
          useQuizStore.setState({ step: "quiz" });
        }}
        className="w-full bg-primary-500 text-white font-bold py-4 rounded-2xl text-xl shadow-lg active:scale-95 transition-transform"
      >
        테스트 시작하기
      </button>
    </div>
  );
}
