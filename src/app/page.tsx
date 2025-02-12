import TodoCreator from "./components/TodoCreator";
import TodoContainer from "./components/TodoContainer";
import TodoCard from "./components/TodoCard";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Todo App</h1>
    <TodoCreator />
    <TodoContainer>
      <TodoCard />
    </TodoContainer>
  </main>
  );
}
