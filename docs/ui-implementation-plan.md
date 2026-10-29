# ArchAI UI Implementation Plan

## Repository audit and frontend recommendation

### Current state

The specified `UI & UX` directory has no application source, Git repository, build setup, framework, dependencies, router, style system, or components. The official logo file `ArchAI Green Tech Logo.png` is present at the workspace root, but not in an application assets directory; copy it intentionally into the chosen public/assets location when the app is scaffolded. The approved identity is ArchAI with the Emerald & Slate palette; exact design tokens remain Phase 02 work. Academic materials retain the original project title Model2Product AI. No code or dependencies were changed during discovery.

The proposal and requirements/planning documents recommend React/Next.js with Tailwind for the client, alongside FastAPI, a state-machine/LangGraph coordinator, PostgreSQL and pgvector/Qdrant. These are proposed stack choices; the documents do not establish that a backend or frontend has been implemented or selected by the team.

### Recommended frontend direction

If this folder is the intended application root, Next.js App Router with TypeScript and Tailwind CSS is a recommendation consistent with the project proposal, not an installed or approved stack. Keep the frontend API-independent until the team confirms backend contracts. Use clearly labeled demo fixtures for unavailable capabilities; do not represent fixtures as real authentication, persistence, AI responses, RAG citations, artifact generation, or sandbox execution. Avoid adding another framework or a complex state library before project needs are known.

Suggested structure:

```text
public/
  assets/                      # intentional copy of the official ArchAI logo
src/
  app/                         # route layouts and screen entry points
  components/
    shell/                     # global navigation, project header, stage rail
    journey/                   # stage map, gate/status, decision flow
    decisions/                 # option comparison, rationale, review feedback
    artifacts/                 # artifact list, preview, version/provenance
    progress/                  # progress and competency evidence
    ui/                        # shared accessible primitives
  features/
    projects/
    discovery/
    requirements/
    architecture/
    data-design/
    artifacts/
    progress/
  lib/
    api/                       # typed API client and service adapters
    demo-data/                 # explicit seeded demo fixtures
    domain/                    # project, stage, decision, artifact types
  styles/
```

Adapt the directory layout to the team's final repository choice before scaffolding. Route names should be human-readable and project-scoped, for example `/projects`, `/projects/new`, `/projects/[projectId]`, `/projects/[projectId]/stages/[stageId]`, `/projects/[projectId]/artifacts`, and `/projects/[projectId]/progress`.

### Architecture boundaries

- Keep domain types for `Project`, `Stage`, `Decision`, `Artifact`, `AgentRun`, and `CompetencyEvidence` explicit and typed.
- Model stage state as server-owned data once a backend is selected. Fixture-driven client states are demonstration only, not authoritative stage control or authorization.
- Use feature-level components for workflow-specific behavior and reusable primitives for buttons, forms, cards, dialogs, tabs, status indicators, and empty/loading/error states.
- Place network access behind typed service functions; avoid embedding fetch logic across screen components.
- Keep demo fixtures behind a clearly named adapter/configuration boundary and label them in the UI; do not represent fixture state as live or persistent backend state.
- Accommodate three specialist AI roles sharing project context in the architecture and UI data contracts. This is a design requirement; do not claim implemented agents or orchestration.
- Keep the first walkthrough to Discovery, Requirements & Scope, Architecture Decision, and Data & Database Design, with two decision checkpoints and fixture-backed linked artifacts (ADR/diagram and ERD/schema).
- Render diagrams/artifacts from a documented format or read-only preview; defer editing until artifact schema/versioning is known.
- Use semantic HTML, keyboard support, visible focus, sufficient contrast, labels, and responsive behavior from the start (NFR-10).
- No dependency installation is needed for this discovery phase. Select and install only after the team confirms the target root and stack.

## Reusable component inventory

| Component | Responsibility |
|---|---|
| `AppShell` | Global layout, navigation, responsive page frame. |
| `ProjectSwitcher` / `ProjectListItem` | Locate and resume learner projects. |
| `ProjectHeader` | Project identity, clearly labeled demo/save state, current stage, contextual actions. |
| `StageMap` / `StageStatus` | Ordered gates, completed/active/locked state, accessible labels. |
| `StageIntro` | Why the stage matters, prerequisites, expected output, completion conditions. |
| `MentorMessage` / `SourceCitation` | Present mentor guidance and supporting source context distinctly. |
| `QuestionForm` | Collect discovery answers and show draft state; durable saving requires a real service. |
| `RequirementList` / `AssumptionBadge` | Review requirements, assumptions, constraints, and open questions. |
| `OptionComparison` / `OptionCard` | Compare trade-offs consistently and support selection. |
| `JustificationForm` | Collect learner rationale and capture decision submission. |
| `FeedbackPanel` | Show rubric feedback, missing evidence, and revision action. |
| `ApprovalGate` | Explain prerequisites and require explicit user approval for gated actions. |
| `ArtifactCard` / `ArtifactViewer` | Preview, inspect status/version/provenance, and link an artifact to its decision. |
| `DecisionTimeline` | Show learner choice, rationale, review, and approval; fixture entries must be labeled. |
| `ProgressSummary` / `CompetencyEvidence` | Display fixture stage progress in the demo; only show measured competency indicators when backed by implemented assessment. |
| `ReadinessChecklist` | Surface unresolved testing, security, and release items. |
| `AsyncOperationState` | Show queued/running/succeeded/failed status for long AI/tool actions. |
| `EmptyState`, `ErrorState`, `LoadingState` | Consistent recovery and first-use experiences. |

## Phase 02 readiness

