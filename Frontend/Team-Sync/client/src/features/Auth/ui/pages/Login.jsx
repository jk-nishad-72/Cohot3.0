import React, { useMemo, useState } from 'react';
import { Network, Cloud, SquareTerminal, LogIn, Check } from 'lucide-react';
import { authHook } from '../../hooks/useAuthHook';

// deterministic pseudo-random so the ambient swirl looks the same every render
function seededRandom(seed) {
  let t = seed;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function useSwirlPaths() {
  return useMemo(() => {
    const rand = seededRandom(7);
    const paths = [];
    const cx = 300;
    const cy = 300;
    for (let i = 0; i < 22; i++) {
      const startAngle = rand() * Math.PI * 2;
      const radius = 40 + rand() * 220;
      const turns = 0.6 + rand() * 1.2;
      const x1 = cx + Math.cos(startAngle) * radius * 0.2;
      const y1 = cy + Math.sin(startAngle) * radius * 0.2;
      const midAngle = startAngle + turns;
      const x2 = cx + Math.cos(midAngle) * radius * 0.7;
      const y2 = cy + Math.sin(midAngle) * radius * 0.7;
      const endAngle = startAngle + turns * 1.8;
      const x3 = cx + Math.cos(endAngle) * radius;
      const y3 = cy + Math.sin(endAngle) * radius;
      paths.push({
        d: `M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`,
        opacity: 0.08 + rand() * 0.18,
        width: 0.5 + rand() * 1,
      });
    }
    return paths;
  }, []);
}

const Login = () => {

  const [staySignedIn, setStaySignedIn] = useState(false);
  const swirls = useSwirlPaths();

    const { 
           navigate,
           handleSubmit,
           register,
           errors,
           handleLoginSubmit,
           } = authHook() 

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 py-16 font-sans">
      <style>{`
        @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-1 { animation: fadeInUp 0.6s ease-out both; }
        .fade-in-2 { animation: fadeInUp 0.6s ease-out 0.08s both; }
        .fade-in-3 { animation: fadeInUp 0.6s ease-out 0.16s both; }
      `}</style>

      {/* ambient background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-violet-900/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-indigo-900/10 blur-3xl" />
        <svg
          viewBox="0 0 600 600"
          className="absolute -right-24 -bottom-24 w-[420px] h-[420px] opacity-70"
          style={{ animation: 'slowSpin 200s linear infinite' }}
        >
          {swirls.map((s, i) => (
            <path
              key={i}
              d={s.d}
              fill="none"
              stroke="#a78bfa"
              strokeWidth={s.width}
              strokeOpacity={s.opacity}
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-8 sm:p-10 shadow-2xl shadow-black/60 backdrop-blur-sm">
          {/* brand */}
          <div className="fade-in-1 flex flex-col items-center text-center mb-8">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 shadow-lg shadow-violet-900/50">
              <Network size={28} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Synthetix AI</h1>
            <p className="mt-1 text-sm text-slate-400">Sign in to your workspace</p>
          </div>

          {/* social buttons */}
          <div className="fade-in-2 grid grid-cols-2 gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 text-xs font-semibold tracking-wide text-slate-200 transition-colors hover:bg-zinc-900">
              <Cloud size={16} />
              GOOGLE
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 py-3 text-xs font-semibold tracking-wide text-slate-200 transition-colors hover:bg-zinc-900">
              <SquareTerminal size={16} />
              GITHUB
            </button>
          </div>

          {/* divider */}
          <div className="fade-in-2 mb-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800" />
            <span className="text-xs text-slate-500">or continue with email</span>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <form
            className="space-y-5"
             onSubmit={handleSubmit(handleLoginSubmit)}
          >
            {/* email */}
            <div className="fade-in-3">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-semibold tracking-wider text-slate-400"
              >
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40"
                {...register('email',{
                    required:true,
                    message:"Email is required",
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:"Invalid email address",
                    }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* password */}
            <div className="fade-in-3">
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-xs font-semibold tracking-wider text-slate-400">
                  PASSWORD
                </label>
                <span className="cursor-pointer text-sm text-violet-400 hover:text-violet-300">
                  Forgot password?
                </span>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3.5 text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40"
                {...register('password',{
                    required:true,
                    message:"Password is required",
                    minLength:{
                        value:8,
                        message:"Minimum 8 character is required"
                    }
                })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* stay signed in */}
            <label className="fade-in-3 flex items-center gap-3 cursor-pointer select-none">
              <span
                onClick={() => setStaySignedIn((v) => !v)}
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-colors ${
                  staySignedIn ? 'border-violet-500 bg-violet-500' : 'border-zinc-700 bg-zinc-900'
                }`}
              >
                {staySignedIn && <Check size={13} className="text-white" strokeWidth={3} />}
              </span>
              <span className="text-sm text-slate-400">Stay signed in</span>
            </label>

            {/* submit */}
            <button
              type="submit"
              className="fade-in-3 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Login
              <LogIn size={17} />
            </button>
          </form>

          <div className="fade-in-3 mt-8 border-t border-zinc-900 pt-6 text-center text-sm text-slate-400">
            Don&apos;t have an account?{' '}
            <span onClick={()=> navigate("/register")} className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300">
              Register 
            </span>
          </div>
        </div>

        <div className="fade-in-3 mt-6 text-center text-sm text-slate-600">
          © 2024 Synthetix AI. Enterprise Intelligence Platforms.
          <div className="mt-2 flex justify-center gap-6">
            <span className="cursor-pointer hover:text-slate-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-400">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;