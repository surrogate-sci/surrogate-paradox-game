# Theoretical Foundations of Surrogate Validity

## The Core Problem

A surrogate endpoint allows researchers to predict treatment effects on clinical outcomes from treatment effects on a biomarker. A "consistent surrogate" is one where the direction of treatment effect on the surrogate reliably predicts the direction of treatment effect on the outcome. When this fails—when treatment improves the surrogate but worsens outcomes—we have the surrogate paradox.

The surrogate paradox has caused public health catastrophes. Drugs approved based on surrogate outcomes have subsequently killed thousands of patients when the surrogate-outcome relationship did not hold for the treatment in question.

## Three Conditions for the Surrogate Paradox

VanderWeele's Proposition 3 establishes that for sign reversal (the surrogate paradox) to occur, at least one of three conditions must be violated:

### Condition 1: No Opposing Pathways Through Other Mechanisms

The treatment must not affect the outcome through pathways that bypass the surrogate and operate in the opposite direction. If a drug improves a biomarker but also causes toxicity through an entirely separate mechanism, the toxic pathway may overwhelm the biomarker pathway. The classic example is antiarrhythmic drugs: they reduced ventricular arrhythmias (the surrogate) but increased mortality through pro-arrhythmic effects and other cardiotoxicity that operated independently of the arrhythmia-suppressing mechanism.

### Condition 2: No Confounding of the Surrogate-Outcome Relationship

The association between surrogate and outcome must be causal, not confounded by unmeasured common causes. If patients with better biomarker values also tend to be healthier in unmeasured ways, the biomarker-outcome correlation reflects this confounding rather than a causal pathway. Manipulating the biomarker will not improve outcomes because the biomarker was never driving anything—it was merely a marker of underlying health status.

### Condition 3: Transitivity (Distributional Monotonicity)

This is the subtlest and most often misunderstood condition. Transitivity requires that the treatment affect the surrogate in a consistent direction across all relevant patient subgroups—specifically, that treatment positively affects the surrogate for the same individuals in whom the surrogate positively affects the outcome.

## Transitivity in Detail

The transitivity condition is formally expressed as "distributional monotonicity": the requirement that pr(S > s | a, u) is non-decreasing in treatment a for all values of s and all unmeasured factors u. In plain terms: treatment must shift the entire distribution of the surrogate in the beneficial direction, not just the average.

### Why Transitivity Fails: Heterogeneity Across Patients

Even if treatment improves the surrogate on average, it may decrease the surrogate for some patients. If those patients happen to be the ones for whom the surrogate-outcome relationship is strongest, the average treatment effect on the outcome could be negative despite the average treatment effect on the surrogate being positive.

Example: Suppose a drug raises HDL cholesterol on average. But in patients with a particular genetic background, the drug actually lowers HDL. If those same patients are the ones in whom HDL is most protective (perhaps because their cardiovascular risk operates primarily through the HDL pathway), then raising average HDL while lowering HDL in this subgroup could produce net harm.

### Why Transitivity Fails: Heterogeneity Across Drugs

A surrogate validated for one drug may fail for another drug in the same class, or even for the same target, if the drugs differ in which patient subgroups they affect. Two drugs might both raise average HDL, but if Drug A raises HDL primarily in patients where HDL is protective while Drug B raises HDL primarily in patients where HDL is not on the causal pathway, the drugs will have different effects on outcomes despite identical effects on the surrogate.

This is why regulatory agencies increasingly require surrogate validation to be conducted separately for different drug classes, even when the drugs target the same biomarker. The blood pressure surrogate, for example, was validated independently for diuretics, beta-blockers, ACE inhibitors, calcium channel blockers, and angiotensin receptor blockers—because off-target effects and patient-level heterogeneity could differ across classes.

### Why Transitivity Fails: Heterogeneity Across Contexts

The same drug-surrogate-outcome relationship may hold in one disease stage but not another, in one patient population but not another, in treatment-naive patients but not previously treated patients. Surrogate validity is context-specific, and extrapolation across contexts is hazardous precisely because the transitivity condition may hold in one context but fail in another.

## The Multi-Scale Nature of Transitivity Failures

Transitivity failures are fundamentally about heterogeneity operating at multiple scales simultaneously:

1. **Within-patient heterogeneity**: The treatment may affect multiple pathways within the same patient, some captured by the surrogate and some not.

2. **Between-patient heterogeneity**: Different patients may have different surrogate-outcome relationships, and the treatment may differentially affect patients with strong vs. weak surrogate-outcome coupling.

3. **Between-drug heterogeneity**: Different drugs targeting the same surrogate may have different distributions of effects across patient subgroups, producing different outcome effects despite similar surrogate effects.

4. **Between-context heterogeneity**: The same drug in the same patients may have different surrogate validity depending on disease stage, concomitant treatments, or other contextual factors.

## Implications for Surrogate Science

VanderWeele's framework makes clear that surrogate validity cannot be established by demonstrating correlation between surrogate and outcome, or even by demonstrating that one drug's effect on the surrogate predicts its effect on the outcome. Each of the three conditions must be assessed, and each can fail in ways that are difficult to detect from aggregate data.

The transitivity condition in particular requires understanding heterogeneity at the individual level—which patients respond to treatment on the surrogate, which patients have strong surrogate-outcome coupling, and whether these are the same patients. This information is rarely available from standard trial designs but could in principle be obtained through richer data collection, genetic stratification, or experimental designs specifically aimed at assessing heterogeneity.

