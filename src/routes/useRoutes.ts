import { MainComposition } from "./../components/MainComposition/MainComposition";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [{ path: "/", exact: true, component: MainComposition, routes: [] }],
};
