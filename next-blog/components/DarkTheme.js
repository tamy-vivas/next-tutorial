const DarkTheme = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: black;
        --link-color: rgba(255, 123, 0, 0.771);
        --text-color: white;
      }
    `}</style>
  );
};

export default DarkTheme;
