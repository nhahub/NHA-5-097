"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AIResponse,
  ArtifactPreview,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  ChatMessage,
  Checkbox,
  DataTable,
  Dialog,
  DropdownMenu,
  EmptyState,
  ErrorState,
  IconButton,
  NavItem,
  PageHeader,
  ProgressBar,
  RadioGroup,
  SectionHeader,
  SegmentedControl,
  Select,
  Skeleton,
  StatCard,
  StepIndicator,
  Tabs,
  TextInput,
  Textarea,
  Toast,
  Tooltip,
} from "@/components/ui";

const workflowSteps = [
  { label: "Discovery", detail: "Clarify the problem" },
  { label: "Requirements", detail: "Define scope" },
  { label: "Architecture", detail: "Decision checkpoint" },
  { label: "Data design", detail: "Decision checkpoint" },
];

export default function DesignSystemPage() {
  const [tab, setTab] = useState("overview");
  const [segmented, setSegmented] = useState("all");
  const [radio, setRadio] = useState("modular");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Demo interaction complete. No backend data was changed.");
  const [rtl, setRtl] = useState(false);
  const [dark, setDark] = useState(false);

  function notifyDemo(message = "Demo interaction complete. No backend data was changed.") {
    setToastMessage(message);
    setToastVisible(true);
  }

  async function copyTokens() {
    const reference = "--deep-emerald: #0F2D1F; --emerald: #10B981; --mint-emerald: #34D399; --slate-gray: #E5E7EB; --off-white: #F9FAFB;";
    try {
      await navigator.clipboard.writeText(reference);
      setToastMessage("Core brand tokens copied to the clipboard.");
    } catch {
      setToastMessage("Token reference is listed in the Foundations section.");
    }
    setToastVisible(true);
  }

  return (
    <div className="app" data-theme={dark ? "dark" : "light"} dir={rtl ? "rtl" : "ltr"} lang="en">
      <aside className="sidebar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ArchAI design system home">
          <Image src="/assets/archai-logo.png" alt="ArchAI" width={44} height={44} priority />
          <span><strong>ArchAI</strong><small>Design system</small></span>
        </a>
        <div className="sidebar__label">FOUNDATIONS</div>
        <nav className="sidebar__nav">
          <NavItem href="#foundations" active><span aria-hidden="true">◈</span> Foundations</NavItem>
          <NavItem href="#components"><span aria-hidden="true">▦</span> Components</NavItem>
          <NavItem href="#patterns"><span aria-hidden="true">⌘</span> Patterns</NavItem>
        </nav>
        <div className="sidebar__foot"><span className="status-led" />Phase 02 · Design system</div>
      </aside>

      <main className="main" id="top">
        <header className="topbar">
          <Breadcrumbs items={[{ label: "ArchAI", href: "#top" }, { label: "Design system" }]} />
          <div className="topbar__tools">
            <button className="utility-button" type="button" onClick={() => setRtl((value) => !value)} aria-pressed={rtl}>{rtl ? "English" : "العربية"}</button>
            <button className="utility-button" type="button" onClick={() => setDark((value) => !value)} aria-pressed={dark}>{dark ? "Light mode" : "Dark mode"}</button>
          </div>
        </header>

        <div className="content">
          <PageHeader
            eyebrow="PHASE 02 · FOUNDATIONS & COMPONENTS"
            title="ArchAI design system"
            description="A calm, dependable interface for making better engineering decisions. Use these foundations and components to build a coherent product experience."
            actions={<Button variant="secondary" onClick={copyTokens}>Copy core tokens</Button>}
          />

          <div className="demo-notice"><Badge tone="info">Showcase fixtures</Badge><span>Local example content only. No account, AI, retrieval, storage, or artifact service is connected.</span></div>

          <section id="foundations" className="showcase-section">
            <SectionHeader title="Brand foundations" description="Approved identity, color roles, and type for the ArchAI workspace." />
            <div className="brand-panel">
              <div className="brand-panel__logo"><Image src="/assets/archai-logo.png" alt="Official ArchAI logo" width={190} height={190} /></div>
              <div className="brand-panel__copy"><span className="eyebrow">AI TECH LEAD</span><h2>Think clearly.<br /><em>Build with confidence.</em></h2><p>ArchAI helps learners work through engineering decisions with structure, context, and supportive guidance.</p><div className="brand-panel__meta"><Badge tone="success">Emerald & Slate</Badge><Badge tone="neutral">Professional · Supportive · Clear</Badge></div></div>
            </div>

            <div className="token-grid token-grid--colors" aria-label="Color palette">
              <ColorToken name="Deep Emerald" hex="#0F2D1F" className="swatch--deep" />
              <ColorToken name="Emerald Green" hex="#10B981" className="swatch--emerald" />
              <ColorToken name="Mint Emerald" hex="#34D399" className="swatch--mint" />
              <ColorToken name="Slate Gray" hex="#E5E7EB" className="swatch--slate" />
              <ColorToken name="Off-White" hex="#F9FAFB" className="swatch--offwhite" />
              <ColorToken name="Slate Text" hex="#334155" className="swatch--text" />
              <ColorToken name="Muted Text" hex="#64748B" className="swatch--muted" />
              <ColorToken name="Light Emerald" hex="#D1FAE5" className="swatch--light-emerald" />
              <ColorToken name="Success" hex="#15803D" className="swatch--success" />
              <ColorToken name="Warning" hex="#D97706" className="swatch--warning" />
              <ColorToken name="Error" hex="#DC2626" className="swatch--error" />
            </div>

            <div className="foundation-grid">
              <Card className="foundation-card"><span className="eyebrow">TYPE SCALE</span><div className="type-sample type-sample--display">Engineering, made clearer.</div><div className="type-sample type-sample--h1">Heading one</div><div className="type-sample type-sample--h2">Heading two</div><div className="type-sample type-sample--body">Readable body text supports focused decisions and clear next steps.</div><div className="type-sample type-sample--small">Caption · Inter / system sans · Arabic fallbacks enabled</div></Card>
              <Card className="foundation-card"><span className="eyebrow">SPACING & SHAPE</span><SpacingTokens /><div className="shape-row"><span className="shape-sample shape-sample--sm">4 px</span><span className="shape-sample shape-sample--md">8 px</span><span className="shape-sample shape-sample--lg">16 px</span><span className="shape-sample shape-sample--pill">Pill</span></div><p className="field__hint">8 px spacing rhythm · 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64</p></Card>
            </div>
          </section>

          <section id="components" className="showcase-section">
            <SectionHeader title="Components" description="Composable, keyboard-friendly building blocks for product screens." />
            <div className="showcase-card"><SectionHeader title="Buttons" description="Clear hierarchy, visible focus, and a distinct destructive action." /><div className="component-row"><Button>Primary action</Button><Button variant="secondary">Secondary</Button><Button variant="ghost">Quiet action</Button><Button variant="danger">Delete project</Button><Button disabled>Disabled</Button><Button loading>Working</Button><IconButton label="More options">···</IconButton><Tooltip label="An accessible tooltip with a keyboard focus target.">ⓘ</Tooltip></div></div>

            <div className="showcase-grid showcase-grid--2">
              <div className="showcase-card"><SectionHeader title="Form controls" description="Labels, hints, validation, and native keyboard behavior." /><div className="form-grid"><TextInput label="Project name" placeholder="e.g. Contract intelligence" hint="Choose a short, recognizable name." /><Select label="Project stage" defaultValue="architecture"><option value="discovery">Discovery</option><option value="requirements">Requirements & Scope</option><option value="architecture">Architecture Decision</option><option value="data">Data & Database Design</option></Select><Textarea label="Decision rationale" placeholder="Explain how this option fits your constraints…" rows={3} /><TextInput label="API key" type="text" defaultValue="Invalid value" error="Check the format and try again." /><Checkbox label="I understand this is a demo fixture" hint="This sample interaction does not save to a backend." defaultChecked /><RadioGroup label="Architecture style" name="architecture" value={radio} onChange={setRadio} options={[{ label: "Modular monolith", value: "modular", description: "One deployable with clear boundaries." }, { label: "Microservices", value: "services", description: "Independent services with added operations cost." }]} /></div></div>
              <div className="showcase-card"><SectionHeader title="Navigation & selection" description="Page context, wayfinding, tabs, and compact filters." /><nav aria-label="Example project navigation" className="example-nav"><NavItem href="#components" active>Overview</NavItem><NavItem href="#patterns">Architecture</NavItem><NavItem href="#patterns">Artifacts</NavItem></nav><div className="showcase-spacer"><Tabs tabs={[{ label: "Overview", value: "overview", content: <p>Project overview and next step · demo fixture.</p> }, { label: "Decisions", value: "decisions", content: <p>Two example decision checkpoints · demo fixture.</p> }, { label: "Artifacts", value: "artifacts", content: <p>ADR/diagram and ERD/schema examples · demo fixtures.</p> }]} value={tab} onChange={setTab} /></div><div className="showcase-spacer"><SegmentedControl label="Filter projects" options={[{ label: "All", value: "all" }, { label: "Active", value: "active" }, { label: "Done", value: "done" }]} value={segmented} onChange={setSegmented} /></div><div className="showcase-spacer"><DropdownMenu label="Actions" items={[{ label: "View project brief example", onSelect: () => notifyDemo("Example brief opened locally. No project service is connected.") }, { label: "Preview export action", onSelect: () => notifyDemo("Export is a preview only; no file was created.") }]} /></div></div>
            </div>

            <div className="showcase-card"><SectionHeader title="Cards, status & progress" description="Use semantic status, restrained accent color, and clear progress context." /><div className="showcase-grid showcase-grid--3"><StatCard label="Stages complete" value="2 of 4" change="Demo fixture" icon="✓" /><StatCard label="Decision checkpoints" value="2" change="Architecture · Data" icon="◇" /><StatCard label="Linked artifacts" value="2" change="ADR · ERD · Demo fixture" icon="▤" /></div><div className="component-row component-row--badges"><Badge>Not started</Badge><Badge tone="info">In review</Badge><Badge tone="success">Complete</Badge><Badge tone="warning">Needs attention</Badge><Badge tone="error">Blocked</Badge></div><div className="progress-examples"><ProgressBar label="Guided journey · demo fixture" value={50} /><ProgressBar label="Architecture decision" value={100} /></div></div>

            <div className="showcase-grid showcase-grid--2">
              <div className="showcase-card"><SectionHeader title="Workflow & conversation" description="Guide the learner through the next decision without hiding the reasoning." /><StepIndicator steps={workflowSteps} current={2} /><div className="chat-stack"><ChatMessage role="learner" name="You">We expect a small team and need a clear delivery path for the first release.</ChatMessage><ChatMessage role="mentor" name="ArchAI Tech Lead">A modular monolith could reduce early operational overhead while preserving boundaries for later change.</ChatMessage></div><AIResponse><p>Demo guidance: compare the current team size, operational capacity, and likely change boundaries before choosing.</p><p className="field__hint">Sample response · not generated by a live model</p></AIResponse></div>
              <div className="showcase-card"><SectionHeader title="Artifacts & feedback" description="Keep decision context connected to its reviewable engineering output." /><ArtifactPreview type="Architecture decision record" title="ADR-001 · Service shape" description="Linked to the architecture decision checkpoint."><div className="mini-diagram"><span>Web client</span><b aria-hidden="true">→</b><span>Application core</span><b aria-hidden="true">→</b><span>PostgreSQL</span></div><p className="artifact-caption">Example artifact · fixture content</p></ArtifactPreview></div>
            </div>

            <div className="showcase-grid showcase-grid--2">
              <div className="showcase-card"><SectionHeader title="Tables & empty states" description="Maintain scanability and provide a useful next action." /><DataTable columns={["Stage", "Status", "Output"]} rows={[["Architecture", <Badge tone="success" key="done">Complete</Badge>, "ADR + diagram"], ["Data design", <Badge tone="info" key="review">In progress</Badge>, "ERD / schema"]]} /><div className="showcase-spacer"><EmptyState title="No risks recorded" description="Open questions will appear here when they are part of the project brief." action={<Button variant="secondary" size="sm" onClick={() => notifyDemo("The example brief contains no recorded risks.")}>Review brief example</Button>} /></div></div>
              <div className="showcase-card"><SectionHeader title="Loading & recovery" description="Explain what is happening and give people a way forward." /><div className="skeleton-stack"><Skeleton height="1.2rem" width="45%" /><Skeleton height=".9rem" width="86%" /><Skeleton height=".9rem" width="68%" /><Skeleton height="5rem" /></div><div className="showcase-spacer"><ErrorState title="Could not load this example" description="The fixture preview is unavailable. Try again or return to the overview." onRetry={() => notifyDemo("Fixture preview remains unavailable; no request was sent.")} /></div></div>
            </div>

            <div className="showcase-card"><SectionHeader title="Data table" description="Clear headers, comfortable density, and visible row separators." /><DataTable columns={["Artifact", "Decision", "State", "Updated"]} rows={[["ADR-001 · Service shape", "Architecture", <Badge tone="success" key="approved">Reviewed example</Badge>, "Demo fixture"], ["ERD-001 · Core data", "Database", <Badge tone="info" key="draft">Example</Badge>, "Demo fixture"]]} /></div>
          </section>

          <section id="patterns" className="showcase-section">
            <SectionHeader title="Interaction patterns" description="Dialogs, notifications, and language direction using the same core tokens." />
            <div className="showcase-card"><div className="component-row"><Button variant="secondary" onClick={() => setDialogOpen(true)}>Open dialog</Button><Button onClick={() => notifyDemo()}>Show toast</Button><p className="field__hint">Current locale preview: {rtl ? "Arabic · RTL" : "English · LTR"}</p></div>{rtl && <div className="rtl-sample" lang="ar" dir="rtl"><strong>مرحبًا بك في ArchAI</strong><p>يساعدك المرشد التقني على مقارنة الخيارات الهندسية واتخاذ قرارات أوضح.</p><Button>متابعة الرحلة</Button></div>}</div>
          </section>

          <footer className="footer"><span>ArchAI · Design system foundation</span><span>Emerald & Slate · WCAG AA contrast targets</span></footer>
        </div>
      </main>

      <Dialog open={dialogOpen} title="Review this decision" description="A focused, dismissible modal with native keyboard behavior." onClose={() => setDialogOpen(false)}><p>Compare the alternatives against project constraints, then record your own rationale.</p><div className="dialog__actions"><Button variant="secondary" onClick={() => setDialogOpen(false)}>Cancel</Button><Button onClick={() => { setDialogOpen(false); notifyDemo("Dialog action previewed locally; no decision was saved."); }}>Continue</Button></div></Dialog>
      {toastVisible && <div className="toast-dock"><Toast message={toastMessage} onDismiss={() => setToastVisible(false)} /></div>}
    </div>
  );
}

function ColorToken({ name, hex, className }: { name: string; hex: string; className: string }) {
  return <div className="color-token"><span className={`color-token__swatch ${className}`} /><span className="color-token__name">{name}</span><code>{hex}</code></div>;
}

function SpacingTokens() {
  return <div className="spacing-tokens" aria-label="Spacing token samples">{[4, 8, 12, 16, 24, 32, 48].map((space) => <div className="spacing-token" key={space}><span style={{ width: `${space * 1.4}px` }} /><code>{space}</code></div>)}</div>;
}
