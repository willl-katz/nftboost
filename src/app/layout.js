import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({
  weight: '600',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata = {
  title: "NFTBoost | Explore um Universo digital de colecionáveis únicos!",
  description: "Projeto criado para o curso codeboost",
  openGraph: {
    title: "NFTBoost | Explore um Universo digital de colecionáveis únicos!",
    description: "Projeto criado para o curso codeboost",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
