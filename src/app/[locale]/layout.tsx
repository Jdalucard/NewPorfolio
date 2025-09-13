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
      <body className={`${poppins.className} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <div className="flex h-screen">
              <Sidebar />

              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
