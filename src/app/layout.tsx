import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Toaster } from 'react-hot-toast';


export const metadata = {
  title: 'ASHGHAL | Heavy Machinery Rental Morocco',
  description: 'The #1 platform for industrial equipment rental in Casablanca and across Morocco. Excavators, Cranes, and Loaders.',
  keywords: 'BTP, Construction Morocco, Rental, Heavy Machinery, Casablanca',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Navigation />  
          <ErrorReporter />
          <Toaster position="bottom-right" reverseOrder={false} />
          {children}
          <VisualEditsMessenger />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}