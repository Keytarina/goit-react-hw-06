import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

//Конфігурація для redux-persist
const persistConfig = {
	key: "contacts",
	storage,
};

//Створюємо "персистований" редюсер на основі contactsReducer
const persistedReducer = persistReducer(persistConfig, contactsReducer);

//Створюємо redux store
export const store = configureStore({
	reducer: {
		contacts: persistedReducer, // Редюсер, який буде взаємодіяти з localStorage. Це "персистований" contactsReducer
		filter: filtersReducer,
	},
	//Додаємо middleware (прошарок), щоб позбутися помилок
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store); // Експортуємо "персистований" stor (persistor) у зовнішній код. Використовується для PersistGate (обгортці для App)
