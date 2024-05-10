/* eslint-disable react/prop-types */
export const Navbar = ({ selectList, setSelectList, filteredCount }) => {
  const getSpanClass = (isSelected) => {
    return `cursor-pointer px-4 py-1 ${
      isSelected ? "bg-zinc-800 rounded-t-md" : ""
    }`;
  };

  return (
    <nav className="flex gap-4 py-2 text-sm sm:text-base">
      <span
        onClick={() => setSelectList(false)}
        className={getSpanClass(!selectList)}
      >
        Libros disponibles ({filteredCount})
      </span>
      <span
        onClick={() => setSelectList(true)}
        className={getSpanClass(selectList)}
      >
        Lista de lectura
      </span>
    </nav>
  );
};