## Pearl's Commentary: The Identification Problem and Robustness

Pearl's 2013 discussion of VanderWeele's paper adds crucial insights about why the surrogate problem is so difficult.

### Perfect Mediation is the Only Structural Guarantee

Pearl shows through a simple linear model that the surrogate paradox can occur even without confounding, interaction, or heterogeneity. All that's required is a sufficiently negative direct effect of treatment on outcome (the pathway not through the surrogate). However, this scenario is rare in practice—a treatment with such a negative direct effect would rarely be a candidate for surrogacy analysis in the first place.

In practice, the paradox more commonly arises under confounding conditions, where even modest parameter values can produce sign reversal. The key structural insight is that the only configuration that guarantees protection from the paradox is perfect mediation: no direct effect and no confounding of the surrogate-outcome relationship. This corresponds to the classical Prentice (1989) criteria—which are almost never satisfied in practice.

### The Identification Problem

Pearl emphasizes that the surrogate paradox cannot be avoided through structural knowledge alone because the relevant parameters (direct effect, indirect effect, confounding) are not identifiable from observational data—even in a randomized trial. Randomization ensures that treatment is not confounded with the surrogate or with the outcome, but it does not address confounding between the surrogate and outcome. This is why researchers have developed elaborate formalisms like "indirect effects," "principal strata," and "proportion mediated"—they are attempts to define surrogacy in terms of quantities that might be identifiable under additional assumptions.

But here is the core problem: you cannot verify from the data whether those assumptions hold. The confounding between S and Y is not testable without additional experimental manipulation.

### The Connection to Imai's Experimental Designs

This identification problem is precisely what Imai, Tingley, and Yamamoto (2013) address with their experimental designs for causal mechanisms. Standard mediation analysis (Baron-Kenny style) assumes sequential ignorability—that the mediator is as good as randomly assigned given treatment and covariates. This assumption is untestable and often implausible.

Imai's solution is to actually manipulate the mediator, either directly (if possible) or through encouragement designs. The parallel encouragement design, for example, randomizes both treatment and an encouragement that affects the mediator, allowing identification of causal mediation effects without assuming away confounding.

In surrogate terms: if you want to know whether your biomarker is confounded with the outcome—whether it's a true causal mediator or merely a correlated marker—you need to experimentally perturb the biomarker and see what happens to outcomes. Observational correlation, even from a randomized trial of the treatment, cannot answer this question.

### Robustness and Transportability

Pearl raises another requirement beyond avoiding the paradox: robustness to changes in context. A surrogate validated in one study should still work when:

- The population changes
- A new intervention affects the surrogate differently than the original treatment
- You need to predict outcome effects in a setting where outcomes cannot be measured

Pearl and Bareinboim (2011) showed that if the only difference between populations is in the surrogate's susceptibility to treatment (how much treatment moves the surrogate), you can still estimate treatment effects on outcome from the two studies—but only if the surrogate and outcome are not confounded.

This robustness requirement has practical implications. Once a biomarker is proclaimed a "surrogate," it invites efforts to manipulate it directly. Drug manufacturers rush to develop biomarker-modifying interventions. But if the original surrogate relationship depended on confounding—if the biomarker was a marker of underlying health rather than a causal mediator—then directly manipulating the biomarker will not produce the expected outcome benefits. The HDL cholesterol story is precisely this: drugs that raised HDL did not reduce cardiovascular events because HDL was not on the causal pathway.

### Synthesis: Why Surrogate Science Requires Experimental Approaches

Combining VanderWeele's structural conditions with Pearl's identification analysis and Imai's experimental designs yields a sobering conclusion: surrogate validity cannot be established from observational data alone, even observational data from randomized trials. The key quantities—whether the surrogate is a causal mediator, whether there are opposing direct effects, whether transitivity holds across patient subgroups—are not identifiable without experimental manipulation of the surrogate itself.

This explains why surrogate failures keep happening despite sophisticated statistical analyses. The analyses are answering the wrong question. They quantify associations and proportions explained, but they cannot determine whether manipulating the surrogate will change outcomes. Only experiments that actually manipulate the surrogate can answer that question—and such experiments are rarely conducted before billions are committed to Phase III trials.

## References

VanderWeele TJ (2013). "Surrogate Measures and Consistent Surrogates." *Biometrics* 69(3):561-569. [DOI:10.1111/biom.12071](https://doi.org/10.1111/biom.12071) | [PMC4221255](https://pmc.ncbi.nlm.nih.gov/articles/PMC4221255/)

Pearl J (2013). "Comments on 'Surrogate measures and consistent surrogates'." *Biometrics* 69(3):575-577. [DOI:10.1111/biom.12073](https://doi.org/10.1111/biom.12073)

Imai K, Tingley D, Yamamoto T (2013). "Experimental Designs for Identifying Causal Mechanisms." *J Royal Statistical Society A* 176(1):5-51. [DOI:10.1111/j.1467-985X.2012.01032.x](https://academic.oup.com/jrsssa/article/176/1/5/7077805)

Pearl J, Bareinboim E (2011). "Transportability of Causal and Statistical Relations: A Formal Approach." *AAAI Conference on Artificial Intelligence*.
