// eslint-disable-next-line react/prop-types
export const Navbar = ({ setActiveTab }) => {
  return (
    <nav className="flex gap-4 py-2">
      <span onClick={() => setActiveTab("books")} className="cursor-pointer">
        Nuestros libros
      </span>
      <span onClick={() => setActiveTab("list")} className="cursor-pointer">
        Lista de lectura
      </span>
    </nav>
  );
};
