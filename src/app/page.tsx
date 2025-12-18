"use client";

import { useState } from "react";

export default function Home() {
  const [monthly, setMonthly] = useState(100);
  const [years, setYears] = useState(10);
  const FREE_LIMIT = 10;
  const [isPro, setIsPro] = useState(false);

  const [rate, setRate] = useState(8);

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const totalInvested = monthly * months;

  const futureValue =
    monthly *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white p-6">
      <div className="max-w-md w-full bg-zinc-900 p-6 rounded-2xl shadow-xl space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Time Value Calculator
        </h1>
{isPro && (
  <p className="text-xs text-emerald-400 text-center">
    Pro mode enabled ✓
  </p>
)}

       <p className="text-sm text-zinc-400 text-center">
        See how small investments grow over time.
       </p>


        <div className="space-y-3">
          <label className="block text-sm">
            Monthly Investment ($)
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(+e.target.value)}
              className="w-full mt-1 p-2 rounded bg-zinc-800"
            />
          </label>

          <label className="block text-sm">
           Years (Free up to {FREE_LIMIT})
           <input
             type="number"
             value={years}
             onChange={(e) => {
               const value = +e.target.value;
               if (isPro || value <= FREE_LIMIT) setYears(value);
             }}
             className="w-full mt-1 p-2 rounded bg-zinc-800"
           />
         </label>
          {years >= FREE_LIMIT && (
  <p className="text-xs text-amber-400 mt-1 text-center">
    Upgrade to Pro to unlock unlimited years 🚀
  </p>
)}


          <label className="block text-sm">
            Annual Interest (%)
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              className="w-full mt-1 p-2 rounded bg-zinc-800"
            />
          </label>
        </div>

        <div className="text-center mt-4">
          <p className="text-zinc-400 text-sm">Future Value</p>
          <p className="text-2xl font-bold text-emerald-400">
            ${futureValue.toFixed(2)}
          </p>
       <p className="text-xs text-zinc-400 mt-1">
  You invested ${totalInvested.toFixed(2)}
</p>

        </div>
        <button
  onClick={() => {
    setMonthly(100);
    setYears(10);
    setRate(8);
  }}
  className="w-full mt-3 p-2 rounded bg-zinc-800 text-sm hover:bg-zinc-700"
>
<div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-black text-sm text-center">
  <strong>Pro version:</strong> unlimited years, deeper insights, export results.
</div>
<button
  onClick={() => setIsPro(true)}
  className="w-full mt-2 p-2 rounded bg-emerald-500 text-black text-sm font-semibold hover:bg-emerald-400"
>
  Unlock Pro (demo)
</button>

  Reset values
</button>

      </div>
    </main>
  );
}
