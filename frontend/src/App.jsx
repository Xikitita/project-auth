import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpForm } from "../src/components/SignUpForm";
import { SignInForm } from "../src/components/SignInForm";
import { LoggedIn } from "../src/components/LoggedIn";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </BrowserRouter>
  );
};
