/* eslint-disable camelcase */
import api from "../api";

export interface Plant {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export const fetchPlantData = async () => {
  const { data } = await api.get<Plant[]>("plants?_sort=name&_order=asc");

  return data;
};
