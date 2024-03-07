import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Header } from "./HeaderLayout";
import { LandingPage } from "src/components/LandingPage";
import { Login } from "src/components/Login ";
import { AppDrawer } from "src/components/Drawer/Drawer";
import { Register } from "src/components/Register";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/drawer" element={<AppDrawer />} />
      <Route path="/register" element={<Register />} />
    </Route>
  )
);
