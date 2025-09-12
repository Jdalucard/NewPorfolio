import './globals.css';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/provider/themeProvider';
import Sidebar from '@/components/SideBar'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
        />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider>
          <div className="flex h-screen">
            <Sidebar />

            <main
              className="flex-1 overflow-auto p-6"
              style={{
                backgroundColor: 'var(--color-bg)',
                color: 'var(--color-text)',
              }}
            >
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
