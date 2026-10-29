const Filter = ({ handleSearch }) => {
  return (
    <div>
      search :
      <input type="text" onChange={handleSearch} />
    </div>
  );
};
export default Filter;
