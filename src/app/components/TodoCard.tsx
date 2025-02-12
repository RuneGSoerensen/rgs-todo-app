export default function TodoCard() {
return (
    <li className="flex items-center gap-2 p-2 border rounded-lg">
        <input type="checkbox" className="h-4 w-4" />
        <span>Example todo item</span>
    </li>
)
}