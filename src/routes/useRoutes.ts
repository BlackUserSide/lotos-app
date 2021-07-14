import { MainPage } from "../components/MainPage/MainPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [{ path: "/", exact: true, component: MainPage, routes: [] }],
};
