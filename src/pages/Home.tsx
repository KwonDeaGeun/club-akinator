import { useQuizStore } from "../store/useQuizStore";

export default function Home() {
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-black text-blue-600 mb-4 tracking-tight">
        동아리
        <br />
        아키네이터
      </h1>
      <p className="text-slate-600 mb-12 text-lg">
        몇 가지 질문만으로
        <br />
        당신이 찾는 동아리를 맞춰볼게요!
      </p>
      <button
        onClick={() => {
          resetQuiz(); // 혹시 모를 잔여 데이터 초기화
          useQuizStore.setState({ step: "quiz" });
        }}
        className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl text-xl shadow-lg active:scale-95 transition-transform"
      >
        시작하기
      </button>
    </div>
  );
}
