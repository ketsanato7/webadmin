import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Layout from "./layouts/dashboard";
import DashboardPage from "./pages";
import OrdersPage from "./pages/orders";
import SignInPage from "./pages/signIn";
import AddressPage from "./pages/address";
import DistrictPage from "./pages/manage-data/address/District/Index";
import ProvicePage from "./pages/manage-data/address/Provice/Index";
import VillagePage from "./pages/manage-data/address/Village/Index";
import User from "./pages/manage-data/user/user";
import DocumentType from "./pages/manage-data/documenttype/Index";
import MobileTopUp from "./pages/finance/mobile-top-up/mobile-top-up";
import TransferMoney from "./pages/finance/transfer-money/transfer-money";
import UserType from "./pages/manage-data/userType/Index";
import Person from "./pages/manage-data/person/Index";
import Accounting from "./pages/manage-data/accounting/Index";
import Summary from "./pages/accounting/summary/Index";

import careers from "./pages/loan/D/D1.careers/Index";
import collateral_categories from "./pages/loan/D/D2.collateral_categories/Index";
import customer_types from "./pages/loan/D/D3.customer_types/Index";
import deposit_types from "./pages/loan/D/D4.deposit_types/Index";
import economic_branches from "./pages/loan/D/D5.economic_branches/Index";
import economic_sectors from "./pages/loan/D/D6.economic_sectors/Index";
import educations from "./pages/loan/D/D7.educations/Index";
import enterprise_sizes from "./pages/loan/D/D8.enterprise_sizes/Index";
import genders from "./pages/loan/D/D9.genders/Index";

import loan_categories from "./pages/loan/D/D10.loan_categories/Index";
import loan_classifications from "./pages/loan/D/D11.loan_classifications/Index";
import loan_funding_sources from "./pages/loan/D/D12.loan_funding_sources/Index";
import borrower_connections from "./pages/loan/D/D13.borrower_connections/Index";
import marital_statuses from "./pages/loan/D/D14.marital_statuses/Index";

import key_personnels from "./pages/loan/D/D15.key_personnels/Index";
import country from "./pages/loan/D/D16.country/Index";
import provinces from "./pages/loan/D/D17.provinces/Index";
import district from "./pages/loan/D/D17.districts/Index";
import village from "./pages/loan/D/D17.villages/Index";
import nationality from "./pages/loan/D/D18.nationality/Index";
import loan_purposes from "./pages/loan/D/D19.loan_purposes/Index";

import document_types from "./pages/loan/D/D20.document_types/Index";
import loan_types from "./pages/loan/D/D22.loan_types ";

import loan_terms from "./pages/loan/D/D23.loan_terms";
import land_size_units from "./pages/loan/D/D24.land_size_units";
import personal_info from "./pages/loan/1.personal_info/Index";

import lao_id_cards from "./pages/loan/2.lao_id_cards/Index";
import lao_family_books from "./pages/loan/3.lao_family_books/Index";

import passports from "./pages/loan/4.passports/Index";
import enterprise_info from "./pages/loan/5.enterprise_info/Index";

import collaterals from "./pages/loan/6.collaterals/Index";

import collateral_individuals from "./pages/loan/7.collateral_individuals/Index";
import collateral_enterprises from "./pages/loan/8.collateral_enterprises/Index";


import loans from "./pages/loan/9.loans/Index";


import loan_collaterals from "./pages/loan/10.loan_collaterals/Index";

import borrowers_individual from "./pages/loan/11.borrowers_individual/Index";

import borrowers_enterprise from "./pages/loan/12.borrowers_enterprise/Index";

import deposits from "./pages/loan/13.deposits/Index";

import depositors_individual from "./pages/loan/14.depositors_individual/Index";

import depositors_enterprise from "./pages/loan/15.depositors_enterprise/Index";

import member_shares from "./pages/loan/16.member_shares/Index";

import member_shares_individuals from "./pages/loan/17.member_shares_individuals/Index";

import member_shares_enterprises from "./pages/loan/18.member_shares_enterprises/Index";

import trial_balance from "./pages/loan/19.trial_balance/Index";


import employees from "./pages/loan/20.employees/Index";

import employee_positions from "./pages/loan/21.employee_positions/Index";

import mfi_info from "./pages/loan/22.mfi_info/Index";
import mfi_branches_info from "./pages/loan/23.mfi_branches_info/Index";

import mfi_service_units_info from "./pages/loan/24.mfi_service_units_info/Index";

import mfi_HQ_service_units from "./pages/loan/25.mfi_HQ_service_units/Index";
import mfi_branch_service_units from "./pages/loan/26.mfi_branch_service_units/Index";

import report_info from "./pages/loan/27.report_info/Index";
import accounting from "./pages/loan/28.accounting/Index";

import "./i18next";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import store from "./store/store";
import { PDFViewer } from "@react-pdf/renderer";

