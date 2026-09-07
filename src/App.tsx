export default function App() {
  return (
    <main className="hero relative h-screen w-full overflow-hidden bg-black font-serif">
      <video autoPlay muted loop playsInline className="hero-video absolute inset-0 h-full w-full object-cover" aria-hidden="true">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260806_134653_2b70d062-3521-429b-a824-8d9f98de488a.mp4" type="video/mp4" />
      </video>
      <div className="hero-content relative z-10 flex h-full w-full flex-col">
        <div className="flex w-full justify-center px-4 pt-4 sm:px-6 sm:pt-6">
          <nav aria-label="Main navigation" className="flex w-full max-w-4xl items-center justify-between rounded-2xl bg-black/40 pl-5 pr-2 py-2 backdrop-blur-xl sm:pl-7 sm:pr-2.5 sm:py-2.5">
            <div className="flex items-center gap-2.5">
              <img src="/doweclick-mark.svg" width="28" height="28" className="h-7 w-7 shrink-0" alt="" aria-hidden="true" />
              <span className="text-lg tracking-wide text-white/90 sm:text-xl">DoWeClick</span>
            </div>
            <button type="button" className="hero-cta flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-sans text-xs font-medium tracking-wide text-black transition-all hover:bg-white/90 sm:px-5 sm:py-2.5 sm:text-sm">
              <span className="hero-cta-desktop">Meet Your Companion</span>
              <span className="hero-cta-mobile hidden">Start Chatting</span>
            </button>
          </nav>
        </div>
        <div className="flex flex-col items-center px-6 pt-10 text-center sm:pt-16 lg:pt-24">
          <div className="mb-6 flex items-center gap-2 rounded-full px-4 py-1.5 sm:mb-8 sm:px-5 sm:py-2">
            <span className="font-sans text-xs font-medium tracking-wider text-amber-300 sm:text-sm">AI Companions, Reimagined</span>
          </div>
          <h1 className="hero-headline max-w-4xl text-4xl leading-[0.95] font-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Meet someone who just gets you.
          </h1>
          <p className="hero-description mx-auto mt-5 max-w-xl font-sans text-sm leading-snug font-light text-white/70 sm:mt-7 sm:text-base md:text-lg">
            Choose a personality. Start a conversation. See if you click.
          </p>
        </div>
      </div>
    </main>
  )
}

