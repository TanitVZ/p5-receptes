import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className={cn("h-16 p-4  bg-blue-800 text-white shadow-lg")}>
      <Link href="/">
        <div id="logo" className="font-extrabold text-xl text-white mr-4">
          Receptes de l'àvia
        </div>
      </Link>
    </header>
  );
}
