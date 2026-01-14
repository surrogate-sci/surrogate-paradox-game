import React, { useState } from 'react';

const GameEngine = ({ modules, title, onComplete, onBack }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentMod = modules[currentModule];
  const currentStepData = currentMod.steps[currentStep];

  const handleAnswer = (optionId) => {
    const option = currentStepData.options.find(o => o.id === optionId);
    setAnswers([...answers, {
      module: currentModule,
      step: currentStep,
      answer: optionId,
      correct: option.feedback === 'right'
    }]);
    setShowExplanation(true);
  };

  const nextStep = () => {
    setShowExplanation(false);
    if (currentStep < currentMod.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setCurrentStep(0);
    } else if (onComplete) {
      onComplete(answers);
    }
  };

  const isLastStep = currentModule === modules.length - 1 &&
                     currentStep === currentMod.steps.length - 1;

  const totalSteps = modules.reduce((sum, m) => sum + m.steps.length, 0);
  const completedSteps = modules.slice(0, currentModule).reduce((sum, m) => sum + m.steps.length, 0) + currentStep;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-amber-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back button */}
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-4 left-4 text-slate-400 hover:text-white text-sm z-50"
        >
          ← Back to case studies
        </button>
      )}

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Module header */}
        <div className="mb-8">
          <p className="text-amber-400 text-sm font-medium tracking-wide uppercase mb-2">
            {currentMod.title}
          </p>
          {currentMod.subtitle && (
            <p className="text-slate-400">{currentMod.subtitle}</p>
          )}
        </div>

        {/* Step content */}
        {currentStepData.type === 'narrative' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">
              {currentStepData.title}
            </h2>
            <div className="text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {currentStepData.content}
            </div>
            <button
              onClick={nextStep}
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              {isLastStep ? 'Complete' : currentStepData.next}
            </button>
          </div>
        )}

        {currentStepData.type === 'question' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white">
              {currentStepData.title}
            </h2>

            {/* Context */}
            <div className="bg-slate-800 rounded-lg p-6">
              <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                {currentStepData.context}
              </p>
            </div>

            {/* Question */}
            <div className="border-l-4 border-amber-500 pl-6">
              <p className="text-xl text-white font-medium">
                {currentStepData.question}
              </p>
            </div>

            {/* Options */}
            {!showExplanation && (
              <div className="space-y-3">
                {currentStepData.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full text-left p-5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-slate-200"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="space-y-6">
                {(() => {
                  const lastAnswer = answers[answers.length - 1];
                  const option = currentStepData.options.find(o => o.id === lastAnswer.answer);
                  const feedbackColors = {
                    right: 'bg-green-900/50 border-green-500',
                    partial: 'bg-amber-900/50 border-amber-500',
                    wrong: 'bg-red-900/50 border-red-500'
                  };
                  const feedbackText = {
                    right: 'Good reasoning',
                    partial: 'Partially correct—but there\'s more to consider',
                    wrong: 'This is a common but problematic assumption'
                  };
                  return (
                    <div className={`border-l-4 p-4 rounded-r-lg ${feedbackColors[option.feedback]}`}>
                      <p className="font-medium">{feedbackText[option.feedback]}</p>
                    </div>
                  );
                })()}

                <div className="bg-slate-800 rounded-lg p-6">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {currentStepData.explanation}
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 border-t border-slate-700 py-3 px-6">
        <div className="max-w-3xl mx-auto flex justify-between items-center text-sm text-slate-400">
          <span>{title || 'The Surrogate Paradox'}</span>
          <span>A Surrogate Science Project production</span>
        </div>
      </div>
    </div>
  );
};

export default GameEngine;
