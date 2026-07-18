import Footer from "@/components/footer";
import StoreHeader from "@/components/store/StoreHeader";
import StoreSidebar from "@/components/store/StoreSidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreHeader />
      <StoreSidebar />
      {children}
      <Footer />
    </div>
  );
}
