# ArchAI Design System

Phase 02 establishes the reusable interface foundations for ArchAI, the AI Tech Lead that helps learners make better software engineering decisions. The system supports the approved four-stage demo journey while keeping fixture data visibly separate from any future live service behavior.

## Brand and implementation boundary

- **Product:** ArchAI. The academic source project title remains in project documentation only; it is not product UI copy.
- **Logo:** use the supplied transparent logo at `public/assets/archai-logo.png`, copied from the approved source file at the workspace root. Do not recreate or recolor it.
- **Palette:** Emerald & Slate. Exact values are centralized in `styles/tokens.css`.
- **Framework:** Next.js App Router, React, and TypeScript were bootstrapped because the target workspace had no app stack. These match the Phase 01 recommendation. Backend API contracts remain unconfirmed; the showcase uses static/example content and local UI state only.
- **No live capability claims:** Demo examples are not real authentication, persistent storage, AI output, RAG retrieval/citations, artifact generation, or sandbox execution.

## Foundation tokens

Import `styles/tokens.css` through `styles/design-system.css`; screens should consume semantic variables rather than hard-coded palette colors.

| Role | Token(s) | Light value / use |
|---|---|---|
| Brand | `--deep-emerald`, `--emerald`, `--mint-emerald` | `#0F2D1F`, `#10B981`, `#34D399` |
| Neutrals | `--slate-gray`, `--off-white`, `--white`, `--slate-text`, `--muted-text` | `#E5E7EB`, `#F9FAFB`, `#FFFFFF`, `#334155`, `#64748B` |
| Page/surfaces | `--page-bg`, `--surface`, `--surface-muted`, `--surface-hover` | Off-white page; white cards; pale slate supporting surfaces |
| Text | `--text-strong`, `--text-primary`, `--text-secondary`, `--text-muted` | Dark slate hierarchy; muted text is reserved for secondary metadata |
| Borders | `--border`, `--border-subtle`, `--border-strong` | Slate borders with increasing emphasis |
| Interactive boundaries | `--control-border` | `#64748B` on light surfaces and a light slate on dark surfaces; distinguish form controls and secondary actions |
| Primary action | `--action-primary`, `--action-primary-hover`, `--action-primary-text` | Deep Emerald button with white text; Emerald is an accent, not a default fill for every control |
| Focus | `--focus-ring`, `--focus-soft` | Dark Emerald outline and mint halo (reversed appropriately in dark mode) |
| Success | `--success`, `--success-ink`, `--success-surface`, `--success-border` | `#15803D` semantic accent with a high-contrast ink/surface pair |
| Warning | `--warning`, `--warning-ink`, `--warning-surface`, `--warning-border` | `#D97706` semantic accent; dark amber ink on pale amber surface |
| Error | `--error`, `--error-ink`, `--error-surface`, `--error-border` | `#DC2626` semantic accent; dark red ink on pale red surface |
| Progress | `--progress-track`, `--progress-fill` | Slate track and Deep Emerald fill |

Emerald Green and Mint Emerald are bright accents, progress details, small icons, and focus-adjacent decoration. Avoid using them as small text on white: their contrast is insufficient. Text labels use dark semantic ink colors. Statuses combine label, color, and (where useful) a shape/icon; color is never the only signal.

### Type, spacing, and layout

- Sans serif stack: `Inter`, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif. Arabic fallback: Noto Sans Arabic, Tahoma, Arial, sans-serif. No remote font dependency is required.
- Type scale: `--text-xs` through `--text-4xl`; body uses 1rem / 1.55 line-height; headings use strong weight with restrained negative tracking.
- Weights: 400 regular, 500 medium, 600 semibold, 700 bold.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, and 64 px (`--space-*`). Use logical margin/padding properties for RTL.
- Radii: 6, 10, 14, 20 px and pill (`--radius-*`).
- Shadows: subtle surface separation, elevated menu/dialog, and toast elevation (`--shadow-*`). Avoid decorative glow.
- Containers: wide max 76rem, reading max 48rem; fixed sidebar 15rem on desktop.
- Responsive breakpoints: 430px, 850px, and 1100px. Validate at narrow phone, tablet, and desktop widths.
- Layers: base 0, sticky chrome 20, dropdown 30, tooltip 40, overlay 50, toast 60 (`--z-*`). Native dialog handles modal focus and stacking.
- Dark mode is supported through `[data-theme="dark"]` semantic overrides. Components reference semantic tokens so contrast changes with the theme.

## Component API and usage

Reusable components are exported from `components/ui/index.tsx`. Keep product-specific workflow logic outside this primitive layer.

