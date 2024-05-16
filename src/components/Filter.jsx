import { Search } from "../Icons.jsx";

/* eslint-disable react/prop-types */
export const Filter = ({ setSearchName, setSearchGenre }) => {
  const genres = ["Fantasía", "Ciencia ficción", "Zombies", "Terror"];

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleGenreChange = (event) => {
    setSearchGenre(event.target.value);
  };

  return (
    <form className="py-2 flex flex-col gap-4">
      <div className="flex gap-2 items-center input-filter w-full sm:w-1/2">
        <Search />
        <input
          className="bg-transparent focus:outline-none w-full"
          placeholder="Buscar libro..."
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex gap-2 items-center">
        <p>Selecciona un género:</p>
        <select className="input-filter" onChange={handleGenreChange}>
          <option value="">Todos</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
