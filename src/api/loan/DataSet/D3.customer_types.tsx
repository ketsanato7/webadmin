import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_customer_types() {
  const query = useQuery({
    queryKey: ["customer_types"],
    queryFn: async () =>
      await axios
        .get("/customer_types/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

