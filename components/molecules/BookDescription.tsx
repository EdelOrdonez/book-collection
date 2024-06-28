import React from "react";
import Image from "next/image";

interface Book {
  title: string;
  description: string;
  author: string;
  genres: string[];
  rating: number;
  month: string;
  cover_link: string;
  quote: string;
}

const imageUrl =
  "https://glrapmnekaodxikntunp.supabase.co/storage/v1/object/sign/Books/test-portada.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJCb29rcy90ZXN0LXBvcnRhZGEuanBnIiwiaWF0IjoxNzE5MzM5NzcwLCJleHAiOjE3NTA4NzU3NzB9.SZwPGuCIRr2Ck8fgtvs4KVeDfHw08ivi-Hkal8Y0eRk&t=2024-06-25T18%3A22%3A51.640Z";

const GenrePill = ({ genre }: { genre: string }) => {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-black text-xs font-medium mr-2">
      {genre}
    </span>
  );
};

const text = `“Life before <span style="color: #84b898;">Death</span>.</br> Strength before <span style="color: #84b898;">Weakness</span>.</br> Journey before <span style="color: #84b898;">Destination</span>.”`;

const BookDetails = ({
  title,
  description,
  author,
  genres,
  quote,
}: {
  title: string;
  description: string;
  author: string;
  genres: string[];
  quote: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center pl-4">
        <h2 className="text-black text-2xl font-bold mb-2 text-center w-full font-playwrite">
          {title}
        </h2>
        <div className="flex justify-center w-full mt-2 mb-2">
          <GenrePill genre="Fiction" />
          <GenrePill genre="Horror" />
          <GenrePill genre="Drama" />
        </div>
        <span className="text-sm sm:text-base text-gray-700 mr-2 text-center mt-2 mb-2 font-playwrite">
          {author}
        </span>
        <p className="text-sm sm:text-lg text-black mb-2 text-center mt-2 mb-2 font-playwrite">
          {description}
        </p>
        <div className="flex flex-wrap justify-center items-center mb-2 mt-2">
          <span className="text-base sm:text-md text-gray-700 font-playwrite">
            ★★★★☆
          </span>
        </div>
        <div
          className="text-base sm:text-lg text-gray-700 mb-2 text-center mt-2 mb-2 font-playwrite"
          dangerouslySetInnerHTML={{
            __html: `<em>${quote ? quote : text}</em>`,
          }}
        />
      </div>
    </div>
  );
};

const BookDescription = ({ book }: { book: Book }) => {
  return (
    <div className="flex justify-center items-center p-4 bg-background rounded-lg h-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-2/3 flex justify-center items-center">
            <Image
              src={book.cover_link ? book.cover_link : imageUrl}
              alt="Book"
              width={396}
              height={594}
              className="rounded-3xl"
            />
          </div>
          <div className="w-1/3">
            <BookDetails
              title={book.title}
              description={book.description}
              author={book.author}
              genres={book.genres}
              quote={book.quote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
