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
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <main className="flex h-screen w-full items-stretch gap-6 p-4 md:gap-10 md:p-10 overflow-hidden">
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