```tsx
import { Badge, Button, Card, ProgressBar } from "@/components/ui";

<Card>
  <Badge tone="warning">Needs review</Badge>
  <ProgressBar label="Guided journey · demo fixture" value={50} />
  <Button variant="primary">Review decision</Button>
</Card>
```

| Component family | Exports | Usage notes |
|---|---|---|
| Actions | `Button`, `IconButton` | Variants primary/secondary/ghost/danger; sizes sm/md/lg; `loading` disables and announces busy; icon buttons require an accessible `label`. |
| Forms | `TextInput`, `Textarea`, `Select`, `Checkbox`, `RadioGroup` | Always provide labels. Hints/errors are associated with the input; errors set `aria-invalid`. Prefer native select/radio semantics. |
| Wayfinding | `NavItem`, `Breadcrumbs`, `Tabs`, `SegmentedControl` | Active nav sets `aria-current`; tabs support arrow/Home/End keyboard keys and tabpanel; segmented controls use pressed state. |
| Surfaces/data | `Card`, `StatCard`, `DataTable`, `EmptyState`, `ArtifactPreview` | Tables use scoped headers; artifact previews must label demo fixtures and their linked decision. |
| Status | `Badge`, `ProgressBar`, `StepIndicator` | Use explicit status text; progress includes accessible min/max/current values; current workflow step is announced. |
| Overlays/feedback | `Dialog`, `DropdownMenu`, `Tooltip`, `Toast`, `ErrorState` | Native modal dialog supports Escape and close control; details/summary keeps dropdown keyboard-operable; toast uses polite live region; errors use alert semantics. |
| Loading | `Skeleton` | Decorative placeholders are hidden from assistive technology; provide a separate loading status in real async flows. |
| Mentor content | `ChatMessage`, `AIResponse` | Assistant examples are visibly labeled “Demo response” / “Fixture”; never style sample content as a live model response. |
| Headers | `PageHeader`, `SectionHeader` | Use one page-level H1, followed by section H2s. |

For any new component, use semantic HTML first, accept `className`/native props when useful, preserve visible focus, and avoid inventing one-off brand colors.

## Accessibility and contrast

The showcase uses keyboard-focusable controls, visible focus rings, labeled inputs, fieldset/legend radio grouping, accessible progress values, tab keyboard support, native dialog semantics, live regions, semantic table headers, and reduced-motion handling. The language-direction control switches the showcase between English/LTR and Arabic/RTL; layout CSS uses logical properties where direction matters.

WCAG 2.2 AA is the target: normal text contrast at least 4.5:1, large text at least 3:1, and meaningful control boundaries/focus indicators distinguishable from adjacent colors. Calculated light-theme examples: primary body text `#334155` on Off-White `#F9FAFB` is 9.91:1; muted text `#64748B` on white is 4.76:1; white on Deep Emerald primary button is 14.84:1 (11.19:1 on hover); success, warning, error, and info badge ink/surface pairs are at least 5.91:1. Interactive form/button boundaries use `--control-border` rather than the lighter decorative border. Verify actual focus/hover/disabled and dark-theme states before product release. Do not use `#10B981` as small text on white (2.54:1).

## Showcase and validation

Run `npm run dev` and open `/` for the design-system showcase. It demonstrates the supplied brand, palette, type/spacing/radius tokens, controls, form states, navigation, tabs, segmented control, dropdown, tooltip, dialog, toast, table, empty/loading/error states, stats, badges, progress, workflow steps, chat/AI response fixture, artifact preview, dark theme, and RTL copy.

Available project checks:

```bash
npm run lint
npm run typecheck
npm run build
```

Manually verify keyboard traversal (Tab/Shift+Tab, arrows/Home/End in tabs, Enter/Space on controls, Escape in dialog), visible focus, dialog focus return, responsive widths at 375px/768px/1280px, Arabic RTL flow, and both themes. The showcase's sample data and controls are local-only; no backend is connected.

## Adding product screens

1. Import reusable primitives from `@/components/ui`; do not duplicate buttons, field styles, badges, or status patterns.
2. Use semantic tokens in CSS; add a new semantic variable before adding a product-specific literal color.
3. Build screen-level composition in feature/layout folders; keep the primitive set workflow-agnostic.
4. Label fixture-backed projects, decisions, responses, citations, and artifacts in the UI.
5. Keep the frontend adapter boundary separate from components until backend contracts are confirmed.
6. Verify keyboard, responsive, contrast, RTL, light, and dark behavior when the composition changes.
