"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function Header() {
  return (
    <div className="bg-fuchsia-300 items-center p-4">
      <header className="flex justify-between">
        <div>
          <Image
            src="/balloons.webp"
            alt="Logo"
            width={50}
            height={50}
            style={{ borderRadius: "50%" }}
          />
        </div>

        <div className="flex items-center space-x-4 gap-10">
          <Link href="/" className="text-white text-lg">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg">
            About
          </Link>
          <Link href="/contact" className="text-white text-lg">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="text-white text-lg"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            LogOut
          </button>
          <Link href="/auth/signin" className="text-white text-lg">
            Log In
          </Link>
        </div>
      </header>
    </div>
  );
}
