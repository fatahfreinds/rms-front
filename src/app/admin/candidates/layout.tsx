import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Generated by Admin",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className="lg:ms-3 w-full h-full flex"> 
    {children}    
  </main>
  );
}
