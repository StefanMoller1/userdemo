import { Provider } from "react-redux";
import { useStore } from "../store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/bootstrap_overwrite.css";
import "../assets/css/application.css";

export default function App({ Component, pageProps }) {
  const store = useStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
