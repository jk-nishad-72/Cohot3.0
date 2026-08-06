import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'motion/react'
import {
  LayoutDashboard,
  UploadCloud,
  ListMusic,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  Music2,
  Heart,
  PlayCircle,
  Users,
} from 'lucide-react'

/* ---------------------------------------------------------------
   Font note: this design pairs "Space Grotesk" (display / wordmark)
   with "Inter" (body). Add once to index.html <head>, or drop the
   @import below into your global CSS instead of inline here:

   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
------------------------------------------------------------------ */

// ---- mock data — swap for real API/store data ----
const artist = { name: 'Nova Reyes', handle: '@novareyes', avatar: null }

const stats = [
  { label: 'Total Songs', value: '24', icon: Music2, trend: '+3 this month' },
  { label: 'Total Likes', value: '18.2K', icon: Heart, trend: '+412 this week' },
  { label: 'Total Plays', value: '392K', icon: PlayCircle, trend: '+9.8K this week' },
  { label: 'Followers', value: '6,104', icon: Users, trend: '+58 this week' },
]

const weeklyPlays = [
  { day: 'Mon', plays: 4200 },
  { day: 'Tue', plays: 5100 },
  { day: 'Wed', plays: 3800 },
  { day: 'Thu', plays: 6700 },
  { day: 'Fri', plays: 8900 },
  { day: 'Sat', plays: 9600 },
  { day: 'Sun', plays: 7200 },
]

const recentTracks = [
  { title: 'Midnight Static', plays: '84.2K', likes: '3.1K', duration: '3:42' },
  { title: 'Glass Horizon', plays: '61.7K', likes: '2.4K', duration: '4:05' },
  { title: 'Low Light', plays: '45.9K', likes: '1.8K', duration: '2:58' },
  { title: 'Paper Tide', plays: '38.3K', likes: '1.2K', duration: '3:21' },
]

const navItems = [
  { to: '/artist-dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/upload-music', label: 'Upload Music', icon: UploadCloud },
  { to: '/profile', label: 'Manage Music', icon: ListMusic },
]

// small equalizer mark used as the signature motif (logo + accents)
const EqBars = ({ className = '', bars = 4, active = true }) => (
  <div className={`flex items-end gap-[3px] ${className}`}>
    {Array.from({ length: bars }).map((_, i) => (
      <motion.span
        key={i}
        className="w-[3px] rounded-full bg-[#D4A15C]"
        style={{ height: 14 }}
        animate={
          active
            ? { scaleY: [0.35, 1, 0.5, 0.9, 0.35] }
            : { scaleY: 0.35 }
        }
        transition={{
          duration: 1.1 + i * 0.15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: i * 0.12,
        }}
      />
    ))}
  </div>
)

