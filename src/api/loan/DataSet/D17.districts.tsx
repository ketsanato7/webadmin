import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export  function get_districts() {
  const query = useQuery({
    queryKey: ["districts"],
    queryFn: async () =>
      await axios
        .get("/districts/read1")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

export function get_districts_fk(value) {
      const provice_id = {
      province_id: value,
    };
  const query = useQuery({
    queryKey: ["districts1"],
    queryFn: async () =>
      await axios
        .post("/districts/read_fk",provice_id)
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}
