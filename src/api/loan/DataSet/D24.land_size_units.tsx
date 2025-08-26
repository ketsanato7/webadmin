import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_data() {
  const query = useQuery({
    queryKey: ["land_size_units"],
    queryFn: async () =>
      await axios
        .get("/land_size_units/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

