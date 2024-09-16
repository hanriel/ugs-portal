import Aside from "@/components/admin/aside";
import Header from "@/components/header"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-full relative px-6 mx-auto`}>
      <Aside />
      <main className="border-box min-h-screen py-8 pb-[200px] overflow-hidden relative">
        <Header />
        {children}
      </main>
    </div>
  );
}
