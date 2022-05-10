import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Auth from "./pages/Auth";
import FormRegister from "./pages/Auth/components/FormRegister";
import { Login } from "./pages/Auth/components/Login";
import { Register } from "./pages/Auth/components/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Lo que esta pasando ahora</h1>} />
          <Route path="/auth" element={<Auth />}>
            <Route index element={<Login />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/register/form" element={<FormRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
