import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_villages() {
  const query = useQuery({
    queryKey: ["villages"],
    queryFn: async () =>
      await axios
        .get("/villages/read1")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

export function get_village_fk(value) {
      const district_id = {
      district_id: value,
    };
  const query = useQuery({
    queryKey: ["villages1"],
    queryFn: async () =>
      await axios
        .post("/villages/read_fk",district_id)
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

