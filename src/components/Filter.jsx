import { Search } from "../Icons.jsx";

/* eslint-disable react/prop-types */
export const Filter = ({ handleSearchChange }) => {
  return (
    <form className="py-2">
      <div className="flex gap-4 items-center justify-start bg-zinc-800 rounded-md px-2 py-1 w-1/3">
        <Search />
        <input
          className="bg-zinc-800 focus:outline-none w-full"
          placeholder="Buscar libro..."
          onChange={handleSearchChange}
        />
      </div>
    </form>
  );
};
