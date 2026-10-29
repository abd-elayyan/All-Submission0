const PersonForm = ({
  newName,
  newNumber,
  handleChangeName,
  handleChangeNumber,
  submitForm,
}) => {
  return (
    <form onSubmit={submitForm}>
      {/* name : */}
      <div>
        name:
        <input value={newName} onChange={handleChangeName} />
      </div>
      <br></br>
      {/* phone */}
      <div>
        phone number :
        <input type="number" value={newNumber} onChange={handleChangeNumber} />
      </div>
      <br></br>
      {/* submotion */}
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
export default PersonForm;
