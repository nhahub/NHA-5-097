# ArchAI Information Architecture

## Navigation model

ArchAI should make the active project journey the primary navigation. Global navigation provides access to the learner's projects and profile; project navigation exposes stage progress and decision/artifact examples. Keep the active stage and next required action visible across project screens. Until real services are implemented, account, project, progress, AI, citation, and artifact states shown in the UI are demo fixtures and must be labeled as such.

The official brand is ArchAI, using the approved logo and Emerald & Slate palette. The academic source title Model2Product AI is retained only for traceability, not as a user-facing name.

### Recommended global navigation

- **Projects** — list, resume, or create projects; default landing destination after sign-in.
- **Learning profile** — background, goals, and preferences (proposal-defined; full profile editing can follow MVP).
- **Help / product information** — brief explanation of the guided workflow (recommended).
- **Account** — identity and session controls (registration/auth details remain unresolved).

### Project workspace navigation

- **Overview** — project status, active stage, blockers, recent decisions/artifacts, and next action.
- **Journey** — ordered stage map with complete, active, locked, and review states.
- **Active stage** — stage-specific learning, comparison, justification, review, and approval work.
- **Artifacts** — decision-linked artifact examples, provenance, preview, and export affordance; demo outputs are fixtures until generation/export services exist.
- **Decision log** — choices and rationales in chronological order (fixture-backed in the demo; may be a panel/list rather than a separate route).
- **Progress & readiness** — completed stages, competency evidence, unresolved risks, and later-stage checklist.

## Sitemap

```text
Public
├── Sign in / Register [demo entry unless authentication is implemented]
└── Product introduction [recommended]

Learner
├── Projects
│   ├── Project list / empty state
│   ├── Create project
│   └── Project workspace
│       ├── Overview
│       ├── Journey / stage map
│       ├── Stage 1: Discovery
│       ├── Stage 2: Requirements & Scope
│       ├── Stage 3: Architecture Decision → ADR / diagram fixture
│       ├── Stage 4: Data & Database Design → ERD / schema fixture
│       ├── Later stages (roadmap / gated placeholders)
│       ├── Artifacts
│       ├── Decision log
│       ├── Progress & readiness
│       └── Controlled implementation / scaffold review [future; omit unless implemented]
├── Learning profile
└── Account

Instructor / reviewer [optional MVP; access model unresolved]
└── Learner/project review → progress, decisions, AI contribution, evidence
```

## Screen inventory and feature mapping

Status labels: **Proposal-defined** = present in project source documents (not signed-off); **UX recommendation** = interaction recommendation; **Future/optional** = outside the initial four-stage UI demo unless approved. Demo fixtures are examples, not live service behavior.

| Screen / surface | Primary job | Mapped capabilities | MVP recommendation |
|---|---|---|---|
| Product intro / demo entry | Explain ArchAI and enter the demo. | FR-01; authentication/roles remain unresolved. | Demo entry must be labeled; do not imply real authentication. |
| Project list | See example projects and enter the learner journey. | Project creation/state concepts: FR-08, FR-17. | First-class screen; populated/empty states may be fixtures, not persistence. |
| Create project | Capture title, idea, goal, and optional context. | FR-02, FR-03. | First-class screen; label fixture behavior. Upload only if format/retention are decided and implemented. |
| Learner profile | Capture baseline skills and learning preferences. | FR-01. | Small setup step or editable profile; keep optional fields lightweight. |
| Project overview | Summarize demo progress, active stage, blockers, example decisions/artifacts, and next step. | FR-05, FR-08, FR-17, FR-19. | First-class project landing screen; do not claim real persistence or competency measurement. |
| Stage map | Explain lifecycle and lock/unlock state. | FR-04, FR-05, FR-17. | Persistent project navigation and progress indicator. |
| Discovery | Present the project idea, clarify context, and distinguish facts, assumptions, and open questions. | FR-02, FR-03, FR-04. | Stage 1; prompts/replies and project state are fixtures unless services are implemented. |
| Requirements & Scope | Review the example brief, functional/non-functional requirements, risks, assumptions, and MVP boundary. | FR-04, FR-05. | Stage 2; fixture requirements and approval state must be labeled. |
| Architecture decision | Show alternatives, learner choice/rationale, example feedback, and linked ADR/diagram. | FR-06, FR-07, FR-09, FR-10, FR-11. | Decision checkpoint 1; comparison, feedback, and artifact are fixtures unless live services exist. |
| Data/database decision | Show database alternatives, learner choice/rationale, and linked ERD/schema. | FR-06, FR-07, FR-09, FR-10, FR-11. | Decision checkpoint 2; comparison and artifact are fixtures unless live services exist. |
| AI integration / backend / frontend / quality / release stages | Extend the same learn-decide-justify-verify pattern across the project. | FR-04–FR-16. | Display as upcoming/locked unless implemented. Do not create false capability. |
| Artifact library / viewer | Browse and inspect decision-linked outputs and export affordance. | FR-09, FR-21, FR-22. | Include fixture ADR/diagram and ERD/schema; do not claim generation/versioning/export without services. |
| Decision log | Inspect choices, justifications, mentor reviews, and timestamps. | FR-07, FR-08, FR-19. | Compact tab or panel in MVP. |
| Progress & competency | Review stages, strengths/weak areas, evidence, risks, and readiness. | FR-15–FR-20. | Show evidence-backed sample/live metrics; avoid unsupported score claims. |
| Scaffold approval/review | Future flow for approving a limited scaffold action and inspecting a real check/test result. | FR-12, FR-13. | Outside this UI demo unless sandbox/tooling is implemented and verified; never simulate as real execution. |
| Instructor review | Review learner progress and AI contribution. | FR-20. | Optional, requires role/access agreement. |
| Gamification | Milestones, XP, badges, completion score. | FR-18. | Should/future priority; defer visual emphasis. |

## Primary layout recommendation

For desktop project screens, use a stable application shell:

1. **Global rail/sidebar:** Projects and account navigation.
2. **Project header:** project name, demo/save status, active stage, and stage progress.
3. **Journey navigation:** collapsible ordered stage map.
4. **Main work area:** focused stage content: questions, options, rationale form, feedback, or artifact preview.
5. **Context panel:** project constraints, example evidence, decisions, and linked artifacts where relevant. Mark citations and saved state as fixture data until services exist.

On narrow screens, collapse the stage map and context panel into accessible drawers or stacked sections. The proposal requires responsive layouts and keyboard-friendly interactions.

## Specialist-role representation

The product architecture must accommodate three specialist AI roles sharing project context. The initial UI may identify role contributions using fixtures, aligned to the four-stage journey (for example Requirements, Architecture, and Data/Database specialists). This is a design accommodation only: do not show agent activity, live analysis, or shared backend state as operational unless implemented. The exact role names and orchestration remain open for team confirmation.

