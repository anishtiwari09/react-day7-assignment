import Button from "./Button";

export default function TodoItem({
  title,
  status,
  id,
  handleToggle,
  handleDelete
}) {
  const handleClick = () => handleDelete(id);
  const handleToggleClick = () => handleToggle(id, status);
  return (
    <li>
      {title} - {status ? " Done" : " Pending"}
      <span>
        <Button title="X" onClick={handleClick} />{" "}
        <Button title={"toggle"} onClick={handleToggleClick} />
      </span>
    </li>
  );
}
