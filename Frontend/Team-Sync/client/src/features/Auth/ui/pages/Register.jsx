import React, { useMemo, useState } from 'react';
import { User, Mail, Lock, Sparkles, Check, Network } from 'lucide-react';
import { authHook } from '../../hooks/useAuthHook';

// ---- deterministic "random" so the neural artwork looks the same on every render ----
function seededRandom(seed) {
  let t = seed;
  return function () {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function useNeuralArt() {
  return useMemo(() => {
    const rand = seededRandom(42);
    const cx = 300;
    const cy = 360;
    const branches = [];
    const nodes = [];
    const branchCount = 34;

    for (let i = 0; i < branchCount; i++) {
      const angle = (Math.PI * 2 * i) / branchCount + (rand() - 0.5) * 0.35;
      const len = 110 + rand() * 190;
      const x2 = cx + Math.cos(angle) * len;
      const y2 = cy + Math.sin(angle) * len;
      const opacity = 0.15 + rand() * 0.35;
      branches.push({ x1: cx, y1: cy, x2, y2, opacity, width: 0.6 + rand() * 1 });

      // secondary smaller offshoots
      const offshoots = 1 + Math.floor(rand() * 2);
      for (let j = 0; j < offshoots; j++) {
        const t = 0.35 + rand() * 0.5;
        const bx = cx + (x2 - cx) * t;
        const by = cy + (y2 - cy) * t;
        const subAngle = angle + (rand() - 0.5) * 1.4;
        const subLen = 30 + rand() * 70;
        const bx2 = bx + Math.cos(subAngle) * subLen;
        const by2 = by + Math.sin(subAngle) * subLen;
        branches.push({
          x1: bx,
          y1: by,
          x2: bx2,
          y2: by2,
          opacity: 0.1 + rand() * 0.25,
          width: 0.4 + rand() * 0.6,
        });
      }

      if (rand() > 0.55) {
        nodes.push({ x: x2, y: y2, r: 1.4 + rand() * 2.2, pink: rand() > 0.55 });
      }
    }

    return { branches, nodes, cx, cy };
  }, []);
}

const Register = () => { 


  const [agreed, setAgreed] = useState(false);
  const art = useNeuralArt();

  const { navigate,
         handleSubmit,
         register,
         errors,
         handleRegisterSubmit} = authHook()



 

 




  return (
    <div className="min-h-screen flex flex-col bg-black font-sans">
      <style>{`
        @keyframes slowSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes softPulse { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-1 { animation: fadeInUp 0.6s ease-out both; }
        .fade-in-2 { animation: fadeInUp 0.6s ease-out 0.08s both; }
        .fade-in-3 { animation: fadeInUp 0.6s ease-out 0.16s both; }
        .fade-in-4 { animation: fadeInUp 0.6s ease-out 0.24s both; }
      `}</style>

      <div className="flex-1 grid md:grid-cols-2">
        {/* LEFT PANEL */}
        <div className="relative hidden md:flex flex-col justify-between overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/40 to-black p-10">
          {/* ambient neural artwork */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-90">
            <svg
              viewBox="0 0 600 700"
              className="w-[140%] h-[140%]"
              style={{ animation: 'slowSpin 160s linear infinite' }}
            >
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={art.cx} cy={art.cy} r="260" fill="url(#glow)" />
              {art.branches.map((b, i) => (
                <line
                  key={i}
                  x1={b.x1}
                  y1={b.y1}
                  x2={b.x2}
                  y2={b.y2}
                  stroke="#93c5fd"
                  strokeWidth={b.width}
                  strokeOpacity={b.opacity}
                  strokeLinecap="round"
                />
              ))}
              {art.nodes.map((n, i) => (
                <circle
                  key={i}
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={n.pink ? '#f472b6' : '#93c5fd'}
                  style={{ animation: `softPulse ${3 + (i % 4)}s ease-in-out infinite` }}
                />
              ))}
            </svg>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* brand top-left */}
          <span className="relative z-10 text-lg font-bold text-white tracking-tight">Synthetix AI</span>

          {/* bottom copy */}
          <div className="relative z-10 max-w-md">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-300">
              <Sparkles size={14} className="text-violet-300" />
              NEXT-GEN INTELLIGENCE
            </div>
            <h1 className="text-4xl font-bold leading-tight text-white tracking-tight mb-4">
              Accelerate your team&apos;s intelligence.
            </h1>
            <p className="text-slate-400 leading-relaxed mb-8">
              Connect your enterprise data to our specialized AI models and unlock unparalleled
              strategic insights in seconds.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-slate-500">Uptime SLA</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">ISO</div>
                <div className="text-sm text-slate-500">27001 Certified</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — FORM */}
        <div className="flex items-center justify-center bg-zinc-950 px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">
            <span className="md:hidden block text-lg font-bold text-white mb-8">Synthetix AI</span>

            <h2 className="fade-in-1 text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Create your account
            </h2>
            <p className="fade-in-1 text-slate-400 mb-8">
              Experience the future of collaborative data intelligence.
            </p>

            <form
              className="space-y-5"
              onSubmit={handleSubmit(handleRegisterSubmit)}
            >
              {/* Full Name */}
              <div className="fade-in-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 py-3.5 pl-12 pr-4 text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40"
                    {...register('fullName',{
                        required:true,
                        message:"Full Name is required",
                        minLength:{
                            value:3,
                            message:'Minimum 3 character is required'
                        },
                        maxLength:{
                            value:15,
                            message:'Maximum 15 character is Allowed'
                        },
                    })}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="fade-in-2">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    id="email"
                    type="email"
                    
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 py-3.5 pl-12 pr-4 text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40"
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
              </div>

              {/* Password */}
              <div className="fade-in-3">
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                  <input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 py-3.5 pl-12 pr-4 text-white placeholder-slate-600 outline-none transition-colors focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40"
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

    
              </div>

              {/* Terms */}
              <label className="fade-in-3 flex items-start gap-3 cursor-pointer select-none pt-1">
                <span
                  onClick={() => setAgreed((v) => !v)}
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-colors ${
                    agreed ? 'border-violet-500 bg-violet-500' : 'border-zinc-700 bg-zinc-900'
                  }`}
                >
                  {agreed && <Check size={13} className="text-white" strokeWidth={3} />}
                </span>
                <span className="text-sm text-slate-400">
                  I agree to the{' '}
                  <span className="text-violet-400 hover:text-violet-300 hover:underline">
                    Terms of Service
                  </span>{' '}
                  and{' '}
                  <span className="text-violet-400 hover:text-violet-300 hover:underline">
                    Privacy Policy
                  </span>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                // disabled={!canSubmit}
                className="fade-in-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-purple-300 py-3.5 font-semibold text-violet-950 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="fade-in-4 mt-8 mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-zinc-800" />
              <span className="text-xs font-medium tracking-widest text-slate-500">OR CONTINUE WITH</span>
              <div className="h-px flex-1 bg-zinc-800" />
            </div>

            {/* Social buttons */}
            <div className="fade-in-4 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-zinc-900">
                <svg width="16" height="16" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
                  <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z" />
                  <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.6 35.5 26.9 36.5 24 36.5c-5.3 0-9.8-3.4-11.4-8.1l-6.6 5.1C9.5 39.6 16.2 44 24 44z" />
                  <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3-3.2 5.3-6 6.7l6.6 5.4C39.6 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-zinc-900">
                <Network size={16} className="text-violet-400" />
                SSO
              </button>
            </div>

            <p className="fade-in-4 mt-8 text-center text-sm text-slate-400">
              Already have an account?{' '}
              <span  onClick={()=> navigate("/")} className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300">
                Log In
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-black px-6 py-6 sm:px-10">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <span className="text-base font-bold text-white">Synthetix AI</span>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="cursor-pointer hover:text-slate-300">Privacy Policy</span>
            <span className="cursor-pointer hover:text-slate-300">Terms of Service</span>
            <span className="cursor-pointer hover:text-slate-300">Security</span>
            <span className="cursor-pointer hover:text-slate-300">System Status</span>
          </nav>
          <span className="text-sm text-slate-600">© 2024 Synthetix AI. Enterprise Intelligence Platforms.</span>
        </div>
      </footer>
    </div>
  );
};

export default Register;