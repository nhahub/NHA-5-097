"use client";

import {
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
  useEffect,
  useId,
  useRef,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  type = "button",
  children,
  disabled,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}) {
  return (
    <button
      className={`button button--${variant} button--${size} ${className}`.trim()}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading && <span className="spinner" aria-hidden="true" />}
      {children}
    </button>
  );
}

export function IconButton({
  label,
  children,
  type = "button",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: ReactNode }) {
  return (
    <button type={type} className={`icon-button ${className}`.trim()} aria-label={label} title={label} {...props}>
      <span aria-hidden="true">{children}</span>
    </button>
  );
}

type FieldProps = { label: string; hint?: string; error?: string; required?: boolean };

function FieldFrame({
  label,
  hint,
  error,
  required,
  id,
  children,
}: FieldProps & { id: string; children: ReactNode }) {
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}{required && <span className="required-mark" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error ? <p className="field__error" id={errorId}>{error}</p> : hint ? <p className="field__hint" id={hintId}>{hint}</p> : null}
    </div>
  );
}

export function TextInput({ label, hint, error, required, id: suppliedId, className = "", ...props }: InputHTMLAttributes<HTMLInputElement> & FieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <FieldFrame label={label} hint={hint} error={error} required={required} id={id}>
      <input className={`text-input ${className}`.trim()} id={id} required={required} aria-describedby={error ? errorId : hint ? hintId : undefined} aria-invalid={error ? true : undefined} {...props} />
    </FieldFrame>
  );
}

export function Textarea({ label, hint, error, required, id: suppliedId, className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <FieldFrame label={label} hint={hint} error={error} required={required} id={id}>
      <textarea className={`text-input text-area ${className}`.trim()} id={id} required={required} aria-describedby={error ? errorId : hint ? hintId : undefined} aria-invalid={error ? true : undefined} {...props} />
    </FieldFrame>
  );
}

export function Select({ label, hint, error, required, id: suppliedId, className = "", children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & FieldProps) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <FieldFrame label={label} hint={hint} error={error} required={required} id={id}>
      <select className={`text-input select-input ${className}`.trim()} id={id} required={required} aria-describedby={error ? errorId : hint ? hintId : undefined} aria-invalid={error ? true : undefined} {...props}>{children}</select>
    </FieldFrame>
  );
}

export function Checkbox({ label, hint, id: suppliedId, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string }) {
  const generatedId = useId();
  const id = suppliedId ?? generatedId;
  return (
    <label className="choice" htmlFor={id}>
      <input id={id} type="checkbox" aria-describedby={hint ? `${id}-hint` : undefined} {...props} />
          <span className="choice__copy"><span>{label}</span>{hint && <span className="field__hint" id={`${id}-hint`}>{hint}</span>}</span>
    </label>
  );
}

export function RadioGroup({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: Array<{ label: string; value: string; description?: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="choice-group">
      <legend className="field__label">{label}</legend>
      {options.map((option) => (
        <label className="choice" key={option.value}>
          <input type="radio" name={name} value={option.value} checked={value === option.value} onChange={() => onChange(option.value)} />
          <span className="choice__copy"><span>{option.label}</span>{option.description && <span className="field__hint">{option.description}</span>}</span>
        </label>
      ))}
    </fieldset>
  );
}

export function Card({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`card ${className}`.trim()} {...props}>{children}</div>;
}

export function StatCard({ label, value, change, icon }: { label: string; value: string; change?: string; icon?: ReactNode }) {
  return (
    <Card className="stat-card">
      <div className="stat-card__top"><span className="stat-card__label">{label}</span>{icon && <span className="stat-card__icon" aria-hidden="true">{icon}</span>}</div>
      <strong className="stat-card__value">{value}</strong>
      {change && <span className="stat-card__change">{change}</span>}
    </Card>
  );
}

type BadgeTone = "neutral" | "success" | "warning" | "error" | "info";
export function Badge({ tone = "neutral", children }: { tone?: BadgeTone; children: ReactNode }) {
  return <span className={`badge badge--${tone}`}><span className="badge__dot" aria-hidden="true" />{children}</span>;
}

export function ProgressBar({ value, label, showValue = true }: { value: number; label: string; showValue?: boolean }) {
  const normalized = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-block">
      <div className="progress-block__label"><span>{label}</span>{showValue && <span>{normalized}%</span>}</div>
      <div className="progress-track" role="progressbar" aria-label={label} aria-valuenow={normalized} aria-valuemin={0} aria-valuemax={100}>
        <span className="progress-track__fill" style={{ width: `${normalized}%` }} />
      </div>
    </div>
  );
}

export function NavItem({ active = false, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { active?: boolean }) {
  return <a className={`nav-item${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined} {...props}>{children}</a>;
}

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>{items.map((item, index) => <li key={`${item.label}-${index}`}>
        {index > 0 && <span className="breadcrumbs__separator" aria-hidden="true">/</span>}
        {item.href && index < items.length - 1 ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
      </li>)}</ol>
    </nav>
  );
}

export function Tabs({
  tabs,
  value,
  onChange,
}: {
  tabs: Array<{ label: string; value: string; content?: ReactNode }>;
  value: string;
  onChange: (value: string) => void;
}) {
  const baseId = useId();
  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    onChange(tabs[next].value);
    document.getElementById(`${baseId}-${tabs[next].value}`)?.focus();
  }
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Content sections">
        {tabs.map((tab, index) => <button id={`${baseId}-${tab.value}`} aria-controls={`${baseId}-panel`} key={tab.value} className="tab" role="tab" type="button" aria-selected={value === tab.value} tabIndex={value === tab.value ? 0 : -1} onClick={() => onChange(tab.value)} onKeyDown={(event) => handleKeyDown(event, index)}>{tab.label}</button>)}
      </div>
      <div className="tab-panel" id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-${value}`} tabIndex={0}>
        {tabs.find((tab) => tab.value === value)?.content}
      </div>
    </>
  );
}

