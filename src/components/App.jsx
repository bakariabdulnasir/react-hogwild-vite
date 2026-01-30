import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import HogForm from "./HogForm";
import FilterBar from "./FilterBar";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  function handleHideHog(name) {
    setHogs(hogs.filter((hog) => hog.name !== name));
  }

  function handleAddHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  const filteredHogs = hogs.filter((hog) =>
    showGreasedOnly ? hog.greased : true
  );

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.weight - b.weight;
    }
  });

  return (
    <div>
      <Nav />

      <FilterBar
        onGreasedChange={setShowGreasedOnly}
        onSortChange={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <div className="ui grid container">
        {sortedHogs.map((hog) => (
          <div key={hog.name} className="ui eight wide column">
            <HogCard hog={hog} onHide={handleHideHog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
