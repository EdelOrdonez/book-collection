import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data: books } = await supabase
      .from("books")
      .select("*")
      .order("id", true);
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id}>
          <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {book.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
              February 17, 2024. Your best opportunity to get these right now is
              by entering raffles and waiting for the official releases.
            </p>
            <span className="text-xs bg-gradient-to-r from-[#00ccb1] to-[#7b61ff] text-white font-medium me-2 px-1 py-0.5 rounded border">
              {book.month}
            </span>
          </BackgroundGradient>
        </div>
      ))}
    </div>
  );
}