export function SegmentedControl({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="segmented" role="group" aria-label={label}>
      {options.map((option) => <button className="segmented__item" key={option.value} type="button" aria-pressed={value === option.value} onClick={() => onChange(option.value)}>{option.label}</button>)}
    </div>
  );
}

export function Dialog({ open, title, description, onClose, children }: { open: boolean; title: string; description?: string; onClose: () => void; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);
  return (
    <dialog className="dialog" ref={dialogRef} aria-labelledby={titleId} onClose={onClose} onCancel={(event) => { event.preventDefault(); onClose(); }}>
      <div className="dialog__header"><div><h2 id={titleId}>{title}</h2>{description && <p>{description}</p>}</div><IconButton label="Close dialog" onClick={onClose}>×</IconButton></div>
      <div className="dialog__body">{children}</div>
    </dialog>
  );
}

export function DropdownMenu({ label, items }: { label: string; items: Array<{ label: string; onSelect: () => void }> }) {
  return (
    <details className="dropdown">
      <summary className="button button--secondary button--md">{label}<span aria-hidden="true">⌄</span></summary>
      <div className="dropdown__panel" role="group" aria-label={`${label} options`}>
        {items.map((item) => <button className="dropdown__item" type="button" key={item.label} onClick={item.onSelect}>{item.label}</button>)}
      </div>
    </details>
  );
}

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  const id = useId();
  return <span className="tooltip-wrap"><button className="tooltip-trigger" type="button" aria-describedby={id}>{children}</button><span className="tooltip" role="tooltip" id={id}>{label}</span></span>;
}

export function Toast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return <div className="toast" role="status" aria-live="polite"><span className="toast__mark" aria-hidden="true">✓</span><span>{message}</span><IconButton label="Dismiss notification" onClick={onDismiss}>×</IconButton></div>;
}

export function DataTable({ columns, rows }: { columns: string[]; rows: Array<Array<ReactNode>> }) {
  return (
    <div className="table-wrap"><table className="data-table"><thead><tr>{columns.map((column) => <th key={column} scope="col">{column}</th>)}</tr></thead><tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div>
  );
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <div className="empty-state"><div className="empty-state__icon" aria-hidden="true">◇</div><h3>{title}</h3><p>{description}</p>{action && <div className="empty-state__action">{action}</div>}</div>;
}

export function Skeleton({ width = "100%", height = "1rem", className = "" }: { width?: string; height?: string; className?: string }) {
  return <span aria-hidden="true" className={`skeleton ${className}`} style={{ width, height }} />;
}

export function ErrorState({ title, description, onRetry }: { title: string; description: string; onRetry?: () => void }) {
  return <div className="error-state" role="alert"><span className="error-state__icon" aria-hidden="true">!</span><div><h3>{title}</h3><p>{description}</p>{onRetry && <Button variant="secondary" size="sm" onClick={onRetry}>Try again</Button>}</div></div>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return <header className="page-header">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<div className="page-header__row"><div><h1>{title}</h1>{description && <p>{description}</p>}</div>{actions && <div className="page-header__actions">{actions}</div>}</div></header>;
}

export function SectionHeader({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <div className="section-header"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>;
}

export function StepIndicator({ steps, current }: { steps: Array<{ label: string; detail?: string }>; current: number }) {
  return <ol className="step-indicator" aria-label="Workflow progress">{steps.map((step, index) => {
    const state = index < current ? "complete" : index === current ? "current" : "upcoming";
    return <li className={`step step--${state}`} key={step.label} aria-current={index === current ? "step" : undefined}><span className="step__number" aria-hidden="true">{index < current ? "✓" : index + 1}</span><span className="step__text"><strong>{step.label}</strong>{step.detail && <small>{step.detail}</small>}</span></li>;
  })}</ol>;
}

export function ChatMessage({ role, name, children }: { role: "learner" | "mentor"; name: string; children: ReactNode }) {
  return <article className={`chat-message chat-message--${role}`}><div className="chat-message__avatar" aria-hidden="true">{role === "mentor" ? "A" : "L"}</div><div className="chat-message__content"><p className="chat-message__name">{name}{role === "mentor" && <Badge tone="info">Demo response</Badge>}</p><div className="chat-message__bubble">{children}</div></div></article>;
}

export function AIResponse({ title = "Tech Lead guidance", children }: { title?: string; children: ReactNode }) {
  return <section className="ai-response" aria-label={title}><div className="ai-response__header"><span className="ai-response__spark" aria-hidden="true">✳</span><h3>{title}</h3><Badge tone="neutral">Fixture</Badge></div><div>{children}</div></section>;
}

export function ArtifactPreview({ type, title, description, children }: { type: string; title: string; description?: string; children: ReactNode }) {
  return <article className="artifact-preview"><div className="artifact-preview__head"><div><span className="eyebrow">{type} · DEMO FIXTURE</span><h3>{title}</h3>{description && <p>{description}</p>}</div><Badge tone="success">Example</Badge></div><div className="artifact-preview__body">{children}</div></article>;
}
