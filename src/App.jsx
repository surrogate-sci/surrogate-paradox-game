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

// Simple DAG component
const HDLDiagram = () => (
  <svg viewBox="0 0 400 120" className="w-full max-w-md mx-auto my-8">
    {/* Nodes */}
    <rect x="10" y="40" width="80" height="40" rx="4" fill="white" stroke="#a8a29e" strokeWidth="1.5"/>
    <text x="50" y="65" textAnchor="middle" className="text-sm" fill="#44403c">Drug</text>

    <rect x="160" y="40" width="80" height="40" rx="4" fill="white" stroke="#a8a29e" strokeWidth="1.5"/>
    <text x="200" y="65" textAnchor="middle" className="text-sm" fill="#44403c">HDL ↑</text>

    <rect x="310" y="40" width="80" height="40" rx="4" fill="white" stroke="#a8a29e" strokeWidth="1.5"/>
    <text x="350" y="58" textAnchor="middle" className="text-sm" fill="#44403c">Heart</text>
    <text x="350" y="72" textAnchor="middle" className="text-sm" fill="#44403c">Disease</text>

    {/* Arrows */}
    <line x1="90" y1="60" x2="155" y2="60" stroke="#78716c" strokeWidth="1.5" markerEnd="url(#arrow)"/>
    <line x1="240" y1="60" x2="305" y2="60" stroke="#78716c" strokeWidth="1.5" markerEnd="url(#arrow)"/>

    {/* Question marks */}
    <text x="122" y="50" textAnchor="middle" className="text-lg font-bold" fill="#dc2626">?</text>
    <text x="272" y="50" textAnchor="middle" className="text-lg font-bold" fill="#dc2626">?</text>

    {/* Arrow marker */}
    <defs>
      <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#78716c"/>
      </marker>
    </defs>
  </svg>
);

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
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-stone-900 mb-6">
            The Surrogate Paradox
          </h1>

          <div className="bg-white border-l-4 border-stone-400 p-5 mb-6">
            <p className="text-stone-700 italic leading-relaxed">
              The surrogate paradox occurs when a treatment improves a biomarker, the biomarker predicts outcomes, but the treatment fails to improve outcomes—or makes them worse.
            </p>
          </div>

          <HDLDiagram />

          <p className="text-stone-600 text-center text-sm">
            Does raising HDL reduce heart disease? The arrows look simple. The biology wasn't.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-stone-900 mb-4">
            Case Studies
          </h2>

          <div className="space-y-3">
            {caseStudies.map((study) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(study.id)}
                className="w-full text-left p-5 bg-white border border-stone-200 rounded hover:border-stone-400 transition-colors"
              >
                <h3 className="text-lg font-semibold text-stone-900 mb-1">
                  {study.title}
                </h3>
                <p className="text-stone-700 text-sm mb-1">
                  {study.subtitle}
                </p>
                <p className="text-stone-500 text-sm">
                  {study.description}
                </p>
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <button
            onClick={() => setShowIntro(true)}
            className="text-stone-500 hover:text-stone-700 text-sm underline"
          >
            Background: Three conditions for surrogate validity →
          </button>
        </section>

        <footer className="text-center text-stone-400 text-sm pt-8 border-t border-stone-200">
          <p>Manjari Narayan · <a href="https://github.com/surrogate-sci" className="text-stone-600 hover:text-stone-900">The Surrogate Science Project</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;
