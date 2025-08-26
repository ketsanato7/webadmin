import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_borrower_connections() {
  const query = useQuery({
    queryKey: ["borrower_connections"],
    queryFn: async () =>
      await axios
        .get("/borrower_connections/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

