/* eslint-disable react/prop-types */
export const Navbar = ({ showList, setShowList, filteredBooksCount }) => {
  const getSpanClass = (isSelected) => {
    return `cursor-pointer px-4 py-1 ${
      isSelected ? "bg-zinc-800 rounded-t-md" : ""
    }`;
  };

  return (
    <nav className="flex gap-4 py-2 text-sm sm:text-base">
      <span
        onClick={() => setShowList(false)}
        className={getSpanClass(!showList)}
      >
        Libros disponibles ({filteredBooksCount})
      </span>
      <span
        onClick={() => setShowList(true)}
        className={getSpanClass(showList)}
      >
        Lista de lectura
      </span>
    </nav>
  );
};
