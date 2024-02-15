import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Header } from "./HeaderLayout";
import { Test } from "../components/Test";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route path="test" element={<Test />} />
    </Route>
  )
);
