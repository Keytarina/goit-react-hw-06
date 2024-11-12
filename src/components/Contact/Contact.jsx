import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deleteTask(contact.id));
	};

	return (
		<li className={css.list_item} key={contact.id}>
			{contact.name}: {contact.number}
			<button
				className={css.button_delete}
				type="button"
				onClick={handleDelete}
			>
				Delete
			</button>
		</li>
	);
}
