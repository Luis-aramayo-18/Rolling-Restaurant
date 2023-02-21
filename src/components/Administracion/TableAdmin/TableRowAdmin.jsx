const TableRowAdmin = (props) => {
  const { id, name, category, image, price, description, isActive } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <img className="img_table" src={image} />
      </td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{isActive}</td>
      <td>editar/borrar</td>
    </tr>
  );
};

export default TableRowAdmin;
