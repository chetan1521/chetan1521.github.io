# 🎯 Portfolio Revamp — Goal & Plan

**Site:** chetan1521.github.io (Vite + React 19 + Tailwind 4 + Framer Motion)
**Author session:** 2026-09-09

## The Goal
Turn a competent-but-templatey dark dev portfolio into a **modern, memorable site with a signature scroll-driven 3D centerpiece**, fully aligned with the latest résumé (published PyPI + npm packages, RAG-at-scale, MCP, conversational AI, Genpact client work, corrected company/contact).

Two pillars:
1. **Truthful, current content** — matches the résumé exactly.
2. **A "wow" moment** — a 3D object that assembles/dismantles as you scroll (the AI-relevant answer to the "car that dismantles" idea).

## Status: ✅ all phases complete (deployed 2026-09-09)

| # | Phase | Done |
|---|---|---|
| 1 | Content refresh | ✅ résumé-aligned; packages flagship; Genpact + internal MCP; Azure dropped |
| 2 | Design system | ✅ cyan→violet duotone, aurora bg, glass cards, gradient headings/buttons, pill tags |
| 3 | 3D centerpiece | ✅ NeuralCore scroll morph (cloud → sphere → knot → dismantle), lazy-loaded |
| 4 | Scroll choreography | ✅ existing in-view reveals + gradient scroll-progress bar |
| 5 | Perf / a11y / mobile | ✅ code-split (115KB main), reduced-motion fallback verified, single h1, labelled icon links, zero horizontal overflow, SEO + OG meta |
| 6 | Deploy | ✅ pushed to main → GitHub Actions → Pages |

*Deferred (optional, not needed): a pinned scrollytelling segment — the 3D morph already carries the scroll narrative.*

## Original phase detail

| # | Phase | What | Risk |
|---|---|---|---|
| **1** | **Content refresh** | Fix contact (new phone/email), company → Spire Technologies and Solutions, résumé-accurate dates & bullets, add **published packages** as flagship, add Genpact/client + internal-MCP, update skills (drop Azure, add NLU/Dialogue Mgmt/MCP-server-dev/Conversational AI). No visual change yet — accuracy first. | Low |
| **2** | **Design system refresh** | Modern polish: refined type scale, spacing, a richer palette + gradient accents, glassmorphism cards, better motion. Keep it tasteful, not busy. | Low |
| **3** | **3D centerpiece** | Add React-Three-Fiber. Scroll-driven hero: a structure that **assembles from scattered particles → holds → dismantles/morphs** as you scroll (see concept below). Bloom postprocessing. | Med |
| **4** | **Scroll choreography** | Section reveals, a pinned "scrollytelling" segment tying the 3D to the narrative (data → embeddings → agent). | Med |
| **5** | **Perf + a11y + mobile** | Lazy-load 3D, `prefers-reduced-motion` fallback (static hero), device-tier particle counts, mobile layout, Lighthouse pass. | Med |
| **6** | **Build + deploy** | `npm run build`, preview, push to `chetan1521.github.io` (only on your approval). | Low |

## The 3D concept (recommended)
**"Neural Core" — assemble / dismantle particle morph.** A glowing 3D lattice (an AI "core") that:
- **Hero:** assembles out of thousands of scattered particles.
- **Scroll:** explodes/dismantles and re-forms between shapes representing the story — raw **data cloud** → structured **embedding lattice** → connected **agent graph**.
- Procedural (Three.js points + shader), no heavy model files → fast, reliable, on-brand.

This captures the *"dismantle on scroll"* feeling you described, but themed to AI instead of a car. (Alternative: a literal exploded 3D model — a robot/GPU-chip — but that needs a quality model asset and is heavier.)

## Content source of truth
`repos/career-ops/cv.md` (the résumé we just finalized).

*Execute top-down. Content (Phase 1) ships even if we stop early; the 3D (Phases 3–4) is the differentiator.*
