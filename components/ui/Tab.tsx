import Image from "next/image";

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
        className={`flex items-center justify-between px-2 py-10 rounded-2xl w-full text-black ${
          activeTab === title
            ? "bg-primaryStrong shadow-sm"
            : "bg-background hover:bg-primary"
        } text-lg`}
        onClick={() => handleTabClick(title)}
      >
        <div className="flex items-center justify-center w-1/3">
          <Image
            src={`/images/${title}.jpeg`}
            alt={`${title} Image`}
            height={36}
            width={36}
            className="rounded-xl"
          />
        </div>
        <div className="flex items-center justify-center w-1/3 text-center font-playwrite">
          {title}
        </div>
        <div className="flex items-center justify-center w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-8"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </a>
    </li>
  );
};

export default Tab;
