import Footer from "@/components/footer";
import StoreHeader from "@/components/common/store/OnlineStoreHeader";
import StoreSidebar from "@/components/common/store/OnlineStoreSidebar";
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
