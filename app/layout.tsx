import { Work_Sans } from "next/font/google";

import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DoseMate . Your Trusted Digital Solution for Improved Health / DoseMate",
  description: "Discover optimal health with DoseMate, your digital partner for improved medication adherence.",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <main className="fixed inset-0 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
