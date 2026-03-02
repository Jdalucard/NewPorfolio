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
  params: Promise<{
    locale: string;
  }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <main className="flex flex-col lg:flex-row h-screen w-full gap-4 lg:gap-10 p-4 lg:p-10 overflow-hidden bg-[var(--color-bg)]">
              <Sidebar />
              <div className="relative flex-1 overflow-y-auto overflow-x-hidden rounded-3xl">
                <AnimatedContainer>{children}</AnimatedContainer>
              </div>
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
