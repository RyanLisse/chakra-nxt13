"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Navbar />

            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
