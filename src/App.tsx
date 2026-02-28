import { useQuizStore } from "./store/useQuizStore";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

export default function App() {
  const { step } = useQuizStore();

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center">
      <div className="w-full max-w-md h-[100dvh] bg-white shadow-xl relative overflow-hidden flex flex-col">
        {step === "intro" && <Home />}
        {step === "quiz" && <Quiz />}
        {step === "result" && <Result />}
      </div>
    </div>
  );
}
