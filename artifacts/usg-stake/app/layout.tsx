import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unity Global Stake",
  description: "JUNTOS CONSTRUIMOS EL FUTURO — Token USG en World Chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
