import { useState, useEffect } from "react";
import { supabase } from "@/lib/initSupabase";
import BookDescription from "./BookDescription";

const Tab = ({
  title,
  content,
  activeTab,
  handleTabClick,
}: {
  title: string;
  content: React.ReactNode;
  activeTab: string;
  handleTabClick: (tab: string) => void;
}) => {
  return (
    <li>
      <a
        href="#"
        className={`inline-flex items-center px-6 py-4 rounded-2xl w-full text-black ${
          activeTab === title
            ? "bg-primaryStrong shadow-sm"
            : "bg-background hover:bg-primary"
        } text-lg`}
        onClick={() => handleTabClick(title)}
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
        {title}
      </a>
    </li>
  );
};

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
        <div className="flex flex-col md:flex-row">
          <ul className="flex flex-col gap-0 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
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
          <div className="p-4 bg-background rounded-lg md:p-8 w-full">
            {books.map(
              (book) =>
                activeTab === book.month && (
                  <BookDescription
                    key={book.id}
                    description={book.description}
                    title={book.title}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
