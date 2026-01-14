import React, { useState } from 'react';
import GameEngine from './components/GameEngine';
import introData from './case-studies/intro.json';
import hdlData from './case-studies/hdl-cholesterol.json';
import pcsk9Data from './case-studies/pcsk9.json';

const caseStudies = [
  {
    id: 'hdl',
    title: 'HDL Cholesterol',
    subtitle: 'CETP inhibitors raised HDL but failed to reduce cardiovascular events',
    description: 'Four drugs, billions in R&D, no cardiovascular benefit.',
    data: hdlData
  },
  {
    id: 'pcsk9',
    title: 'PCSK9',
    subtitle: 'Three modalities, three different questions',
    description: 'Genetic exposure, drug inhibitors, and gene editing each require their own evidence. Transfer isn\'t guaranteed.',
    data: pcsk9Data
  }
];

function App() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [showIntro, setShowIntro] = useState(false);

  if (showIntro) {
    return (
      <GameEngine
        modules={introData.modules}
        title="Introduction"
        onComplete={() => setShowIntro(false)}
        onBack={() => setShowIntro(false)}
      />
    );
  }

  if (selectedStudy) {
    const study = caseStudies.find(s => s.id === selectedStudy);
    return (
      <GameEngine
        modules={study.data.modules}
        title={study.title}
        onComplete={() => setSelectedStudy(null)}
        onBack={() => setSelectedStudy(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            The Surrogate Paradox
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            An interactive exploration of why biomarker-based drug development fails—and what could be done differently.
          </p>
        </header>

        <section className="mb-12">
          <button
            onClick={() => setShowIntro(true)}
            className="w-full text-left p-6 bg-amber-900/30 border border-amber-700 rounded-lg hover:bg-amber-900/50 transition-colors mb-8"
          >
            <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-2">
              Start Here
            </p>
            <h2 className="text-xl font-semibold text-white mb-2">
              Introduction: The Three Failure Modes
            </h2>
            <p className="text-slate-300">
              Learn why improving a biomarker doesn't guarantee improving outcomes.
            </p>
          </button>

          <h2 className="text-2xl font-semibold text-white mb-6">
            Case Studies
          </h2>

          <div className="space-y-4">
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study.id)}
                className="w-full text-left p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {study.title}
                </h3>
                <p className="text-amber-400 text-sm mb-2">
                  {study.subtitle}
                </p>
                <p className="text-slate-400">
                  {study.description}
                </p>
              </button>
            ))}
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm">
          <p>A <a href="https://github.com/surrogate-sci" className="text-amber-500 hover:text-amber-400">Surrogate Science Project</a> production</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
