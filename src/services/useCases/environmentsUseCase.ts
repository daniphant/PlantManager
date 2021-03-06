import api from "../api";

export interface Environment {
  key: string;
  title: string;
}

export const fetchEnvironmentNames = async () => {
  const { data } = await api.get<Environment[]>(
    "plants_environments?_sort=title&_order=asc"
  );

  return data;
};
