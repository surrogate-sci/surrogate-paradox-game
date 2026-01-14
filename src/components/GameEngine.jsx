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

  const prevStep = () => {
    setShowExplanation(false);
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else if (currentModule > 0) {
      const prevMod = modules[currentModule - 1];
      setCurrentModule(currentModule - 1);
      setCurrentStep(prevMod.steps.length - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const isLastStep = currentModule === modules.length - 1 &&
                     currentStep === currentMod.steps.length - 1;

  const totalSteps = modules.reduce((sum, m) => sum + m.steps.length, 0);
  const completedSteps = modules.slice(0, currentModule).reduce((sum, m) => sum + m.steps.length, 0) + currentStep;
  const progress = (completedSteps / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-stone-200 z-50">
        <div
          className="h-full bg-stone-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Back button */}
      <button
        onClick={prevStep}
        className="fixed top-6 left-6 bg-stone-900 hover:bg-stone-800 text-white font-medium py-2.5 px-6 rounded transition-colors z-50"
      >
        ← Back
      </button>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Module header */}
        <div className="mb-8">
          <p className="text-stone-500 text-sm font-medium tracking-wide uppercase mb-1">
            {currentMod.title}
          </p>
          {currentMod.subtitle && (
            <p className="text-stone-500 text-sm">{currentMod.subtitle}</p>
          )}
        </div>

        {/* Step content */}
        {currentStepData.type === 'narrative' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-stone-900">
              {currentStepData.title}
            </h2>
            <div className="text-stone-700 text-lg leading-relaxed whitespace-pre-line">
              {currentStepData.content}
            </div>
            <button
              onClick={nextStep}
              className="bg-stone-900 hover:bg-stone-800 text-white font-medium py-2.5 px-6 rounded transition-colors"
            >
              {isLastStep ? 'Complete' : currentStepData.next}
            </button>
          </div>
        )}

        {currentStepData.type === 'question' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-stone-900">
              {currentStepData.title}
            </h2>

            {/* Context */}
            <div className="bg-white border border-stone-200 rounded p-5">
              <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                {currentStepData.context}
              </p>
            </div>

            {/* Question */}
            <div className="border-l-2 border-stone-400 pl-4">
              <p className="text-lg text-stone-900 font-medium">
                {currentStepData.question}
              </p>
            </div>

            {/* Options */}
            {!showExplanation && (
              <div className="space-y-2">
                {currentStepData.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full text-left p-4 bg-white border border-stone-200 rounded hover:border-stone-400 transition-colors text-stone-700"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}

            {/* Explanation */}
            {showExplanation && (
              <div className="space-y-4">
                {(() => {
                  const lastAnswer = answers[answers.length - 1];
                  const option = currentStepData.options.find(o => o.id === lastAnswer.answer);
                  const feedbackColors = {
                    right: 'bg-green-50 border-green-300 text-green-800',
                    partial: 'bg-amber-50 border-amber-300 text-amber-800',
                    wrong: 'bg-red-50 border-red-300 text-red-800'
                  };
                  const feedbackText = {
                    right: 'Good reasoning',
                    partial: 'Partially correct—but there\'s more to consider',
                    wrong: 'This is a common but problematic assumption'
                  };
                  return (
                    <div className={`border-l-2 p-4 rounded-r ${feedbackColors[option.feedback]}`}>
                      <p className="font-medium">{feedbackText[option.feedback]}</p>
                    </div>
                  );
                })()}

                <div className="bg-white border border-stone-200 rounded p-5">
                  <p className="text-stone-700 leading-relaxed whitespace-pre-line">
                    {currentStepData.explanation}
                  </p>
                </div>

                <button
                  onClick={nextStep}
                  className="bg-stone-900 hover:bg-stone-800 text-white font-medium py-2.5 px-6 rounded transition-colors"
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameEngine;