const router = createBrowserRouter(
  [
    {
      Component: App,
      children: [
        {
          path: "/",
          Component: Layout,
          children: [
            {
              path: "/",
              Component: DashboardPage,
            },
            {
              path: "/orders",
              Component: OrdersPage,
            },
            {
              path: "/address",
              Component: AddressPage,
            },
            {
              path: "/finance/mobile-top-up",
              Component: MobileTopUp,
            },

            {
              path: "/finance/transfer-money",
              Component: TransferMoney,
            },
            {
              path: "/manage-data/address/district",
              Component: DistrictPage,
            },
            {
              path: "/manage-data/address/village",
              Component: VillagePage,
            },
            {
              path: "/manage-data/address/provice",
              Component: ProvicePage,
            },
            {
              path: "/manage-data/user/user",
              Component: User,
            },
            {
              path: "/manage-data/user/user-type",
              Component: UserType,
            },
            {
              path: "/manage-data/person/document-type",
              Component: DocumentType,
            },
            {
              path: "/manage-data/person/person",
              Component: Person,
            },
            ,
            {
              path: "/manage-data/accounting/account",
              Component: Accounting,
            },

            {
              path: "/accounting/summary/",
              Component: Summary,
            },

            {
              path: "/loan/careers",
              Component: careers,
            },
            {
              path: "/loan/collateral_categories",
              Component: collateral_categories,
            },
            {
              path: "/loan/customer_types",
              Component: customer_types,
            },
            {
              path: "/loan/deposit_types",
              Component: deposit_types,
            },
            {
              path: "/loan/economic_branches",
              Component: economic_branches,
            },
            {
              path: "/loan/economic_sectors",
              Component: economic_sectors,
            },
            {
              path: "/loan/educations",
              Component: educations,
            },
            {
              path: "/loan/enterprise_sizes",
              Component: enterprise_sizes,
            },
            {
              path: "/loan/genders",
              Component: genders,
            },
            {
              path: "/loan/loan_categories",
              Component: loan_categories,
            },
            {
              path: "/loan/loan_classifications",
              Component: loan_classifications,
            },
            {
              path: "/loan/loan_funding_sources",
              Component: loan_funding_sources,
            },
            {
              path: "/loan/borrower_connections",
              Component: borrower_connections,
            },
            {
              path: "/loan/marital_statuses",
              Component: marital_statuses,
            },
            {
              path: "/loan/key_personnels",
              Component: key_personnels,
            },
            {
              path: "/loan/country",
              Component: country,
            },
            {
              path: "/loan/provinces",
              Component: provinces,
            },
            {
              path: "/loan/districts",
              Component: district,
            },
            {
              path: "/loan/villages",
              Component: village,
            },
            {
              path: "/loan/nationality",
              Component: nationality,
            },
            {
              path: "/loan/loan_purposes",
              Component: loan_purposes,
            },
            {
              path: "/loan/document_types",
              Component: document_types,
            },
            {
              path: "/loan/loan_types",
              Component: loan_types,
            },
            {
              path: "/loan/loan_terms",
              Component: loan_terms,
            },
            {
              path: "/loan/land_size_units",
              Component: land_size_units,
            },
            {
              path: "/loan/personal_info",
              Component: personal_info,
            },

            {
              path: "/loan/lao_id_cards",
              Component: lao_id_cards,
            },

            {
              path: "/loan/lao_family_books",
              Component: lao_family_books,
            },

            {
              path: "/loan/passports",
              Component: passports,
            },

            {
              path: "/loan/enterprise_info",
              Component: enterprise_info,
            },

            {
              path: "/loan/collaterals",
              Component: collaterals,
            },

            {
              path: "/loan/collateral_individuals",
              Component: collateral_individuals,
            },

            {
              path: "/loan/collateral_enterprises",
              Component: collateral_enterprises,
            },

            {
              path: "/loan/loans",
              Component: loans,
            },

            {
              path: "/loan/loan_collaterals",
              Component: loan_collaterals,
            },

            {
              path: "/loan/borrowers_individual",
              Component: borrowers_individual,
            },

            {
              path: "/loan/borrowers_enterprise",
              Component: borrowers_enterprise,
            },

            {
              path: "/loan/deposits",
              Component: deposits,
            },

            {
              path: "/loan/depositors_individual",
              Component: depositors_individual,
            },

            {
              path: "/loan/depositors_enterprise",
              Component: depositors_enterprise,
            },

            {
              path: "/loan/member_shares",
              Component: member_shares,
            },

            {
              path: "/loan/member_shares_individuals",
              Component: member_shares_individuals,
            },

            {
              path: "/loan/member_shares_enterprises",
              Component: member_shares_enterprises,
            },

            {
              path: "/loan/trial_balance",
              Component: trial_balance,
            },

            {
              path: "/loan/employees",
              Component:employees,
            },

            {
              path: "/loan/employee_positions",
              Component: employee_positions,
            },

            {
              path: "/loan/employee_positions",
              Component: employee_positions,
            },

            {
              path: "/loan/mfi_info",
              Component: mfi_info,
            },

            {
              path: "/loan/mfi_branches_info",
              Component: mfi_branches_info,
            },

            {
              path: "/loan/mfi_service_units_info",
              Component: mfi_service_units_info,
            },

            {
              path: "/loan/mfi_HQ_service_units",
              Component: mfi_HQ_service_units,
            },

            {
              path: "/loan/mfi_branch_service_units",
              Component: mfi_branch_service_units,
            },

            {
              path: "/loan/report_info",
              Component: report_info,
            },

            {
              path: "/loan/mfi_info",
              Component: mfi_info,
            },
            {
              path: "/loan/accounting",
              Component: accounting,
            },
          ],
        },
        {
          path: "/sign-in",
          Component: SignInPage,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render([
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
]);
