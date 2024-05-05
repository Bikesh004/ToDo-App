import Todoitem1 from "./Todoitem1";

const Todoitems = ({ todoitems, onDeleteClick }) => {
  return (
    <div className="item-conatiner">
      {todoitems.map((item) => (
        <Todoitem1
          key={item.name}
          name={item.name}
          tododate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default Todoitems;
