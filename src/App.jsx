import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<div className={css.app_container}>
				<h1 className={css.title}>Phonebook</h1>
				<ContactForm />
				<h2 className={css.title}>Contacts</h2>
				<Filter />
				<ContactList />
			</div>
		</div>
	);
}
