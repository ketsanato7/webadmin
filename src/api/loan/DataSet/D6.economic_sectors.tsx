import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_economic_sectors() {
  const query = useQuery({
    queryKey: ["economic_sectors"],
    queryFn: async () =>
      await axios
        .get("/economic_sectors/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

