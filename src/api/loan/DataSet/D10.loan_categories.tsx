import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export   function get_loan_categories() {
  const query = useQuery({
    queryKey: ["loan_categories"],
    queryFn: async () =>
      await axios
        .get("/loan_categories/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

