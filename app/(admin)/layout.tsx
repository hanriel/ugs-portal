import Aside from "@/components/admin/aside";
import Header from "@/components/header"
import Providers from "@/components/providers";
import localFont from "next/font/local";
import "../globals.css";

const montserrat = localFont({
  src: '../montserrat.ttf',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="ru">
    <body className={montserrat.className}>
        <Providers>
          <div className={`min-h-full relative px-6 mx-auto`}>
            <Aside />
            <main className="border-box min-h-screen py-8 pb-[200px] overflow-hidden relative">
              <Header />
              {children}
            </main>
          </div>
        </Providers>
      </body>
  </html>
  );
}
