import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Açaiteria Top Sorveteria | Pratânia",
  description: "Açaí, sorvetes, crepes e muito mais. Confira o cardápio e faça seu pedido pelo WhatsApp.",
  icons: {
    icon: "/logo-top.png",
    shortcut: "/logo-top.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
