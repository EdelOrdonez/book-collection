const Footer = () => {
  return (
    <footer
      className="bg-primary h-[300px] shadow-lg fixed bottom-0 w-full"
      style={{
        backgroundImage: "url(/images/circle.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center items-center h-full relative">
        <span
          className="text-white text-3xl font-playwrite text-center"
          style={{ marginTop: "40px" }}
        >
          If you don’t like{" "}
          <span className="text-primaryStronger"> to read,</span>
          <br /> you haven’t found the
          <span className="text-primaryStronger"> right book.</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
