function FilterBar({ onGreasedChange, onSortChange }) {
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="greased">Greased Pigs Only?</label>
        <input
          id="greased"
          type="checkbox"
          onChange={(e) => onGreasedChange(e.target.checked)}
        />
      </div>

      <div className="field">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
