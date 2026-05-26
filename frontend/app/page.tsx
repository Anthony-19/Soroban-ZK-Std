import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-white selection:bg-neutral-200 selection:text-black">

      {/* ========================================
        NAVBAR SECTION
        ========================================
      */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo Box */}
          <div className="flex items-center">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs tracking-tighter">ZK</span>
            </div>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex space-x-8 text-xs font-bold tracking-widest text-neutral-500 uppercase">
            <a href="#guides" className="hover:text-black transition-colors duration-200">Guides</a>
            <a href="#contrib" className="hover:text-black transition-colors duration-200">Contrib</a>
            <a href="#source" className="hover:text-black transition-colors duration-200">Source</a>
            <a href="#community" className="hover:text-black transition-colors duration-200">Community</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-6 text-sm font-bold">
            <a href="#login" className="hidden sm:block text-neutral-500 hover:text-black transition-colors duration-200 uppercase tracking-widest text-xs">
              Log In
            </a>
            <a href="#start" className="border-2 border-black text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest text-xs">
              Get Started
            </a>
          </div>
        </div>
      </header>

      {/* ========================================
        HERO SECTION
        ========================================
      */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center overflow-hidden">

        {/* Subtle Background Accent (Replaces the abstract graphic with a minimalist gradient fade) */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-black text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            The Standard ZK<br />implementation for Stellar.
          </h1>
          <p className="text-neutral-500 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            Soroban-ZK-Std provides memory-safe and incredibly fast zero-knowledge proofs for your decentralized applications and smart contracts.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#docs" className="border-b-2 border-black pb-1 text-black font-bold tracking-widest uppercase text-sm hover:text-neutral-500 hover:border-neutral-500 transition-colors">
              Documentation
            </a>
            <a href="#start" className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 font-bold tracking-widest uppercase text-sm">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ========================================
        FEATURES / CONTENT SECTION
        ========================================
      */}
      <section className="bg-white py-24 px-6 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">

          {/* Two-Column Intro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-black text-3xl font-extrabold mb-6 tracking-tight uppercase">The ZK Standard for Stellar</h2>
              <ul className="space-y-4 text-neutral-600 text-lg">
                <li><strong className="text-black font-bold">Standard:</strong> Refined protocol for privacy-preserving contracts.</li>
                <li><strong className="text-black font-bold">Verifier:</strong> Optimized execution for building decentralized apps.</li>
                <li><strong className="text-black font-bold">Fast:</strong> Highly performant verification within the WASM runtime.</li>
                <li><strong className="text-black font-bold">Secure:</strong> High concurrency with audited cryptographic primitives.</li>
              </ul>
            </div>

            <div className="bg-neutral-50 p-10 rounded-3xl border border-neutral-100">
              <h2 className="text-black text-2xl font-extrabold mb-4 tracking-tight uppercase">Latest: v1.0 is out!</h2>
              <p className="text-neutral-600 text-lg mb-6">
                Soroban-ZK-Std v1.0 is here with standard support for mainnet deployment.
              </p>
              <a href="#release" className="text-black font-bold border-b border-black pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors uppercase text-sm tracking-widest">
                Read the release notes
              </a>
            </div>
          </div>

          {/* Three-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

            <div className="flex flex-col">
              <h3 className="text-black text-xl font-bold mb-3 tracking-tight">Open</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                Open source, always. The success of this standard depends on the health of the community.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-black text-xl font-bold mb-3 tracking-tight">Correct</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                A memory safe and robust implementation. It enforces correct cryptographic usage by design.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-black text-xl font-bold mb-3 tracking-tight">Fast</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                Optimized specifically for the Soroban runtime, resulting in cheaper transactions.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-black text-xl font-bold mb-3 tracking-tight">Understandable</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">
                Cryptography is not simple, but integrating it shouldn't be hard to find the answers to.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================
        FOOTER SECTION
        ========================================
      */}
      <footer className="bg-white border-t border-neutral-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm font-semibold text-neutral-400">
          <span className="mb-4 md:mb-0">
            © 2026 Soroban-ZK-Std
          </span>
          <a
            href="https://github.com/johdanike/Soroban-ZK-Std"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200 tracking-wider uppercase text-xs"
          >
            Edit this page on GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}