import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
    );
};
