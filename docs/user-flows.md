# ArchAI User Flows

## Primary user and journey goal

Primary user: an AI student or junior AI engineer who can work with models but needs support turning an idea into a complete, production-minded software product. The user's goal is to learn and defend key engineering decisions while producing reviewable project artifacts.

The source requirements describe a system-led, stage-gated workflow rather than an unrestricted chat. Each major stage should follow **Check → Learn → Decide → Justify → Verify → Approve → Produce artifact → Save → Advance**. The workflow owner, not generated assistant text, determines stage eligibility.

## Demo capability boundary

The approved UI/UX demo covers Discovery → Requirements & Scope → Architecture Decision → Data & Database Design. Clearly label fixtures wherever backend capabilities are unavailable. Do not claim real authentication, persistence, AI responses, RAG citations, artifact generation, or sandbox execution unless implemented and verified. The three shared-context specialist roles are an architectural accommodation and may be represented through fixtures; this document does not assert an agent backend exists. The two decision checkpoints and linked ADR/diagram and ERD/schema are fixture-backed examples unless live services are available.

## End-to-end learner journey

### 1. Registration and learner setup

1. Learner arrives at the ArchAI product intro and enters the demo. Real registration/sign-in is shown only if implemented; otherwise use a clearly labeled demo entry.
2. Demo may show a fixture learner profile; do not claim real capture/storage unless implemented (FR-01).
3. The system opens the project list or offers project creation.

**Proposal-defined:** user profile and baseline skill assessment.  
**Open:** registration provider, required fields, role model, assessment form, and persistence implementation.  
**Initial demo:** clearly labeled guest/demo entry; do not claim real account persistence.

### 2. Create project and discover requirements

1. Learner names the project and describes the problem/product idea; may provide a proposal or notes if upload is approved (FR-02, FR-03).
2. The intended workflow checks missing context and asks targeted questions about users, objectives, constraints, desired outcome, and success criteria. Demo prompts/replies are fixtures unless a live AI service exists.
3. Learner reviews a fixture project brief and separates confirmed facts, assumptions, and open questions.
4. Learner reviews scope in the demo; do not claim backend approval or durable save unless implemented.
5. The UI illustrates the Requirements stage becoming available (FR-04, FR-05, FR-08); progression and persistence are fixture-only until backed by services.

**Screen sequence:** Project list → Create project → Discovery → Requirements & scope → Project overview.

### 3. Requirements and scope approval

1. The demo displays sample functional/non-functional requirements, use cases, assumptions, constraints, risks, MVP boundary, and prioritized backlog. These are fixture content unless produced by an implemented service.
2. Learner reviews, edits, and approves the scope.
3. Unresolved questions remain visible instead of being silently converted to facts.
4. The UI may illustrate approval and unlock state using fixtures; do not claim durable records or backend stage control unless implemented.

**Proposal-defined:** requirement generation and review. **UX recommendation:** visibly label each item as confirmed, assumption, or open question.

### 4. Architecture decision

1. Demo displays prerequisite context and the active checkpoint from fixture state.
2. Architecture specialist role (fixture representation) presents example patterns with fit, pros/cons, trade-offs, and constraints (FR-06, FR-10). Show RAG sources/citations only when real retrieval metadata exists; otherwise label samples illustrative.
3. Learner selects an option and enters a rationale in the demo experience (FR-07).
4. Mentor evaluation/feedback is fixture content unless a live AI service and rubric are implemented; the passing threshold remains open.
5. Show a linked ADR and architecture diagram as demo artifacts; do not describe them as generated unless an artifact service actually generates them (FR-08, FR-09).
6. Show review state as an example only unless real QA/schema validation is connected.
7. Illustrate the next-stage state using fixtures; do not claim backend stage unlock.

### 5. Database design decision

1. Data/Database specialist role (fixture representation) uses example requirements and architecture context.
2. Demo shows relevant data/storage options and example trade-offs.
3. Learner selects and enters a rationale (checkpoint 2).
4. Mentor review/approval is fixture content unless implemented.
5. Show ERD/schema as a fixture linked to the example decision; do not claim live generation, validation, or durable versioning unless implemented.
6. Progress overview illustrates the four-stage journey using fixtures.

### 6. Continue through engineering stages

The full academic proposal journey continues through AI/ML integration, backend and APIs, frontend/UX, security/testing/quality, cloud/DevOps/release, and final review/reflection. These are outside the approved initial UI demo; if shown, label them as planned. Do not claim implemented or persisted gates unless verified.

### 7. Controlled implementation and engineering artifacts

1. A future learner may request/select a small scaffold action after required decisions are approved.
2. System explains the action and required permissions; learner confirms.
3. Tool operates only in an isolated workspace and returns files/check results (FR-12, FR-13).
4. Learner reviews the result; failures are surfaced and do not silently advance the workflow.
5. Artifact, tool outcome, and approval are recorded. Full autonomous coding or unrestricted repository/cloud changes are outside MVP.

### 8. Progress review and export

1. Learner opens project overview or progress/readiness.
2. Screen shows completed/active/locked stages, saved decisions, artifacts, unresolved risks, and competency evidence (FR-17, FR-19).
3. Learner reviews a final technical summary/readiness checklist and exports approved artifacts if supported (FR-15, FR-16, FR-21, FR-22).
4. Instructor/reviewer visibility (FR-20) is optional until roles and access rules are agreed.

## Core interaction state model

```text
Locked → Ready → In progress → Awaiting learner decision
  ↑             ↓                         ↓
Prerequisite   Needs context             Needs revision
  satisfied                               ↓
                                  Decision approved
                                           ↓
                                  Artifact review
                                           ↓
                                    Complete → Next stage Ready
```

State labels and transitions are UX recommendations derived from stage gates; exact branches, retry limits, and rubric thresholds remain open decisions.

## Key alternate and recovery paths

| Situation | Expected response |
|---|---|
| Missing project context | Ask the smallest relevant follow-up set; preserve draft answers. |
| Learner requests implementation too early | Explain the missing decision/prerequisite and link to the required stage (FR-04, FR-05, FR-12). |
| Weak or incomplete justification | Show specific missing reasoning and allow revision; do not imply a numeric score until rubric is approved. |
| Artifact validation fails | Show the failed checks and offer revision; retain the prior approved version. |
| Agent/tool error | Show progress/error state, preserve saved project state, allow retry or return to overview. |
| Session ends/reloads | Restore saved stage, decisions, and artifacts (FR-08). This needs backend confirmation. |
| Knowledge base lacks evidence | Disclose the gap and uncertainty; avoid presenting an unsupported recommendation as sourced. |
| Unsafe/destructive action | Require explicit approval and constrained permissions; log the action. |

## Demo walkthrough recommendation

Use one clearly labeled, fixture-backed document-intelligence AI web application project, as in the academic proposal's demo scenario. Walk the audience through:

1. Create project and answer a small set of discovery questions.
2. Approve the requirements brief and see assumptions called out.
3. Compare architecture choices; select and justify one; show fixture mentor feedback and the example decision state.
4. Inspect the fixture ADR/architecture diagram linked to the example decision.
5. Compare database options; justify one; inspect the fixture ERD/schema linked to that example decision.
6. Show fixture-based stage transitions and specialist-role examples. Do not imply a live shared-agent backend, persistence, or measured competency.
7. Keep scaffold execution out of the initial demo unless a real isolated tool and automated check are implemented and verified.

