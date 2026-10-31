import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Housing & Community Development",
  description:
    "Beast 3.0 Housing Division",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
