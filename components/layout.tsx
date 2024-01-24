"use client";
import { Web3Modal } from "@/context/Web3Modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Web3Modal>{children}</Web3Modal>
    </div>
  );
}
