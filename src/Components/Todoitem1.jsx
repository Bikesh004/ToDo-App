import { MdOutlineDeleteOutline } from "react-icons/md";

function Todoitem1({ name, tododate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{tododate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(name)}
          >
            {/* Delete */}
            <MdOutlineDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem1;
