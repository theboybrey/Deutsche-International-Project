import { useState } from "react";
import '../styles/LoginScreen.css'

function FilterSection({ onFilter }) {
  const [month, setMonth] = useState("");
  const [userInput, setUserInput] = useState("");

  const handleFilter = () => {
    onFilter({ month, userInput });
  };

  return (
    <div className="filter-section flex gap-1 items-center justify-center py-4 mb-4">
      <div className="flex  items-center mb-4">
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border-2 border-gray-400 rounded-md p-2 px-1"
          style={{outline: 'none', border:'1px solid #ccc'}}
        >
          <option value="">Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          style={{outline: 'none', border:'1px solid #ccc'}}
          value={userInput}
          placeholder="Search"
          onChange={(e) => setUserInput(e.target.value)}
          className="border-2 border-gray-400 rounded-lg  p-2"
        />
      </div>
    </div>
  );
}

export default FilterSection;
