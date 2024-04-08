"use client";
import Image from "next/image";
import background from "@/images/background.jpg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen relative flex justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image
          src={background}
          alt="gradient"
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
