# ArchAI Product Scope

## Purpose and evidence status

**ArchAI is the official product name and brand.** The academic proposal uses the original project title **Model2Product AI — AI Tech Lead Mentor & Project Delivery Simulator**; retain that title in academic traceability and source references only. The approved visual identity is the official ArchAI logo and Emerald & Slate palette.

The target `UI & UX` workspace has no application source code, Git metadata, package manifest, framework, routes, styles, or components. The official logo file is present at the workspace root, but not yet in an application assets directory; copy it intentionally when the app structure is established. Project documents are in the parent `Graduation Project` folder and are context, not an existing frontend repository. The proposed Next.js, TypeScript, and Tailwind stack remains a recommendation; no dependencies were installed.

The proposal, requirements baseline, and project plan are source documents, but the requirements baseline explicitly says stakeholder validation and supervisor approval are pending. In this document, **proposal-defined** means stated in those documents, not formally approved or already implemented. Requirements marked as analyst recommendations or open decisions remain separate.

## Product definition

ArchAI guides AI students and junior AI engineers from an AI product idea toward a production-minded software design. The intended experience is a system-led Tech Lead mentor: clarify context, teach concepts, compare engineering options, ask the learner to choose and justify, check understanding, and connect approved decisions to engineering artifacts. The initial UI/UX demo represents this experience with clearly labeled demo fixtures wherever backend capabilities are unavailable. It is not an unrestricted chatbot or autonomous code generator.

### Product principles from the proposal

- Lead before build; explain before automate; verify before advance.
- Make the current stage, its purpose, requirements, and next action visible.
- Treat the learner's decisions and reasoning as first-class project records.
- Ground technical guidance in curated knowledge and show source context when available.
- Keep stage readiness and tool permissions under deterministic workflow control.
- Generate useful engineering artifacts from approved decisions.

## Proposal-defined requirements

These requirements come from the graduation proposal and draft requirements analysis. Their listed priorities in the requirements analysis are analyst interpretations, not signed-off priority decisions.

| Capability | Proposal-defined behavior | Traceability |
|---|---|---|
| Learner profile | Capture background, experience, learning preferences, and goals; baseline assessment is proposed. | FR-01 |
| Project discovery | Accept a natural-language idea; ask focused questions about users, objectives, constraints, and success criteria. Upload/context extraction is proposed. | FR-02, FR-03 |
| Guided stages | Tech Lead orchestrator controls stage order, required decisions, completion rules, and stage locks. | FR-04, FR-05 |
| Engineering comparisons | Present realistic alternatives with fit, trade-offs, pros/cons, and constraints. | FR-06, FR-11 |
| Learning checkpoints | Require learner selection and justification; evaluate reasoning and provide actionable feedback before high-impact actions. | FR-07 |
| Persistent project memory | Retain project constraints, decisions, artifacts, and history across sessions. | FR-08 |
| Agents and grounding | Specialists share project context; curated RAG informs recommendations and exposes source context/uncertainty. | FR-10, FR-11 |
| Engineering artifacts | Generate diagrams, schemas, API plans, tests, and other structured outputs from approved decisions. | FR-09, FR-21 |
| Safe implementation | Provide implementation help after approval and create/modify a small scaffold in an isolated workspace with checks. | FR-12, FR-13 |
| Work planning and quality | Suggested tasks/roles, security/testing checklists, and deployment-readiness planning. | FR-14, FR-15, FR-16 |
| Progress and learning evidence | Show stage progress, decisions, competency indicators, and weak areas; proposal also includes milestones/XP/badges. | FR-17, FR-18, FR-19 |
| Instructor visibility | Provide progress and AI-contribution visibility for instructors/mentors. | FR-20 |
| Export and repository | Export artifacts/documentation and provide a GitHub integration or export-ready structure. | FR-21, FR-22 |

## Graduation MVP boundary

### MVP acceptance slice from the source documents

The academic proposal defines ten minimum acceptance checks. The four-member project plan sets a minimum project-demo floor; the approved UI/UX demo will represent this as one coherent learner journey, without claiming that the corresponding backend services are implemented:

- Create an AI-enabled web application project and complete at least four consecutive guided stages.
- Enforce stage order and block implementation until required decisions are approved.
- Accommodate three specialist AI roles sharing project context in the product architecture. This is a design requirement, not a claim that agents or backend orchestration exist.
- Show two learner decision checkpoints: Architecture Decision and Data & Database Design.
- Show two linked engineering artifacts, such as an Architecture Decision Record/diagram and an ERD/schema. Unless backed by an implemented service, represent both and their relationship to decisions using clearly labeled demo fixtures; do not call them live-generated.
- Use demo fixtures for AI responses, RAG evidence/citations, account state, persistence, and tool outcomes unless each capability is implemented and verified.
- Keep scaffold execution/sandboxing outside the demonstrated capability unless an isolated backend tool and automated check are actually available.
- The academic project acceptance goal includes a working web application with tests and documentation; deployment and repository evidence are project-level targets, not assumed current capabilities of this UI workspace.

