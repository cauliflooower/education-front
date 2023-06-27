import { BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import c from "./App.module.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userAPI";

const App = () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
