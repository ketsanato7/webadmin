import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export   function get_loan_classifications() {
  const query = useQuery({
    queryKey: ["loan_classifications"],
    queryFn: async () =>
      await axios
        .get("/loan_classifications/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}

