import "../globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/provider/themeProvider";
import LanguageProvider from "@/provider/LanguageProvider";

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <main className="flex h-screen items-center justify-between gap-20 p-8">
              <Sidebar />
              <div className="custom-scrollbar flex-1 h-[90%] max-w[100%] overflow-y-auto p-5 border border-gray-300 dark:border-gray-700 rounded-lg">
                {children}
              </div>
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