### Approved UI/UX demo boundary

Build a single learner path around one seeded example project across four consecutive stages: **Discovery → Requirements & Scope → Architecture Decision → Data & Database Design**. Include two decision checkpoints (architecture and database), two linked artifacts (ADR/diagram and ERD/schema), and visible stage progress. Clearly label fixtures anywhere backend capabilities are unavailable. Do not claim real authentication, persistence, AI responses, RAG citations, artifact generation, or sandbox execution unless implemented. Other lifecycle stages may be shown as future roadmap items, not as completed functionality.

### Approved brand application

Use the official ArchAI logo and Emerald & Slate palette for the design system. The logo file `ArchAI Green Tech Logo.png` is currently at the workspace root, not an application assets directory. Its later copy into a chosen public/assets location is an intentional setup step. Exact color tokens, typography, and component styling remain Phase 02 design-system work; do not infer unapproved hex values from the palette name alone.

### Outside the graduation MVP unless separately approved

- Training a foundation model or shipping custom fine-tuned weights.
- Autonomous full-product coding or unrestricted IDE, repository, cloud, or deployment actions.
- All 8–10 envisioned specialist roles or all software domains.
- Deep IDE integration, enterprise analytics, organization-specific standards, or full team mode.
- Commercial SaaS maturity, advanced gamification, or broad institutional administration.
- Features mentioned in the source pitch/presentation but not established in the proposal's acceptance slice.

## UX recommendations (not confirmed requirements)

- Use a project workspace with visible stage navigation, a focused work area, and a contextual evidence/artifact panel. Persistence is only a visual state in fixtures until implemented.
- Give each decision a reusable pattern: context and constraints, option comparison, learner choice, justification, mentor feedback, approval state, and linked artifact.
- Make blocked, in-progress, review-needed, and complete states visually distinct and explain why an action is blocked.
- Separate learner decisions from fixture/sample mentor suggestions. Show source citations only when backed by actual source metadata; fixture citations must be visibly marked as examples.
- Use clearly labeled seeded fixtures and empty/loading/error states so the demo remains understandable without live AI responses.
- Treat upload, rubric scoring, instructor access, and export as permission-sensitive flows only after policy is agreed.
- Avoid XP/badges as the primary progress signal; prioritize completed reasoning checkpoints and evidence.

## Future product vision (not initial MVP)

The proposal roadmap includes role-specific learning paths, continuously reviewed technical knowledge, IDE integration, team task allocation/PR support, institution-defined standards, advanced incident simulations, and evidence-based career portfolios. These should remain roadmap items until separately prioritized and designed.

## Remaining open questions

| ID | Open question / assumption | Why it matters |
|---|---|---|
| O-01 | Which three specialist roles will the product architecture name, and how will shared project context be represented? | Role labels and interaction copy; roles must not be presented as deployed agents. |
| O-02 | What rubric and pass/retry behavior will govern learner justifications? | Determines decision review behavior and competency claims. |
| O-03 | Which user roles, if any, will register, own projects, view, grade, or export them? | Authentication and authorization UI; demo auth remains fixture-only unless implemented. |
| O-04 | Are uploads in scope? Which formats, limits, retention, and deletion rules apply? | Upload UX, privacy, and safety. |
| O-05 | Are ADR/diagram and ERD/schema the approved artifact formats, and what edit/export behavior is required? | Artifact viewer and relationships; demo artifacts are fixtures unless generated by a real service. |
| O-06 | Which backend/API contracts, persistence, and deployment choices are selected and available? | Integration boundary and transition away from fixtures. |
| O-07 | Which LLM, knowledge sources, budget, and response-time target are approved? | AI/RAG behavior and future loading/progress states. |
| O-08 | Is instructor visibility part of a later phase, and what access rules would apply? | Instructor route and permission model. |
| O-09 | What numeric accessibility, performance, privacy, and rubric thresholds will be used? | Quality acceptance criteria. |

## Source documents reviewed

Stored one folder above this empty UI/UX workspace:

- `Model2Product_AI_Graduation_Project_Proposal.pdf` — primary academic source under the original project title; lifecycle, FR-01–FR-22, proposed agent roles, demo scenario, and acceptance checks. ArchAI is the official product brand.
- `Model2Product_AI_Requirements_Gathering.pdf` — explicitly proposal-derived draft; validation pending; includes analyst-prioritized requirements and unresolved decisions.
- `Model2Product_Project_Plan_4_Members.pdf` — MVP delivery boundary and minimum demo floor (three specialists, four stages, two decisions/artifacts, isolated scaffold/test).
- `Model2Product_AI_Literature_Review.pdf` — pedagogical/technical rationale and caution that learning impact is a hypothesis to test.
- `Model2Product-AI.pdf`, `graduation project idea presentations.docx`, `New Text Document.txt`, and `presntation.html` — supplementary concept/presentation material; some contents are aspirational or inconsistent with the proposal and were not treated as binding scope.
- `Project Documentation.pdf` and `projects_instructions_Final - For Trainees.pdf` — general graduation project deliverable guidance.

