// page.js
import React from 'react';
import ItemList from './ItemList';

const Page = () => {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center justify-between">
      <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
