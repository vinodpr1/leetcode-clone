import "../globals.css";
import Navbar from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <Navbar/>
     <div className="mt-20">{children}</div>
    </>
  );
}
