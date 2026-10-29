import type { Metadata } from "next";
import "../styles/design-system.css";

export const metadata: Metadata = {
  title: "ArchAI Design System",
  description: "Accessible design system and component showcase for ArchAI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
