export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Todo App</h1>
    
    <div className="flex gap-2 mb-4">
      <input 
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Todo
      </button>
    </div>

    <ul className="space-y-2">
      <li className="flex items-center gap-2 p-2 border rounded-lg">
        <input type="checkbox" className="h-4 w-4" />
        <span>Example todo item</span>
      </li>
    </ul>
  </main>
  );
}
