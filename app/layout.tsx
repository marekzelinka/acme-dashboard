import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import clsx from "clsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx("antialiased", inter.className)}>{children}</body>
    </html>
  );
}
