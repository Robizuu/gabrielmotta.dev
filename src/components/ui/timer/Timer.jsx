import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setTimeLeft(180);
    setIsRunning(false);
  };

  return (
    <div className="fixed top-20 right-6 flex flex-col items-center justify-center gap-4 bg-azul-400 dark:bg-cinza-100 text-branco-100 p-6 rounded-2xl shadow-lg w-70">
      <h2 className="text-xl font-semibold">Cronômetro</h2>
      <p className="text-4xl font-mono">{formatTime(timeLeft)}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning(true)}
          className="px-1 py-1 bg-green-600 rounded-xl hover:bg-green-700 transition"
        >
          Iniciar
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-1 py-1 bg-yellow-600 rounded-xl hover:bg-yellow-700 transition"
        >
          Pausar
        </button>
        <button
          onClick={resetTimer}
          className="px-1 py-1 bg-red-600 rounded-xl hover:bg-red-700 transition"
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
