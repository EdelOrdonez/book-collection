import React from "react";
import Image from "next/image";

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
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center pl-4">
        <h2 className="text-black text-2xl font-bold mb-2 text-center w-full">
          {title}
        </h2>
        <div className="flex justify-center w-full mt-2 mb-2">
          <GenrePill genre="Fiction" />
          <GenrePill genre="Horror" />
          <GenrePill genre="Drama" />
        </div>
        <span className="text-sm sm:text-base text-gray-700 mr-2 text-center mt-2 mb-2">
          <strong>Author:</strong> John Doe
        </span>
        <p className="text-base sm:text-xl text-black mb-2 text-center mt-2 mb-2">
          {description}
        </p>
        <div className="flex flex-wrap justify-center items-center mb-2 mt-2">
          <span className="text-base sm:text-md text-gray-700">★★★★☆</span>
        </div>
        <div
          className="text-base sm:text-lg text-gray-700 mb-2 text-center mt-2 mb-2"
          dangerouslySetInnerHTML={{ __html: `<em>${text}</em>` }}
        />
      </div>
    </div>
  );
};

const BookDescription = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-center items-center p-4 bg-background rounded-lg h-full">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-1/2 flex justify-center items-center">
            <Image src={imageUrl} alt="Book" width={300} height={450} />
          </div>
          <BookDetails title={title} description={description} />
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