const NavItem = ({ to, label, icon: Icon, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? 'bg-[#D4A15C]/15 text-[#F5F1EA]'
          : 'text-[#9A93A6] hover:bg-white/5 hover:text-[#F5F1EA]'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span
          className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${
            isActive ? 'bg-[#D4A15C] text-[#0D0B10]' : 'bg-white/5 text-[#9A93A6] group-hover:text-[#F5F1EA]'
          }`}
        >
          <Icon size={16} strokeWidth={2.25} />
        </span>
        {label}
      </>
    )}
  </NavLink>
)

const SidebarContent = ({ onNavigate }) => (
  <div className="flex h-full flex-col">
    <div className="flex items-center gap-2.5 px-2 pb-8 pt-1">
      <EqBars bars={4} />
      <span
        className="text-xl font-bold tracking-tight text-[#F5F1EA]"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        vibe
      </span>
    </div>

    <nav className="flex flex-1 flex-col gap-1.5">
      {navItems.map((item) => (
        <NavItem key={item.to} {...item} onClick={onNavigate} />
      ))}
    </nav>

    <div className="mt-6 border-t border-white/10 pt-4">
      <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#D4A15C] text-sm font-semibold text-[#0D0B10]">
          {artist.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-[#F5F1EA]">{artist.name}</p>
          <p className="truncate text-xs text-[#9A93A6]">{artist.handle}</p>
        </div>
      </div>
      <button
        type="button"
        className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#9A93A6] transition-colors hover:bg-[#FF3D7F]/10 hover:text-[#FF3D7F]"
      >
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5">
          <LogOut size={16} strokeWidth={2.25} />
        </span>
        Log out
      </button>
    </div>
  </div>
)

const StatCard = ({ label, value, icon: Icon, trend, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
    className="rounded-2xl border border-white/10 bg-[#17141C] p-5"
  >
    <div className="flex items-center justify-between">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#D4A15C]/15 text-[#D4A15C]">
        <Icon size={18} strokeWidth={2.25} />
      </span>
      {label === 'Total Plays' && <EqBars bars={3} />}
    </div>
    <p className="mt-4 text-2xl font-bold text-[#F5F1EA]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {value}
    </p>
    <p className="mt-1 text-xs font-medium text-[#9A93A6]">{label}</p>
    <p className="mt-2 text-[11px] text-[#D4A15C]">{trend}</p>
  </motion.div>
)

const WeeklyChart = () => {
  const max = Math.max(...weeklyPlays.map((d) => d.plays))
  return (
    <div className="rounded-2xl border border-white/10 bg-[#17141C] p-5 lg:p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#F5F1EA]">Weekly plays</h2>
          <p className="text-xs text-[#9A93A6]">Streams across all tracks, last 7 days</p>
        </div>
        <span className="rounded-full bg-[#FF3D7F]/10 px-2.5 py-1 text-[11px] font-medium text-[#FF3D7F]">
          Peak: Sat
        </span>
      </div>
      <div className="flex h-40 items-end justify-between gap-2 sm:gap-4">
        {weeklyPlays.map((d, i) => (
          <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
              style={{ transformOrigin: 'bottom', height: `${(d.plays / max) * 100}%` }}
              className={`w-full rounded-t-md ${
                d.day === 'Sat' ? 'bg-[#FF3D7F]' : 'bg-[#D4A15C]/70'
              }`}
            />
            <span className="text-[11px] text-[#9A93A6]">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const TrackRow = ({ track, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, delay: index * 0.06 }}
    className="flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-white/5"
  >
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#D4A15C]/15 text-[#D4A15C]">
      <Music2 size={16} strokeWidth={2.25} />
    </span>
    <div className="min-w-0 flex-1">
      <p className="truncate text-sm font-medium text-[#F5F1EA]">{track.title}</p>
      <p className="text-xs text-[#9A93A6]">{track.duration}</p>
    </div>
    <div className="hidden text-right sm:block">
      <p className="text-xs font-medium text-[#F5F1EA]">{track.plays}</p>
      <p className="text-[11px] text-[#9A93A6]">plays</p>
    </div>
    <div className="flex items-center gap-1 text-[#FF3D7F]">
      <Heart size={14} fill="currentColor" />
      <span className="text-xs font-medium text-[#F5F1EA]">{track.likes}</span>
    </div>
  </motion.div>
)

const ArtiestDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div
      className="min-h-screen bg-[#0D0B10] text-[#F5F1EA]"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <div className="mx-auto flex max-w-[1440px]">
        {/* ---- Sidebar: desktop ---- */}
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-white/10 bg-[#0D0B10] p-5 lg:flex">
          <SidebarContent />
        </aside>

        {/* ---- Sidebar: mobile drawer ---- */}
        <AnimatePresence>
          {drawerOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setDrawerOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              />
              <motion.aside
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                className="fixed inset-y-0 left-0 z-50 w-72 border-r border-white/10 bg-[#0D0B10] p-5 lg:hidden"
              >
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="absolute right-4 top-5 grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-[#9A93A6]"
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
                <SidebarContent onNavigate={() => setDrawerOpen(false)} />
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* ---- Main content ---- */}
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          {/* top bar */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#17141C] text-[#F5F1EA] lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
              <div>
                <h1 className="text-lg font-bold sm:text-xl" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  Welcome back, {artist.name.split(' ')[0]}
                </h1>
                <p className="text-xs text-[#9A93A6] sm:text-sm">Here's how your music is doing.</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hidden h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#17141C] text-[#9A93A6] hover:text-[#F5F1EA] sm:grid"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-[#17141C] text-[#9A93A6] hover:text-[#F5F1EA]"
                aria-label="Notifications"
              >
                <Bell size={16} />
              </button>
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#D4A15C] text-sm font-semibold text-[#0D0B10]">
                {artist.name.split(' ').map((n) => n[0]).join('')}
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} index={i} />
            ))}
          </div>

          {/* chart + recent tracks */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
            <WeeklyChart />

            <div className="rounded-2xl border border-white/10 bg-[#17141C] p-5 lg:p-6">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-[#F5F1EA]">Recent tracks</h2>
                <span className="text-xs text-[#9A93A6]">{recentTracks.length} songs</span>
              </div>
              <div className="flex flex-col divide-y divide-white/5">
                {recentTracks.map((t, i) => (
                  <TrackRow key={t.title} track={t} index={i} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ArtiestDashboard