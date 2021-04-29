export interface IRouterComponentProps {
  routes?: IRouteItem[]
}

export interface IRouteItem  {
  path: string;
  key?: string | number;
  exact?: boolean;
  component: React.FC<IRouterComponentProps>;
  routes?: IRouteItem[];
  [propName: string]: any
}