/* eslint-disable react/prop-types */
export const Filter = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <form className="py-2">
      <input
        className="bg-zinc-800 rounded-md px-2 py-1 w-1/3 focus:outline-none"
        placeholder="Buscar libro..."
        onChange={handleSearchChange}
      />
    </form>
  );
};
