const base = import.meta.env.BASE_URL;

const ButtonLink = ({ href, children }) => {
  return (
    <a href={`${base}${href}`} className="text-gray-800 font-bold py-2 px-4">
      {children}
    </a>
  );
};

export default ButtonLink;
