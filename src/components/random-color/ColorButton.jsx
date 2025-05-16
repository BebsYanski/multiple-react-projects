const ColorButton = ({ label, onClick }) => (
  <button
    className="px-2 py-1 m-4 border-0 bg-blue-500 rounded cursor-pointer"
    onClick={onClick}
  >
    {label}
  </button>
);

export default ColorButton;
