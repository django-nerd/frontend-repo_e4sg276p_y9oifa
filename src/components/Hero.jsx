import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[68vh] md:min-h-[80vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-16 text-center">
        <p className="text-purple-200/80 text-sm uppercase tracking-[0.25em]">Victus MC Store</p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-200">
          Power up your Minecraft journey
        </h1>
        <p className="mt-5 text-purple-100/80 text-base md:text-lg max-w-2xl mx-auto">
          Unlock ranks, keys and cosmetic upgrades in a sleek, cosmic-themed shop.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#store" className="px-5 py-3 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-semibold shadow-lg shadow-purple-900/30 transition-all">
            Browse Store
          </a>
          <a href="#how" className="px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/10 transition-all">
            How it works
          </a>
        </div>
      </div>
    </section>
  )
}
