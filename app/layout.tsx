import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Simon Stone | Portfolio",
  description: "Developer portfolio showcasing projects and creative work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="pt-16">{children}</main>
        <div className="bottom-blur" />
      </body>
    </html>
  );
}
