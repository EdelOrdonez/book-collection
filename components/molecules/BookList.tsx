import { useEffect, useState } from "react";
import { supabase } from "@/lib/initSupabase";

export default function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data: books } = await supabase
      .from("books")
      .select("*")
      .order("title", true);
    setBooks(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
