import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/providers/theme.provider';
import { styles } from '@/styles/rootLayout.styles';
import { ScoreProvider } from "@/providers/score.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matching Game",
  description: "Kiril's implementation of the matching game task.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider
          options={{ key: 'css' }}>
          <ThemeProvider theme={theme}>
            <ScoreProvider>
              <main style={styles.main}>
                {children}
              </main>
            </ScoreProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
