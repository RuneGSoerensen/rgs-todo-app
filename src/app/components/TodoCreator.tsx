export default function TodoCreator() {
  return (
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
  );
}
