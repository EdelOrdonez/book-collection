"use client";
import Hero from "@/components/molecules/Hero";
import BookList from "@/components/molecules/BookList";
import Navbar from "@/components/molecules/Navbar";
import Tabs from "@/components/molecules/Tabs";
import Header from "@/components/molecules/Header";
import Footer from "@/components/molecules/Footer";

export default function Home() {
  return (
    <div className="bg-background h-screen overflow-hidden">
      {/* <Hero /> */}
      {/* <BookList /> */}
      <Navbar />
      <Header />
      <Tabs />
      <Footer />
    </div>
  );
}
