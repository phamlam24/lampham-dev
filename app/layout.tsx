import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "./theme";


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "lampham.dev",
    template: "%s | lampham.dev",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <html
        lang="en"
        className={cx(
          "text-black bg-white dark:text-white dark:bg-black",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
          <AppRouterCacheProvider>
            <ThemeProvider theme={darkTheme}>
              <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                <Navbar />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
              </main>
            </ThemeProvider>
          </AppRouterCacheProvider>
          <script
            src="https://kit.fontawesome.com/272846c8fe.js"
            crossOrigin="anonymous"
          ></script>
        </body>
      </html>
    </StyledEngineProvider>
  );
}
