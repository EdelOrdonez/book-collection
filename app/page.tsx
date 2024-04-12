"use client";
import Hero from "@/components/molecules/Hero";
import BookList from "@/components/molecules/BookList";
import { PinContainer, PinPerspective } from "@/components/ui/3d-pin";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Home() {
  return (
    <div>
      <Hero />
      <BookList />
    </div>
  );
}
