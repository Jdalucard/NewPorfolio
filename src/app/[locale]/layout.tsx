import "../globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
import LanguageProvider from "@/provider/LanguageProvider";
import AnimatedContainer from "@/components/AnimatedContainer";

import Sidebar from "@/components/SideBar";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <main className="flex h-screen items-center justify-between gap-20 p-8 overflow-x-hidden">
              <Sidebar />
              <div className="relative shadow-theme-md custom-scrollbar flex-1 h-[90%] max-w-[100%] overflow-y-auto overflow-x-hidden p-5 rounded-lg">
                <span className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-[var(--color-primary)] rounded-tl-lg"></span>
                <span className="absolute bottom-2 right-2 w-16 h-16  border-b-4 border-r-4 border-[var(--color-primary)] rounded-br-lg"></span>

                <AnimatedContainer>{children}</AnimatedContainer>
              </div>
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
