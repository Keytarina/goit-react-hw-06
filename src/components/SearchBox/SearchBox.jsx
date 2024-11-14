import { useSelector, useDispatch } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
	const dispatch = useDispatch();
	const filter = useSelector(selectNameFilter);

	const handleChange = (event) => {
		dispatch(changeFilter(event.target.value));
	};

	return (
		<label className={css.label}>
			Find contacts by name
			<input
				type="text"
				name="filter"
				className={css.input}
				onChange={handleChange}
				value={filter}
			/>
		</label>
	);
}
