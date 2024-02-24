import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Header } from "./HeaderLayout";
import { LandingPage } from "src/components/LandingPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<LandingPage />} />
    </Route>
  )
);
