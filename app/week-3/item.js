import React from 'react';
import Item from 'Item';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <ul>
        <Item name="Example Item 1" quantity={3} category="Electronics" />
        <Item name="Example Item 2" quantity={2} category="Clothing" />
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default App;
