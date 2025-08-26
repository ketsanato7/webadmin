"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("./App");
var dashboard_1 = require("./layouts/dashboard");
var pages_1 = require("./pages");
var orders_1 = require("./pages/orders");
var signIn_1 = require("./pages/signIn");
var address_1 = require("./pages/address");
var Index_1 = require("./pages/manage-data/address/District/Index");
var Index_2 = require("./pages/manage-data/address/Provice/Index");
var Index_3 = require("./pages/manage-data/address/Village/Index");
var user_1 = require("./pages/manage-data/user/user");
var Index_4 = require("./pages/manage-data/documenttype/Index");
var mobile_top_up_1 = require("./pages/finance/mobile-top-up/mobile-top-up");
var transfer_money_1 = require("./pages/finance/transfer-money/transfer-money");
var Index_5 = require("./pages/manage-data/userType/Index");
var Index_6 = require("./pages/manage-data/person/Index");
var Index_7 = require("./pages/manage-data/accounting/Index");
var Index_8 = require("./pages/accounting/summary/Index");
var Index_9 = require("./pages/loan/D/D1.careers/Index");
var Index_10 = require("./pages/loan/D/D2.collateral_categories/Index");
var Index_11 = require("./pages/loan/D/D3.customer_types/Index");
var Index_12 = require("./pages/loan/D/D4.deposit_types/Index");
var Index_13 = require("./pages/loan/D/D5.economic_branches/Index");
var Index_14 = require("./pages/loan/D/D6.economic_sectors/Index");
var Index_15 = require("./pages/loan/D/D7.educations/Index");
var Index_16 = require("./pages/loan/D/D8.enterprise_sizes/Index");
var Index_17 = require("./pages/loan/D/D9.genders/Index");
var Index_18 = require("./pages/loan/D/D10.loan_categories/Index");
var Index_19 = require("./pages/loan/D/D11.loan_classifications/Index");
var Index_20 = require("./pages/loan/D/D12.loan_funding_sources/Index");
var Index_21 = require("./pages/loan/D/D13.borrower_connections/Index");
var Index_22 = require("./pages/loan/D/D14.marital_statuses/Index");
var Index_23 = require("./pages/loan/D/D15.key_personnels/Index");
var Index_24 = require("./pages/loan/D/D16.country/Index");
var Index_25 = require("./pages/loan/D/D17.provinces/Index");
var Index_26 = require("./pages/loan/D/D17.districts/Index");
var Index_27 = require("./pages/loan/D/D17.villages/Index");
var Index_28 = require("./pages/loan/D/D18.nationality/Index");
var Index_29 = require("./pages/loan/D/D19.loan_purposes/Index");
var Index_30 = require("./pages/loan/D/D20.document_types/Index");
var D22_loan_types_1 = require("./pages/loan/D/D22.loan_types ");
var D23_loan_terms_1 = require("./pages/loan/D/D23.loan_terms");
var D24_land_size_units_1 = require("./pages/loan/D/D24.land_size_units");
var Index_31 = require("./pages/loan/1.personal_info/Index");
var Index_32 = require("./pages/loan/2.lao_id_cards/Index");
var Index_33 = require("./pages/loan/3.lao_family_books/Index");
var Index_34 = require("./pages/loan/4.passports/Index");
var Index_35 = require("./pages/loan/5.enterprise_info/Index");
var Index_36 = require("./pages/loan/6.collaterals/Index");
var Index_37 = require("./pages/loan/7.collateral_individuals/Index");
var Index_38 = require("./pages/loan/8.collateral_enterprises/Index");
var Index_39 = require("./pages/loan/9.loans/Index");
var Index_40 = require("./pages/loan/10.loan_collaterals/Index");
var Index_41 = require("./pages/loan/11.borrowers_individual/Index");
var Index_42 = require("./pages/loan/12.borrowers_enterprise/Index");
var Index_43 = require("./pages/loan/13.deposits/Index");
var Index_44 = require("./pages/loan/14.depositors_individual/Index");
var Index_45 = require("./pages/loan/15.depositors_enterprise/Index");
var Index_46 = require("./pages/loan/16.member_shares/Index");
var Index_47 = require("./pages/loan/17.member_shares_individuals/Index");
var Index_48 = require("./pages/loan/18.member_shares_enterprises/Index");
var Index_49 = require("./pages/loan/19.trial_balance/Index");
var Index_50 = require("./pages/loan/20.employees/Index");
var Index_51 = require("./pages/loan/21.employee_positions/Index");
var Index_52 = require("./pages/loan/22.mfi_info/Index");
var Index_53 = require("./pages/loan/23.mfi_branches_info/Index");
var Index_54 = require("./pages/loan/24.mfi_service_units_info/Index");
var Index_55 = require("./pages/loan/25.mfi_HQ_service_units/Index");
var Index_56 = require("./pages/loan/26.mfi_branch_service_units/Index");
var Index_57 = require("./pages/loan/27.report_info/Index");
var Index_58 = require("./pages/loan/28.accounting/Index");
require("./i18next");
var react_redux_1 = require("react-redux");
var react_query_1 = require("@tanstack/react-query");
var store_1 = require("./store/store");
var router = react_router_dom_1.createBrowserRouter([
    {
        Component: App_1["default"],
        children: [
            {
                path: "/",
                Component: dashboard_1["default"],
                children: [
                    {
                        path: "/",
                        Component: pages_1["default"]
                    },
                    {
                        path: "/orders",
                        Component: orders_1["default"]
                    },
                    {
                        path: "/address",
                        Component: address_1["default"]
                    },
                    {
                        path: "/finance/mobile-top-up",
                        Component: mobile_top_up_1["default"]
                    },
                    {
                        path: "/finance/transfer-money",
                        Component: transfer_money_1["default"]
                    },
                    {
                        path: "/manage-data/address/district",
                        Component: Index_1["default"]
                    },
                    {
                        path: "/manage-data/address/village",
                        Component: Index_3["default"]
                    },
                    {
                        path: "/manage-data/address/provice",
                        Component: Index_2["default"]
                    },
                    {
                        path: "/manage-data/user/user",
                        Component: user_1["default"]
                    },
                    {
                        path: "/manage-data/user/user-type",
                        Component: Index_5["default"]
                    },
                    {
                        path: "/manage-data/person/document-type",
                        Component: Index_4["default"]
                    },
                    {
                        path: "/manage-data/person/person",
                        Component: Index_6["default"]
                    },
                    ,
                    {
                        path: "/manage-data/accounting/account",
                        Component: Index_7["default"]
                    },
                    {
                        path: "/accounting/summary/",
                        Component: Index_8["default"]
                    },
                    {
                        path: "/loan/careers",
                        Component: Index_9["default"]
                    },
                    {
                        path: "/loan/collateral_categories",
                        Component: Index_10["default"]
                    },
                    {
                        path: "/loan/customer_types",
                        Component: Index_11["default"]
                    },
                    {
                        path: "/loan/deposit_types",
                        Component: Index_12["default"]
                    },
                    {
                        path: "/loan/economic_branches",
                        Component: Index_13["default"]
                    },
                    {
                        path: "/loan/economic_sectors",
                        Component: Index_14["default"]
                    },
                    {
                        path: "/loan/educations",
                        Component: Index_15["default"]
                    },
                    {
                        path: "/loan/enterprise_sizes",
                        Component: Index_16["default"]
                    },
                    {
                        path: "/loan/genders",
                        Component: Index_17["default"]
                    },
                    {
                        path: "/loan/loan_categories",
                        Component: Index_18["default"]
                    },
                    {
                        path: "/loan/loan_classifications",
                        Component: Index_19["default"]
                    },
                    {
                        path: "/loan/loan_funding_sources",
                        Component: Index_20["default"]
                    },
                    {
                        path: "/loan/borrower_connections",
                        Component: Index_21["default"]
                    },
                    {
                        path: "/loan/marital_statuses",
                        Component: Index_22["default"]
                    },
                    {
                        path: "/loan/key_personnels",
                        Component: Index_23["default"]
                    },
                    {
                        path: "/loan/country",
                        Component: Index_24["default"]
                    },
                    {
                        path: "/loan/provinces",
                        Component: Index_25["default"]
                    },
                    {
                        path: "/loan/districts",
                        Component: Index_26["default"]
                    },
                    {
                        path: "/loan/villages",
                        Component: Index_27["default"]
                    },
                    {
                        path: "/loan/nationality",
                        Component: Index_28["default"]
                    },
                    {
                        path: "/loan/loan_purposes",
                        Component: Index_29["default"]
                    },
                    {
                        path: "/loan/document_types",
                        Component: Index_30["default"]
                    },
                    {
                        path: "/loan/loan_types",
                        Component: D22_loan_types_1["default"]
                    },
                    {
                        path: "/loan/loan_terms",
                        Component: D23_loan_terms_1["default"]
                    },
                    {
                        path: "/loan/land_size_units",
                        Component: D24_land_size_units_1["default"]
                    },
                    {
                        path: "/loan/personal_info",
                        Component: Index_31["default"]
                    },
                    {
                        path: "/loan/lao_id_cards",
                        Component: Index_32["default"]
                    },
                    {
                        path: "/loan/lao_family_books",
                        Component: Index_33["default"]
                    },
                    {
                        path: "/loan/passports",
                        Component: Index_34["default"]
                    },
                    {
                        path: "/loan/enterprise_info",
                        Component: Index_35["default"]
                    },
                    {
                        path: "/loan/collaterals",
                        Component: Index_36["default"]
                    },
                    {
                        path: "/loan/collateral_individuals",
                        Component: Index_37["default"]
                    },
                    {
                        path: "/loan/collateral_enterprises",
                        Component: Index_38["default"]
                    },
                    {
                        path: "/loan/loans",
                        Component: Index_39["default"]
                    },
                    {
                        path: "/loan/loan_collaterals",
                        Component: Index_40["default"]
                    },
                    {
                        path: "/loan/borrowers_individual",
                        Component: Index_41["default"]
                    },
                    {
                        path: "/loan/borrowers_enterprise",
                        Component: Index_42["default"]
                    },
                    {
                        path: "/loan/deposits",
                        Component: Index_43["default"]
                    },
                    {
                        path: "/loan/depositors_individual",
                        Component: Index_44["default"]
                    },
                    {
                        path: "/loan/depositors_enterprise",
                        Component: Index_45["default"]
                    },
                    {
                        path: "/loan/member_shares",
                        Component: Index_46["default"]
                    },
                    {
                        path: "/loan/member_shares_individuals",
                        Component: Index_47["default"]
                    },
                    {
                        path: "/loan/member_shares_enterprises",
                        Component: Index_48["default"]
                    },
                    {
                        path: "/loan/trial_balance",
                        Component: Index_49["default"]
                    },
                    {
                        path: "/loan/employees",
                        Component: Index_50["default"]
                    },
                    {
                        path: "/loan/employee_positions",
                        Component: Index_51["default"]
                    },
                    {
                        path: "/loan/employee_positions",
                        Component: Index_51["default"]
                    },
                    {
                        path: "/loan/mfi_info",
                        Component: Index_52["default"]
                    },
                    {
                        path: "/loan/mfi_branches_info",
                        Component: Index_53["default"]
                    },
                    {
                        path: "/loan/mfi_service_units_info",
                        Component: Index_54["default"]
                    },
                    {
                        path: "/loan/mfi_HQ_service_units",
                        Component: Index_55["default"]
                    },
                    {
                        path: "/loan/mfi_branch_service_units",
                        Component: Index_56["default"]
                    },
                    {
                        path: "/loan/report_info",
                        Component: Index_57["default"]
                    },
                    {
                        path: "/loan/mfi_info",
                        Component: Index_52["default"]
                    },
                    {
                        path: "/loan/accounting",
                        Component: Index_58["default"]
                    },
                ]
            },
            {
                path: "/sign-in",
                Component: signIn_1["default"]
            },
        ]
    },
], {
    future: {
        v7_relativeSplatPath: true
    }
});
var queryClient = new react_query_1.QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render([
    React.createElement(React.StrictMode, null,
        React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
            React.createElement(react_redux_1.Provider, { store: store_1["default"] },
                React.createElement(react_router_dom_1.RouterProvider, { router: router })))),
]);
