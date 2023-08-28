import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);

  return (
    <Box sx={{ width: "100%" }}>
      <center>
        <BottomNavigation
          showLabels
          style={{
            width: "100%",
            height: "4rem",
            bottom: "0px",
            position: "fixed",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            backgroundColor: "white",
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            component={Link}
            to="/analytics"
            icon={<AnalyticsIcon />}
            label="Analytics"
          />
          <BottomNavigationAction
            component={Link}
            to="/bank-calc"
            icon={<AccountBalanceIcon />}
            label="Bank Calc"
          />
          <BottomNavigationAction
            component={Link}
            to="/"
            icon={<CurrencyRupeeIcon />}
            label="Owe"
          />
        </BottomNavigation>
      </center>
    </Box>
  );
}
