const SearchOrder = () => {
  return (
    <form>
      <input
        className="w-28 rounded-md bg-violet-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-violet-500 focus:ring-offset-2 sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search order #"
      />
    </form>
  );
};

export default SearchOrder;
