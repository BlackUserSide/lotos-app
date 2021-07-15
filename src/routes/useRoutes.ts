import { ErrPage } from "./../components/ErrPage/ErrPage";
import { MainPage } from "../components/MainPage/MainPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", exact: true, component: MainPage, routes: [] },
    { path: "*", exact: false, component: ErrPage, routes: [] },
  ],
};
