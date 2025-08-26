import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_loan_funding_sources() {
  const query = useQuery({
    queryKey: ["loan_funding_sources"],
    queryFn: async () =>
      await axios
        .get("/loan_funding_sources/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

