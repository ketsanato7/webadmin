import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_provices() {
  const query = useQuery({
    queryKey: ["provinces"],
    queryFn: async () =>
      await axios
        .get("/provinces/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}
