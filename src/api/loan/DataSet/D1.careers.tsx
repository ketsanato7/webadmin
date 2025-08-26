import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_data() {
  const query = useQuery({
    queryKey: ["careers"],
    queryFn: async () =>
      await axios
        .get("/careers/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}


