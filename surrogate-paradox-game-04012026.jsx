import React, { useState } from 'react';

const SurrogateParadoxGame = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const modules = [
    // MODULE 0: INTRODUCTION
    {
      id: 'intro',
      title: 'The Surrogate Problem',
      steps: [
        {
          type: 'narrative',
          title: 'Why Surrogates?',
          content: `Clinical trials are slow and expensive. Waiting for patients to have heart attacks or die takes years.

So we measure something faster: a biomarker. Cholesterol levels. Tumor size. Blood pressure.

If the biomarker improves, we assume the patient will do better.

This assumption has cost tens of billions of dollars in failed drug development.`,
          next: 'Continue'
        },
        {
          type: 'narrative',
          title: 'The Surrogate Paradox',
          content: `The surrogate paradox occurs when:

• The biomarker predicts the outcome (people with better biomarker values do better)

• The treatment moves the biomarker in the "good" direction

• But the treatment doesn't improve outcomes—or makes them worse

How can this happen? Three ways.`,
          next: 'See the three failure modes'
        },
        {
          type: 'narrative',
          title: 'Three Ways Surrogates Fail',
          content: `1. THE BIOMARKER WAS NEVER CAUSAL
The biomarker correlates with the outcome, but it's a sign of disease, not a cause. Manipulating it doesn't help because it was never driving anything.

2. THE TREATMENT HAS DIRECT EFFECTS
The drug does other things besides moving the biomarker. Those other effects can cause harm that outweighs any benefit from the biomarker change.

3. THE INTERVENTION ISN'T THE EXPOSURE
Evidence about one type of intervention (like being born with a gene) doesn't automatically apply to a different intervention (like taking a drug at age 50).`,
          next: 'Start Case Study 1: HDL Cholesterol'
        }
      ]
    },

    // MODULE 1: HDL CHOLESTEROL
    {
      id: 'hdl',
      title: 'Case Study 1: HDL Cholesterol',
      subtitle: 'The $10 Billion Mistake',
      steps: [
        {
          type: 'narrative',
          title: 'The Promise of "Good Cholesterol"',
          content: `For decades, epidemiologists observed a consistent pattern:

People with higher HDL cholesterol have fewer heart attacks.

The relationship was strong, graded, and seen in every population studied. HDL even had a plausible mechanism—it helps remove cholesterol from arteries.

Pharmaceutical companies saw an opportunity: develop drugs that raise HDL.`,
          next: 'Continue'
        },
        {
          type: 'question',
          title: 'Your Investment Decision',
          context: `You're a pharma executive in 2000. You're considering investing $500 million in a drug that raises HDL cholesterol by 50%.

The evidence for HDL:
• Strong correlation with outcomes across many studies
• Biological mechanism (reverse cholesterol transport)
• Every 1 mg/dL higher HDL associated with 2-3% lower heart disease risk`,
          question: 'What question should you ask before investing?',
          options: [
            { 
              id: 'a',
              text: 'Can we raise HDL even higher to get more benefit?',
              feedback: 'wrong'
            },
            { 
              id: 'b',
              text: 'Is the HDL-outcome relationship causal, or could it be confounded?',
              feedback: 'right'
            },
            { 
              id: 'c',
              text: 'What is the competitive landscape for HDL drugs?',
              feedback: 'wrong'
            }
          ],
          explanation: `The critical question is whether HDL actually causes protection, or merely correlates with it.

A biomarker can correlate with outcomes for many reasons:
• It causes the outcome (what we hope)
• It's caused by the same things that cause the outcome (confounding)
• It's statistically linked through a shared consequence (collider bias)

Only in the first case will changing the biomarker change the outcome.`
        },
        {
          type: 'narrative',
          title: 'Failure Mode #1: The Biomarker Wasn\'t Causal',
          content: `In 1989, epidemiologist George Davey Smith noticed something troubling.

Most HDL studies adjusted for total cholesterol or LDL. This seems reasonable—isolate HDL's "independent" effect.

But total cholesterol = LDL + HDL (roughly). When you adjust for total cholesterol, you create a statistical artifact.

Imagine two people with the same total cholesterol. If one has higher HDL, they must have lower LDL. You're now comparing people with different LDL levels and attributing the difference to HDL.

Studies that avoided this adjustment found much weaker HDL associations.`,
          next: 'Continue'
        },
        {
          type: 'narrative',
          title: 'The Genetic Test',
          content: `By 2012, geneticists could test HDL causality directly.

Some people are born with genetic variants that give them naturally higher HDL. If HDL is protective, these people should have fewer heart attacks.

They don't.

People with HDL-raising genetic variants have the same heart attack rates as everyone else. Meanwhile, people with LDL-lowering variants have dramatically fewer heart attacks—exactly as predicted.

The verdict: HDL was a marker, not a cause. The observed correlation was an artifact of how the studies were analyzed.`,
          next: 'Continue'
        },
        {
          type: 'question',
          title: 'The Trial Results',
          context: `Despite warning signs, four major HDL-raising drugs went to large clinical trials:

• Torcetrapib (Pfizer): Raised HDL 72%. Increased deaths.
• Dalcetrapib (Roche): Raised HDL 30%. No benefit.
• Evacetrapib (Lilly): Raised HDL 130%. No benefit.
• Anacetrapib (Merck): Raised HDL 100%+. Small benefit, likely from LDL lowering.`,
          question: 'Torcetrapib raised HDL substantially but increased deaths. What happened?',
          options: [
            { 
              id: 'a',
              text: 'The drug raised HDL through the wrong mechanism',
              feedback: 'partial'
            },
            { 
              id: 'b',
              text: 'The drug had harmful effects beyond its HDL effects',
              feedback: 'right'
            },
            { 
              id: 'c',
              text: 'HDL needs to be raised even more to see benefit',
              feedback: 'wrong'
            }
          ],
          explanation: `Torcetrapib illustrates Failure Mode #2: direct effects.

The drug raised HDL as intended. But it also raised blood pressure and altered other hormones. These harmful direct effects outweighed any possible benefit from HDL.

This is the surrogate paradox in action:
• Treatment → Biomarker ✓ (drug raises HDL)
• Biomarker correlates with Outcome ✓ (in observational data)
• Treatment → Outcome ✗ (drug causes harm)

Even if HDL had been causal, the drug's other effects could still cause net harm.`
        },
        {
          type: 'narrative',
          title: 'Lessons from HDL',
          content: `The HDL story illustrates two failure modes:

FAILURE MODE #1: NON-CAUSAL ASSOCIATION
The HDL-heart disease correlation was largely a statistical artifact. Adjusting for total cholesterol created a spurious association. HDL was a sign of metabolic health, not a lever to pull.

FAILURE MODE #2: DIRECT EFFECTS
Even setting aside causality, drugs do more than move biomarkers. Torcetrapib raised blood pressure. Any drug intervention brings its own effects that can overwhelm the intended biomarker pathway.

The evidence to identify both problems existed before billions were spent. It wasn't used.`,
          next: 'Continue to Case Study 2'
        }
      ]
    },

    // MODULE 2: PCSK9
    {
      id: 'pcsk9',
      title: 'Case Study 2: PCSK9',
      subtitle: 'When Valid Evidence Doesn\'t Transfer',
      steps: [
        {
          type: 'narrative',
          title: 'A Success Story—With a Catch',
          content: `PCSK9 is a protein that removes LDL receptors from liver cells. Fewer receptors means less LDL clearance from blood, which means higher LDL and more heart disease.

People born with loss-of-function mutations in PCSK9 have:
• Very low LDL cholesterol
• Dramatically lower rates of heart disease
• No apparent health problems from missing PCSK9

This made PCSK9 an attractive drug target. Block PCSK9, lower LDL, prevent heart attacks.`,
          next: 'Continue'
        },
        {
          type: 'narrative',
          title: 'The Genetic Evidence',
          content: `The genetic evidence for PCSK9 was strong:

• Mendelian randomization confirmed: people with PCSK9 variants that lower LDL have proportionally fewer heart attacks

• The effect size matched what you'd predict from the LDL reduction

• Unlike HDL, this wasn't a statistical artifact—it replicated with multiple genetic variants and methods

PCSK9 inhibitor drugs were developed. They worked: they lowered LDL and reduced heart attacks in clinical trials.

A clear success. But now consider a different intervention...`,
          next: 'Continue'
        },
        {
          type: 'question',
          title: 'A New Proposal',
          context: `Gene editing technology now allows permanent knockout of PCSK9. A single treatment could eliminate PCSK9 production forever, providing lifelong LDL reduction without ongoing drug treatment.

The pitch: "Genetic evidence proves that eliminating PCSK9 is safe and effective. People born without functional PCSK9 do great. Let's offer this to 50-year-olds with high cardiovascular risk."`,
          question: 'Does the genetic evidence validate gene editing PCSK9 in middle-aged adults?',
          options: [
            { 
              id: 'a',
              text: 'Yes—the genetic evidence proves eliminating PCSK9 is beneficial',
              feedback: 'wrong'
            },
            { 
              id: 'b',
              text: 'Partially—but we need to consider what the genetic evidence actually shows',
              feedback: 'right'
            },
            { 
              id: 'c',
              text: 'No—gene editing is completely different from natural genetic variation',
              feedback: 'partial'
            }
          ],
          explanation: `The genetic evidence tells us about people who never had functional PCSK9 from conception.

This is different from eliminating PCSK9 at age 50:

• Developmental effects: Did the body adapt during development to low PCSK9?
• Cumulative exposure: 50 years of normal LDL vs. 50 years of low LDL are different histories
• Intervention effects: Gene editing itself may have off-target effects
• Reversibility: Natural variants can't be "undone" if problems emerge; gene editing is similarly permanent

The genetic evidence validates PCSK9 as a target. It doesn't validate every possible intervention on that target.`
        },
        {
          type: 'narrative',
          title: 'Failure Mode #3: Intervention ≠ Exposure',
          content: `This is the subtlest failure mode.

The genetic evidence tells you: "People who have had X their entire lives, from conception, do well."

This does NOT automatically tell you: "Giving X to a 50-year-old will produce equivalent benefit."

Why might they differ?

TIMING: The cardiovascular benefit of low LDL accumulates over decades. Starting at 50 means you've already had 50 years of damage.

COMPENSATION: Bodies adapt to lifelong genetic differences. A sudden change at 50 may trigger different compensatory responses.

THE INTERVENTION ITSELF: Gene editing has its own risks (off-target edits, immune responses) that natural genetic variants don't have.`,
          next: 'Continue'
        },
        {
          type: 'question',
          title: 'Transportability',
          context: `A colleague argues: "We have three lines of evidence:
1. Genetic studies show lifelong low PCSK9 is beneficial
2. Drug trials show pharmacological PCSK9 inhibition works
3. Therefore gene editing must work too"`,
          question: 'What\'s missing from this argument?',
          options: [
            { 
              id: 'a',
              text: 'More genetic studies with larger sample sizes',
              feedback: 'wrong'
            },
            { 
              id: 'b',
              text: 'Direct evidence about gene editing specifically—each intervention type needs its own evidence',
              feedback: 'right'
            },
            { 
              id: 'c',
              text: 'Nothing—three lines of evidence should be sufficient',
              feedback: 'wrong'
            }
          ],
          explanation: `Each intervention is a different question:

• Does lifelong genetically-determined low PCSK9 cause benefit? → Genetic studies answer this

• Does pharmacological PCSK9 inhibition (reversible, starting in adulthood) cause benefit? → Drug trials answer this

• Does gene editing PCSK9 (irreversible, starting in adulthood, with editing-specific effects) cause benefit? → Nothing directly answers this yet

The evidence doesn't automatically transport across intervention types. Drug trials actually help more than genetics here, because they're closer to gene editing in timing and mechanism—but they're still not the same (reversible vs. irreversible, antibody effects vs. editing effects).

Ignoring these distinctions is how surrogate paradoxes happen.`
        },
        {
          type: 'narrative',
          title: 'Lessons from PCSK9',
          content: `PCSK9 illustrates Failure Mode #3: conflating different interventions.

Unlike HDL, PCSK9 is a valid causal target. The genetic evidence is solid. The drugs work.

But "valid target" doesn't mean "any intervention on this target is validated."

The question isn't just "is this target causal?" but:
• What intervention are we actually evaluating?
• What evidence do we have about that specific intervention?
• What's different about our intervention compared to the evidence we're relying on?

Genetic evidence validates targets. It doesn't automatically validate therapies.`,
          next: 'Continue to Summary'
        }
      ]
    },

    // MODULE 3: SYNTHESIS
    {
      id: 'synthesis',
      title: 'The Three Failure Modes',
      subtitle: 'Putting It Together',
      steps: [
        {
          type: 'narrative',
          title: 'Summary: Why Surrogates Fail',
          content: `FAILURE MODE #1: NON-CAUSAL ASSOCIATION
The biomarker correlates with the outcome but doesn't cause it. Manipulating the biomarker does nothing because it was never driving the outcome.

Example: HDL cholesterol. The correlation was confounded and artificially inflated by statistical adjustment.

Question to ask: "Is this biomarker a cause of the outcome, or just a marker of something else?"

FAILURE MODE #2: DIRECT EFFECTS
The treatment affects more than just the biomarker. These other effects can cause harm that outweighs any benefit from the biomarker change.

Example: Torcetrapib. Raised HDL but also raised blood pressure and caused deaths.

Question to ask: "What else does this treatment do besides move the biomarker?"

FAILURE MODE #3: INTERVENTION ≠ EXPOSURE
Evidence about one type of intervention doesn't transfer to a different intervention, even on the same target. Timing, mechanism, and intervention-specific effects matter.

Example: PCSK9. Genetic evidence about lifelong absence doesn't validate gene editing at age 50.

Question to ask: "Does my evidence match the specific intervention I'm planning?"`,
          next: 'Continue'
        },
        {
          type: 'question',
          title: 'Test Your Intuition',
          context: `A new Alzheimer's drug reduces amyloid plaques by 50%. Observational studies show people with fewer plaques have less cognitive decline. The drug's proponents argue this proves it will slow Alzheimer's.`,
          question: 'Which failure mode(s) should you worry about?',
          options: [
            { 
              id: 'a',
              text: 'Only #2 (direct effects)—we need to check for side effects',
              feedback: 'partial'
            },
            { 
              id: 'b',
              text: 'Only #1 (non-causal)—maybe plaques are a marker, not a cause',
              feedback: 'partial'
            },
            { 
              id: 'c',
              text: 'All three—each is a distinct way this could fail',
              feedback: 'right'
            }
          ],
          explanation: `All three failure modes apply:

#1 NON-CAUSAL: Are plaques a cause of Alzheimer's, or a downstream marker of neurodegeneration? If plaques are a consequence rather than a cause, removing them won't help.

#2 DIRECT EFFECTS: What else does the drug do? Amyloid-clearing antibodies cause brain swelling and microbleeds in a substantial fraction of patients. These harms could outweigh any benefit.

#3 INTERVENTION ≠ EXPOSURE: People who naturally accumulate fewer plaques may differ in many ways from people who accumulate plaques and then have them removed. The intervention (removing plaques) isn't the same as the exposure (never accumulating them).

This is why recent Alzheimer's drug trials have shown plaque reduction without clear clinical benefit—the surrogate paradox in action.`
        },
        {
          type: 'narrative',
          title: 'The Core Insight',
          content: `Surrogate validity isn't about correlation. It's about whether treatment effects on the surrogate predict treatment effects on the outcome.

To evaluate a surrogate, you need to ask:

1. Is the biomarker-outcome relationship causal? (Not just correlated)

2. What else does the treatment do? (Direct effects beyond the biomarker)

3. Does my evidence match my intervention? (Same timing, mechanism, population?)

These questions can often be answered—or at least investigated—before betting billions on a clinical trial.

The methodology exists. The epistemology is understood. The question is whether it gets applied.`,
          next: 'Finish'
        }
      ]
    }
  ];

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
    }
  };

  const isLastStep = currentModule === modules.length - 1 && 
                     currentStep === currentMod.steps.length - 1;

  // Calculate progress
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
                {/* Feedback indicator */}
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

                {/* Explanation text */}
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
          <span>The Surrogate Paradox</span>
          <span>A Surrogate Science Project production</span>
        </div>
      </div>
    </div>
  );
};

export default SurrogateParadoxGame;
