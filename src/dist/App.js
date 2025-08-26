"use strict";
exports.__esModule = true;
var React = require("react");
var Dashboard_1 = require("@mui/icons-material/Dashboard");
var ShoppingCart_1 = require("@mui/icons-material/ShoppingCart");
var react_router_dom_1 = require("@toolpad/core/react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var SessionContext_1 = require("./SessionContext");
var Folder_1 = require("@mui/icons-material/Folder");
var AccountCircle_1 = require("@mui/icons-material/AccountCircle");
var Description_1 = require("@mui/icons-material/Description");
var Home_1 = require("@mui/icons-material/Home");
var School_1 = require("@mui/icons-material/School");
var Person_1 = require("@mui/icons-material/Person");
var HomeWork_1 = require("@mui/icons-material/HomeWork");
var Context_1 = require("./context/Context");
var Paid_1 = require("@mui/icons-material/Paid");
var PhoneAndroid_1 = require("@mui/icons-material/PhoneAndroid");
var CurrencyExchange_1 = require("@mui/icons-material/CurrencyExchange");
var NAVIGATION = [
    {
        kind: "header",
        title: "Main items"
    },
    {
        title: "Dashboard",
        icon: React.createElement(Dashboard_1["default"], null)
    },
    {
        segment: "orders",
        title: "Orders",
        icon: React.createElement(ShoppingCart_1["default"], null)
    },
    {
        segment: "loan",
        title: "Loan",
        icon: React.createElement(Folder_1["default"], null),
        children: [
            {
                segment: "accounting",
                title: "Accounting",
                icon: React.createElement(Folder_1["default"], null),
                children: [
                    {
                        segment: "summary",
                        title: "Summary",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                ]
            },
            {
                segment: "manangement_accounting",
                title: "manangement_accounting",
                icon: React.createElement(Folder_1["default"], null),
                children: [
                    {
                        segment: "accounting_group",
                        title: "accounting_group",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "accounting_level",
                        title: "accounting_level",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "accounting_type",
                        title: "accounting_type",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                ]
            },
            {
                title: "managent_data",
                icon: React.createElement(Folder_1["default"], null),
                children: [
                    {
                        segment: "careers",
                        title: "careers",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "collateral_categories",
                        title: "collateral_categories",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "customer_types",
                        title: "customer_types",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "deposit_types",
                        title: "deposit_types",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "economic_branches",
                        title: "economic_branches",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "economic_sectors",
                        title: "economic_sectors",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "enterprise_sizes",
                        title: "enterprise_sizes",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "enterprise_sizes",
                        title: "enterprise_sizes",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "genders",
                        title: "genders",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_categories",
                        title: "loan_categories",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_classifications",
                        title: "loan_classifications",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_funding_sources",
                        title: "loan_funding_sources",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "borrower_connections",
                        title: "borrower_connections",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "marital_statuses",
                        title: "marital_statuses",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "key_personnels",
                        title: "key_personnels",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "country",
                        title: "country",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "districts",
                        title: "districts",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "provinces",
                        title: "provinces",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "villages",
                        title: "villages",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "nationality",
                        title: "nationality",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_purposes",
                        title: "loan_purposes",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "document_types",
                        title: "document_types",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_types",
                        title: "loan_types",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "loan_terms",
                        title: "loan_terms",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                    {
                        segment: "land_size_units",
                        title: "land_size_units",
                        icon: React.createElement(PhoneAndroid_1["default"], null)
                    },
                ]
            },
            {
                segment: "personal_info",
                title: "personal_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "lao_id_cards",
                title: "lao_id_cards",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "lao_family_books",
                title: "lao_family_books",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "passports",
                title: "passports",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "enterprise_info",
                title: "enterprise_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "collaterals",
                title: "collaterals",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "collateral_individuals",
                title: "collateral_individuals",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "collateral_enterprises",
                title: "collateral_enterprises",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "loans",
                title: "loans",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "loan_collaterals",
                title: "loan_collaterals",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "borrowers_individual",
                title: "borrowers_individual",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "borrowers_enterprise",
                title: "borrowers_enterprise",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "deposits",
                title: "deposits",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "depositors_individual",
                title: "depositors_individual",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "depositors_individual",
                title: "depositors_individual",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "depositors_enterprise",
                title: "depositors_enterprise",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "member_shares",
                title: "member_shares",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "member_shares_individuals",
                title: "member_shares_individuals",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "member_shares_enterprises",
                title: "member_shares_enterprises",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "trial_balance",
                title: "trial_balance",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "employees",
                title: "employees",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "employee_positions",
                title: "employee_positions",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_info",
                title: "mfi_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_branches_info",
                title: "mfi_branches_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_service_units_info",
                title: "mfi_service_units_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_HQ_service_units",
                title: "mfi_HQ_service_units",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_branch_service_units",
                title: "mfi_branch_service_units",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "report_info",
                title: "report_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "accounting",
                title: "accounting",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "mfi_info",
                title: "mfi_info",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "marital_statuses",
                title: "marital_statuses",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "genders",
                title: "genders",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
        ]
    },
    {
        segment: "finance",
        title: "Finance",
        icon: React.createElement(Paid_1["default"], null),
        children: [
            {
                segment: "mobile-top-up",
                title: "Mobile top-up",
                icon: React.createElement(PhoneAndroid_1["default"], null)
            },
            {
                segment: "transfer-money",
                title: "Transfer money",
                icon: React.createElement(CurrencyExchange_1["default"], null)
            },
        ]
    },
    {
        segment: "manage-data",
        title: "Manage data",
        icon: React.createElement(Folder_1["default"], null),
        children: [
            {
                segment: "address",
                title: "Address",
                icon: React.createElement(Home_1["default"], null),
                children: [
                    {
                        segment: "provice",
                        title: "Province"
                    },
                    {
                        segment: "district",
                        title: "District"
                    },
                    {
                        segment: "village",
                        title: "Village"
                    },
                ]
            },
            {
                segment: "education",
                title: "Education",
                icon: React.createElement(School_1["default"], null),
                children: [
                    {
                        segment: "education",
                        title: "Education"
                    },
                    {
                        segment: "education-level",
                        title: "Educational level "
                    },
                    {
                        segment: "education-level-detail",
                        title: "Educational level detail"
                    },
                    {
                        segment: "learner-type",
                        title: "Learner type"
                    },
                    {
                        segment: "learner",
                        title: "Learner"
                    },
                ]
            },
            {
                segment: "Educational institution",
                title: "Educational institution",
                icon: React.createElement(HomeWork_1["default"], null),
                children: [
                    {
                        segment: "Educational institution type",
                        title: "Educational institution type"
                    },
                    {
                        segment: "Educational institution type detail",
                        title: "Educational institution type detail"
                    },
                ]
            },
            {
                segment: "user",
                title: "User",
                icon: React.createElement(AccountCircle_1["default"], null),
                children: [
                    {
                        segment: "user-type",
                        title: "User Type",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                    {
                        segment: "user",
                        title: "User ",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                ]
            },
            {
                segment: "person",
                title: "Person",
                icon: React.createElement(Person_1["default"], null),
                children: [
                    {
                        segment: "document-type",
                        title: "Document type"
                    },
                    {
                        segment: "document",
                        title: "Document"
                    },
                    {
                        segment: "person",
                        title: "Person"
                    },
                ]
            },
            {
                segment: "accounting",
                title: "Accounting",
                icon: React.createElement(ShoppingCart_1["default"], null),
                children: [
                    {
                        segment: "AccountType",
                        title: "Accounting",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                    {
                        segment: "AccountGroup",
                        title: "AccountGroup",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                    {
                        segment: "AccountGroupDetail",
                        title: "AccountGroupDetail",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                    {
                        segment: "AccountLevel",
                        title: "AccountGroupDetail",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                    {
                        segment: "account",
                        title: "Account",
                        icon: React.createElement(ShoppingCart_1["default"], null)
                    },
                ]
            },
        ]
    },
    {
        segment: "manage-data",
        title: "Reports",
        icon: React.createElement(Description_1["default"], null),
        children: [
            {
                segment: "address",
                title: "Accounting",
                icon: React.createElement(ShoppingCart_1["default"], null),
                children: [
                    {
                        segment: "provice",
                        title: "Document",
                        icon: React.createElement(ShoppingCart_1["default"], null),
                        children: [
                            {
                                segment: "district",
                                title: "Account balance information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Financial information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Operating results information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Regular credit information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Restructuring Credit Information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Credit information transferred to off-plan tracking",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Credit information for related parties",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Credit information released to large customers",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Credit interest rate information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Customer deposit information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Deposit interest rate information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Member share information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                        ]
                    },
                    {
                        segment: "provice",
                        title: "File",
                        icon: React.createElement(ShoppingCart_1["default"], null),
                        children: [
                            {
                                segment: "district",
                                title: "Account balance information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Financial information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Operating results information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Regular credit information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                            {
                                segment: "district",
                                title: "Restructuring Credit Information",
                                icon: React.createElement(ShoppingCart_1["default"], null)
                            },
                        ]
                    },
                ]
            },
        ]
    },
];
var BRANDING = {
    title: "Monday Teach Company Limited"
};
function App() {
    var _a = React.useState(null), session = _a[0], setSession = _a[1];
    var navigate = react_router_dom_2.useNavigate();
    var _b = React.useState(), value = _b[0], setValue = _b[1];
    var signIn = React.useCallback(function () {
        navigate("/sign-in");
    }, [navigate]);
    var signOut = React.useCallback(function () {
        setSession(null);
        navigate("/sign-out");
    }, [navigate]);
    var sessionContextValue = React.useMemo(function () { return ({ session: session, setSession: setSession }); }, [session, setSession]);
    // Remove this const when copying and pasting into your project.
    return (React.createElement(Context_1.UserContext.Provider, { value: (value, setValue) },
        React.createElement(SessionContext_1.SessionContext.Provider, { value: sessionContextValue },
            React.createElement(react_router_dom_1.AppProvider, { navigation: NAVIGATION, branding: {
                    logo: React.createElement("img", { src: "./src/assets/LogoMonday.jpeg", width: "50" }),
                    title: "Monday Teach Company Limited",
                    homeUrl: "./assets/LogoMonday.jpeg"
                }, session: {}, authentication: { signIn: signIn, signOut: signOut } },
                React.createElement(react_router_dom_2.Outlet, null)))));
}
exports["default"] = App;
