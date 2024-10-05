export default function AddProductForm({
  name,
  description,
  validation,
  onFormSubmit,
  onNameChange,
  onDescriptionChange,
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <div>
        <label htmlFor="product-name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          id="product-name"
          placeholder="Enter the name"
          className="textfield"
        />
      </div>
      <div>
        <label htmlFor="product-description">Description:</label>
        <input
          type="text"
          value={description}
          onChange={onDescriptionChange}
          id="product-description"
          placeholder="Enter the description"
          className="textfield"
        />
      </div>
      <div className="form-footer">
        <div className="validation-message">{validation}</div>
        <input type="submit" className="btn btn-primary" value="Add product" />
      </div>
    </form>
  );
}
