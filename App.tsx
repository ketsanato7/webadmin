import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import type { Navigation, Session } from "@toolpad/core";
import { SessionContext } from "./SessionContext";
import FolderIcon from "@mui/icons-material/Folder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import axios from "axios";
import { UserContext } from "./context/Context";
import PaidIcon from "@mui/icons-material/Paid";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
 
  {
    segment: "loan",
    title: "Loan",
    icon: <FolderIcon />,
    children: [ 
      {
    segment: "accounting",
    title: "Accounting",
    icon: <FolderIcon />,
    children: [
      {
        segment: "summary",
        title: "Summary",
        icon: <PhoneAndroidIcon />,
      },
    ],
  },
   {
    segment: "manangement_accounting",
    title: "manangement_accounting",
    icon: <FolderIcon />,
    children: [
           {
        segment: "accounting_group",
        title: "accounting_group",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "accounting_level",
        title: "accounting_level",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "accounting_type",
        title: "accounting_type",
        icon: <PhoneAndroidIcon />,
      }

    ],
  },
   {
    title: "managent_data",
    icon: <FolderIcon />,
    children: [
    
      {
        segment: "careers",
        title: "careers",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "collateral_categories",
        title: "collateral_categories",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "customer_types",
        title: "customer_types",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "deposit_types",
        title: "deposit_types",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "economic_branches",
        title: "economic_branches",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "economic_sectors",
        title: "economic_sectors",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "enterprise_sizes",
        title: "enterprise_sizes",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "enterprise_sizes",
        title: "enterprise_sizes",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "genders",
        title: "genders",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "loan_categories",
        title: "loan_categories",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "loan_classifications",
        title: "loan_classifications",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "loan_funding_sources",
        title: "loan_funding_sources",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "borrower_connections",
        title: "borrower_connections",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "marital_statuses",
        title: "marital_statuses",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "key_personnels",
        title: "key_personnels",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "country",
        title: "country",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "districts",
        title: "districts",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "provinces",
        title: "provinces",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "villages",
        title: "villages",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "nationality",
        title: "nationality",
        icon: <PhoneAndroidIcon />,
      },
    ],
  }, {
        segment: "personal_info",
        title: "personal_info",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "mfi_info",
        title: "mfi_info",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "marital_statuses",
        title: "marital_statuses",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "genders",
        title: "genders",
        icon: <PhoneAndroidIcon />,
      },
    ],
  },
  {
    segment: "finance",
    title: "Finance",
    icon: <PaidIcon />,
    children: [
      {
        segment: "mobile-top-up",
        title: "Mobile top-up",
        icon: <PhoneAndroidIcon />,
      },
      {
        segment: "transfer-money",
        title: "Transfer money",
        icon: <CurrencyExchangeIcon />,
      },
    ],
  },

  {
    segment: "manage-data",
    title: "Manage data",
    icon: <FolderIcon />,
    children: [
      {
        segment: "address",
        title: "Address",
        icon: <HomeIcon />,
        children: [
          {
            segment: "provice",
            title: "Province",
          },
          {
            segment: "district",
            title: "District",
          },
          {
            segment: "village",
            title: "Village",
          },
        ],
      },
      {
        segment: "education",
        title: "Education",
        icon: <SchoolIcon />,
        children: [
          {
            segment: "education",
            title: "Education",
          },
          {
            segment: "education-level",
            title: "Educational level ",
          },
          {
            segment: "education-level-detail",
            title: "Educational level detail",
          },
          {
            segment: "learner-type",
            title: "Learner type",
          },
          {
            segment: "learner",
            title: "Learner",
          },
        ],
      },
      {
        segment: "Educational institution",
        title: "Educational institution",
        icon: <HomeWorkIcon />,
        children: [
          {
            segment: "Educational institution type",
            title: "Educational institution type",
          },
          {
            segment: "Educational institution type detail",
            title: "Educational institution type detail",
          },
        ],
      },
      {
        segment: "user",
        title: "User",
        icon: <AccountCircleIcon />,
        children: [
          {
            segment: "user-type",
            title: "User Type",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "user",
            title: "User ",
            icon: <ShoppingCartIcon />,
          },
        ],
      },
      {
        segment: "person",
        title: "Person",
        icon: <PersonIcon />,
        children: [
          {
            segment: "document-type",
            title: "Document type",
          },
          {
            segment: "document",
            title: "Document",
          },
          {
            segment: "person",
            title: "Person",
          },
        ],
      },
      {
        segment: "accounting",
        title: "Accounting",
        icon: <ShoppingCartIcon />,
        children: [
          {
            segment: "AccountType",
            title: "Accounting",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "AccountGroup",
            title: "AccountGroup",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "AccountGroupDetail",
            title: "AccountGroupDetail",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "AccountLevel",
            title: "AccountGroupDetail",
            icon: <ShoppingCartIcon />,
          },
          {
            segment: "account",
            title: "Account",
            icon: <ShoppingCartIcon />,
          },
        ],
      },
    ],
  },
  {
    segment: "manage-data",
    title: "Reports",
    icon: <DescriptionIcon />,
    children: [
      {
        segment: "address",
        title: "Accounting",
        icon: <ShoppingCartIcon />,
        children: [
          {
            segment: "provice",
            title: "Document",
            icon: <ShoppingCartIcon />,
            children: [
              {
                segment: "district",
                title: "Account balance information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Financial information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Operating results information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Regular credit information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Restructuring Credit Information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Credit information transferred to off-plan tracking",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Credit information for related parties",
                icon: <ShoppingCartIcon />,
              },

              {
                segment: "district",
                title: "Credit information released to large customers",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Credit interest rate information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Customer deposit information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Deposit interest rate information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Member share information",
                icon: <ShoppingCartIcon />,
              },
            ],
          },
          {
            segment: "provice",
            title: "File",
            icon: <ShoppingCartIcon />,
            children: [
              {
                segment: "district",
                title: "Account balance information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Financial information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Operating results information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Regular credit information",
                icon: <ShoppingCartIcon />,
              },
              {
                segment: "district",
                title: "Restructuring Credit Information",
                icon: <ShoppingCartIcon />,
              },
            ],
          },
        ],
      },
    ],
  },
];

const BRANDING = {
  title: "Monday Teach Company Limited",
};

export default function App() {
  const [session, setSession] = React.useState<Session | null>(null);
  const navigate = useNavigate();
  const [value, setValue] = React.useState();
  const signIn = React.useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const signOut = React.useCallback(() => {
    setSession(null);
    navigate("/sign-out");
  }, [navigate]);

  const sessionContextValue = React.useMemo(
    () => ({ session, setSession }),
    [session, setSession]
  );
  // Remove this const when copying and pasting into your project.
  return (
    <UserContext.Provider value={(value, setValue)}>
      <SessionContext.Provider value={sessionContextValue}>
        <AppProvider
          navigation={NAVIGATION}
          branding={{
            logo: <img src="./src/assets/LogoMonday.jpeg" width="50" />,
            title: "Monday Teach Company Limited",
            homeUrl: "./assets/LogoMonday.jpeg",
          }}
          session={{}}
          authentication={{ signIn, signOut }}
        >
          <Outlet />
        </AppProvider>
      </SessionContext.Provider>
    </UserContext.Provider>
  );
}
