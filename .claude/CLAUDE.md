# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This project exists because "surrogate science" does not exist as a coherent field, despite surrogate endpoints being central to drug development. Scientists systematically underestimate the epistemological challenge of developing valid surrogates. The failures are not random—they follow predictable patterns that could have been anticipated with better research design. This interactive tool teaches those patterns through concrete biological case studies.

The target audience is scientifically literate readers—think Asimov Press, Works in Progress, or Asterisk Magazine—who may not have formal training in biostatistics or causal inference but can follow rigorous arguments when presented accessibly.

## Writing and Pedagogical Approach

The pedagogical style combines academic rigor with Socratic discovery. Rather than lecturing about surrogate validation criteria, the tool leads readers through the reasoning that makes those criteria necessary. Each case study should feel like working through a puzzle where the reader arrives at insights themselves.

Avoid methodology jargon throughout. Terms like "Prentice criteria," "principal stratification," or "proportion explained" should not appear in user-facing content. Instead, build causal intuition directly. When a concept like confounding matters, explain what's actually happening in the biology rather than invoking the statistical term.

Write in plain English and avoid contrastive framings like "It wasn't X, it was Y" which can feel dismissive. The goal is to help readers understand why surrogates fail, not to make them feel foolish for having believed otherwise.

The existing literature on surrogate validation—Buyse-Molenberghs meta-analytic quantification, Prentice criteria, proportion explained—represents the end-game of surrogate science: what you do when you already have multiple completed trials and need to validate a surrogate for regulatory acceptance. This is important but narrow. It tells you how to confirm a surrogate works after you've already invested billions. It does not tell you how to reason about surrogates earlier in development when the critical decisions are actually being made.

This project is about the earlier stages—the decisions made in preclinical work, early-phase trials, and target selection—where causal reasoning about surrogates could prevent failures before they become expensive. The references in this repository (VanderWeele, Pearl, Imai, van der Laan, Gilbert-Hudgens) provide theoretical and methodological tools that could be applied much earlier than they currently are:

VanderWeele and Pearl's work on consistent surrogates identifies the structural conditions (transitivity, no opposing direct effects, no unmeasured confounding) that must hold for a surrogate to be valid. These conditions can be interrogated early—through biological knowledge, experimental design, or genetic evidence—rather than waiting for Phase III failures to reveal violations.

Imai's work on experimental designs for causal mechanisms shows how to design studies that actually test mediation assumptions rather than assuming them. The parallel encouragement design and related approaches could be adapted for earlier-stage surrogate evaluation.

Gilbert and Hudgens' principal stratification framework addresses heterogeneity—the possibility that a surrogate works for some patients but not others. This matters for early development decisions about patient selection and biomarker subgroups.

Van der Laan's causal roadmap provides a general framework for translating causal questions into statistical estimation problems, applicable at any stage of development where you have data and need to make inferences about causal relationships.

The vision is a discipline of surrogate science that operates proactively throughout development, using causal reasoning and appropriately designed studies to identify problematic surrogates before billions are committed—not a discipline that only validates surrogates retrospectively after trials are complete.

Every claim should be grounded in specific studies with real numbers. Cite the actual trials, the actual effect sizes, the actual patient populations. This makes the content both more credible and more memorable than abstract statements about what "can" happen.

When discussing genetic evidence (particularly relevant for the PCSK9 case study), emphasize that genetic evidence validates targets, not therapies. Mendelian randomization tells you about people who have had a genetic variant their entire lives from conception. This is fundamentally different from giving a drug or gene therapy to a 50-year-old. The evidence does not automatically transport across intervention types, timing, or mechanisms.

## Technical Architecture

The current implementation is a single React component (`surrogate-paradox-game-04012026.jsx`) that contains all content and logic together. The component uses React hooks for state management and Tailwind CSS for styling.

Content is structured as a `modules` array where each module represents a case study containing multiple steps. Steps come in two types: `narrative` steps present explanatory text with a continue button, while `question` steps pose multiple-choice questions with feedback. Question feedback is categorized as `right`, `partial`, or `wrong` to provide nuanced responses rather than binary correct/incorrect.

The planned refactoring separates the game engine from content. The game engine—handling navigation, progress tracking, question rendering, and feedback display—should be a reusable component. Individual case studies would then be content files (JSON or MDX) that the engine renders. This separation makes it easier to add new case studies without modifying code and ensures consistent presentation across all content.

Future interactive elements include expandable citations with hover tooltips for readers who want to dig deeper, interactive charts showing trial results and effect sizes, and causal DAG visualizations comparing naive assumptions against the actual causal structure to illustrate why surrogacy is non-trivial.

## Deployment

The project targets GitHub Pages hosting under the `surrogate-sci` organization. The site should be easily shareable so the author can walk collaborators or audiences through case studies in real time.

## Development

The current JSX component is standalone and requires dropping into an existing React project with Tailwind CSS configured. There is no build system in this repository yet. For standalone deployment, the project will need a static site generator setup such as Next.js or Astro.
