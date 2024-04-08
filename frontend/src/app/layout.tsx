import { Inter, Lexend } from "next/font/google";
import { classNames } from "../utils/tailwind";
import "@/styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={classNames(
        "bg-black flex items-center justify-center h-screen",
        inter.variable,
        lexend.variable
      )}
    >
      <head>
        <title>title</title>
      </head>
      <body className="antialiased text-white">{children}</body>
    </html>
  );
}
