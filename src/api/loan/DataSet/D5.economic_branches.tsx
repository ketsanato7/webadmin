import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_economic_branches() {
  const query = useQuery({
    queryKey: ["economic_branches"],
    queryFn: async () =>
      await axios
        .get("/economic_branches/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

