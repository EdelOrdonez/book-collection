import { useState, useEffect } from "react";
import { supabase } from "@/lib/initSupabase";
import BookDescription from "./BookDescription";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Tab from "@/components/ui/Tab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data: books } = await supabase
      .from("books")
      .select("*")
      .order("id", true);
    setBooks(books);
    if (books.length > 0) {
      setActiveTab(books[0].month); // Set the first book's month as the initial active tab
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-7xl p-10 bg-background rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <ul className="flex flex-col gap-0 text-sm font-medium text-gray-500 dark:text-gray-400 w-1/5 mb-4 md:mb-0">
            {books.map((book) => (
              <Tab
                key={book.id}
                title={book.month}
                content={<div>{book.description}</div>}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            ))}
          </ul>
          <div className="p-4 bg-background rounded-lg md:p-8 w-4/5">
            {books.map(
              (book) =>
                activeTab === book.month && (
                  <BookDescription key={book.id} book={book} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
