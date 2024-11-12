import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectNameFilter);

	const filtredContacts = () => {
		if (!filter) {
			return contacts;
		}
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	const filteredResults = filtredContacts();

	return (
		<ul className={css.contact_list}>
			{filteredResults.length > 0 ? (
				filteredResults.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))
			) : (
				<li>No matches found</li>
			)}
		</ul>
	);
}
