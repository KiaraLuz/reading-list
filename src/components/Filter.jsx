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
    <form className="py-2 flex flex-col gap-4 sm:flex-row">
      <div className="flex gap-2 items-center justify-start bg-zinc-800 rounded-md px-2 py-1 w-full sm:w-1/3">
        <Search />
        <input
          className="bg-zinc-800 focus:outline-none w-full"
          placeholder="Buscar libro..."
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex gap-2 items-center">
        <p>Selecciona un género:</p>
        <select
          className="bg-zinc-800 focus:outline-none py-1 px-2 rounded-md"
          onChange={handleGenreChange}
        >
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
