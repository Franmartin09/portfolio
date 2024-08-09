import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Fran Martin",
  description: "Portfolio",
  icons: {
    icon: '/favicon/favicon.ico',

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <script

            dangerouslySetInnerHTML={{
              __html:`
               function updateTheme() {
                    const colorTheme = localStorage.getItem('color-theme');
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    
                    if (colorTheme === 'dark' || (!colorTheme && prefersDark)) {
                      document.documentElement.classList.add('dark');
                      document.getElementById('toggle').checked = true; // Correctly setting the checkbox to checked
                    } else {
                      document.documentElement.classList.remove('dark');
                      document.getElementById('toggle').checked = false; // Correctly setting the checkbox to unchecked
                    }
                  }
                    
                  updateTheme();

                  document.getElementById('toggle').addEventListener('change', (event) => {
                    const isChecked = event.target.checked;
                    console.log("sdfsdfs");
                    if (isChecked) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('color-theme', 'dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('color-theme', 'light');
                    }
                  });
              `,
            }}
          />
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
