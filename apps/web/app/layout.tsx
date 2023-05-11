import { Analytics } from "@vercel/analytics/react";
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import "./App.css";

export const metadata: Metadata = {
  title: 'This is Home page',
  description: 'write here some contents'
};
 
const roboto = Roboto({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  });

  
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={roboto.className}>
            <body suppressHydrationWarning={true} >
                {children}
                <Analytics />
            </body>
        </html>
    );
}