The documentation is ready to move into Phase 02: Design System. The brand, logo, Emerald & Slate direction, approved four-stage demo, two decision checkpoints, linked artifact examples, and fixture boundary are confirmed. Phase 02 should define exact color tokens from the approved identity, typography, spacing, semantic/status colors, accessible contrast, component states, and logo placement. The specific specialist labels, learner-justification rubric, and eventual backend contracts remain open, but they do not block design-system foundations; keep those interactions content-agnostic and fixture-labeled.

## Implementation milestones

Milestones follow the project plan's dependency gates rather than assigning dates; the source plan says dates are unconfirmed.

### M0 — Scope and design sign-off

- Confirm the demo persona, specialist-role labels, artifact formats, and guest/demo entry behavior. ArchAI, the four stages, two decision checkpoints, two linked artifact examples, official logo, and Emerald & Slate identity are confirmed.
- Validate screen flow, stage states, content labels (fact/assumption/open question), and responsive wireframes.
- Agree frontend/backend boundaries and data contracts with the team.

**Exit evidence:** reviewed screen inventory, approved four-stage flow, component/state notes, and explicit fixture/API boundary. Backend contracts remain an integration dependency, not a design-system blocker.

### M1 — Workspace foundation and project entry

- Scaffold the agreed framework and design tokens.
- Implement responsive application shell, project list/empty state, project creation, and learner setup as required.
- Add a demo-data adapter; connect project APIs only after the team confirms contracts.

**Exit evidence:** learner can enter the demo and see clearly labeled fixture state unless real auth/project services are implemented.

### M2 — First complete guided vertical slice

- Implement fixture-backed discovery and requirements review with clearly identified example/approval states.
- Implement stage map and fixture status; replace with server/API-driven prerequisites only after contracts and services exist.
- Design loading, error, retry, and resume states without claiming durable save/resume unless backend support exists.

**Exit evidence:** coherent fixture-driven demo flow. A live API/agent/persistence vertical slice is a later integration milestone and must be verified separately.

### M3 — Decision and artifact experience

- Implement architecture option comparisons and learner justification with fixture content.
- Show example feedback/revision/approval and decision history with fixture labels.
- Add fixture ADR/diagram viewer and reuse the pattern for database comparison and fixture ERD/schema.

**Exit evidence:** two demo decision checkpoints and two linked fixture artifacts. Claim live generation/persistence only after implementation evidence exists.

### M4 — Progress and demo polish

- Add project overview, fixture-based progress, and unresolved-risk examples; do not claim learner competency measurement.
- Keep scaffold execution out of scope unless isolated tooling and a real check/test are implemented and verified.
- Add accessibility/responsive refinements, seeded demo path, and final empty/loading/error details.

**Exit evidence:** coherent 4-stage learner demonstration; any unsupported future action clearly labeled.

### M5 — Integration and acceptance

- Wire UI to selected APIs, auth, persistence, knowledge citations, and artifact export only as those services are selected, contracted, and implemented.
- Validate proposal acceptance criteria with repeatable evidence alongside backend/team QA.
- Do not present UI completion as proof of RAG grounding, sandboxing, persistence, security, or deployment; those require system evidence.

**Exit evidence:** integrated demo, traceable criteria, documented limitations, and deployment handoff.

## Recommended screen implementation order

1. Project overview + stage map (sets the product's signature orientation; fixture states labeled).
2. Project creation and discovery (establishes an understandable entry point).
3. Requirements review and approval (shows structured transformation from idea to scope).
4. Architecture comparison → learner justification → feedback → ADR/diagram (hero teaching interaction).
5. Database comparison → learner justification → ERD/schema (proves reusable workflow and decision memory).
6. Progress/competency view and decision log (makes learning evidence visible).
7. Later lifecycle stages, instructor role, gamification, and export refinements according to approved scope.

This order prioritizes a complete, compelling demonstration over disconnected screen mockups and mirrors the planning document's recommendation to build vertical slices.

## Technical risks and dependencies

| Risk / dependency | Frontend implication / mitigation |
|---|---|
| No application repo/codebase exists in target | Framework recommendation is provisional until team confirms project root and repository. The official logo is at the workspace root and needs an intentional assets copy. |
| Proposal stack is not a selected or implemented stack | Confirm Next.js/React/Tailwind with team; do not state FastAPI/database APIs as available. |
| Academic requirements baseline awaits stakeholder validation | Keep general priorities and acceptance rules traceable to the draft. The initial four-stage UI demo scope is confirmed; exact specialist labels and rubric behavior remain open. |
| AI response schemas and agent orchestration unknown | Define typed response contracts before building complex chat/agent UI; support visible failure states. |
| Rubric and gate thresholds unresolved | UI should handle pass/retry/review states without inventing score semantics. |
| Authentication/roles unresolved | Do not create instructor dashboards or permission claims without a user/access model. |
| Upload privacy/retention rules unresolved | Keep upload optional/disabled until accepted formats, limits, storage, and deletion are defined. |
| Persistence and artifact versioning unconfirmed | Avoid implying autosave, durable history, version history, or export until APIs support them. |
| Sandbox security is a system responsibility | Treat frontend approval as a user action only; server must authorize and isolate tools. |
| RAG source quality and provenance uncertain | Display source/version only when supplied by backend; provide an explicit evidence-gap state. |
| Competency score validity unproven | Show evidence and feedback; avoid unsupported numerical learning claims. |
| Scope growth toward ten agents and full lifecycle | Anchor demo at four consecutive stages and three shared-state specialists, with expansion gated by acceptance. |

