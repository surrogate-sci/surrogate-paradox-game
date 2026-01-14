# The Surrogate Paradox

An interactive tool for understanding why biomarker-based drug development fails—and what could be done differently.

## The Problem

Clinical trials use surrogate endpoints—biomarkers like cholesterol levels or tumor size—to predict whether treatments will help patients. This speeds up drug development but introduces a fundamental problem: improving a biomarker doesn't guarantee improving outcomes.

This has cost tens of billions of dollars in failed trials. But the deeper problem is that these failures were often predictable. The scientific tools to identify bad surrogates exist—in causal inference, in experimental design, in genetic epidemiology—but they are rarely applied until after expensive Phase III trials have already failed.

"Surrogate science" does not exist as a coherent discipline. Surrogate validation today is primarily a regulatory exercise performed at the end of development, after the critical investment decisions have already been made. This project explores what surrogate science could look like if it operated throughout drug development: identifying problematic surrogates early through causal reasoning rather than discovering them late through trial failures.

## What Makes a Good Surrogate?

A surrogate has **causal effect predictiveness** when treatment effects on the biomarker reliably predict treatment effects on the clinical outcome. This requires more than correlation between biomarker and outcome—it requires that *changing* the biomarker through treatment will *cause* changes in outcome.

Surrogates fail in two main ways.

An **inconsistent surrogate** produces sign reversal: treatment improves the biomarker but worsens outcomes. This is the surrogate paradox, the strongest failure mode. Sign reversal can happen when the biomarker-outcome association is confounded, meaning the biomarker was never causal but merely correlated with something that was. It can also happen when the treatment affects outcomes through multiple pathways, and pathways not captured by the biomarker overwhelm whatever benefit comes through the biomarker pathway. Toxicity and off-target effects are common culprits. A third source of failure is heterogeneity: the surrogate-outcome relationship may differ across patient subgroups, across drugs targeting the same biomarker, or across clinical contexts. A surrogate validated for one drug may fail for another if the drugs affect different subpopulations, or if one drug's mechanism engages the causal pathway while another's does not.

A **weak surrogate** is less dramatic but still problematic: treatment effects on the biomarker don't predict outcome effects, statistically indistinguishable from no predictive value. Even without sign reversal, a biomarker may carry too little information about the treatment-outcome relationship to guide development decisions.

Surrogate validity requires that treatment effects flow primarily through the biomarker pathway, that this pathway is genuinely causal, and that the relationship holds across the patients being treated. Crucially, these conditions cannot be verified from observational data alone—not even from randomized trials of the treatment. Randomizing treatment does not address confounding between the biomarker and outcome. To know whether a biomarker is a true causal mediator or merely a correlated marker, you need experiments that manipulate the biomarker itself. Such experiments are rarely conducted, which is why surrogate failures keep recurring despite increasingly sophisticated statistical analyses. The analyses quantify associations, but they cannot determine whether changing the biomarker will change outcomes.

## Case Studies

- [HDL Cholesterol: The $10 Billion Mistake](/) — How collider bias and direct effects led to failed CETP inhibitor trials
- [PCSK9: When Valid Targets Don't Validate Therapies](/) — Why genetic evidence for a target doesn't automatically validate gene editing interventions

## References

See [references documentation](.claude/REFERENCES.md) for the complete bibliography on surrogate endpoint methodology.

## About

A [Surrogate Science Project](https://github.com/surrogate-sci) production.
