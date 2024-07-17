"use client";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <div className="bg-violet-400 p-4">
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

        <div className="flex space-x-4 gap-10">
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
          <Link href="/signup" className="text-white text-lg">
            Sign Up
          </Link>
          <Link href="/login" className="text-white text-lg">
            Log In
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
