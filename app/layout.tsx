import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlashDrop Express | Toronto & GTA Courier Service",
  description: "Fast, reliable same-day and next-day courier delivery across Toronto and the GTA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
