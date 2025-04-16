import { useState } from "react";
import { List, ListItemButton, ListItemText, Collapse, Divider } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import "./Main.css";

const Main = () => {
  const [openMenus, setOpenMenus] = useState({
    sapSecurity: false,
    digitalGlobalTax: false,
    otp: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Pfizer Royalties</div>
      <input type="text" placeholder="Search" className="sidebar-search" />
      <List component="nav" className="menu-list">
        <ListItemButton>
          <ListItemText primary="Sap Access Management" />
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => toggleMenu("sapSecurity")}> 
          <ListItemText primary="SapSecurity" />
          {openMenus.sapSecurity ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
        <ListItemButton onClick={() => toggleMenu("digitalGlobalTax")}> 
          <ListItemText primary="Digital Global Tax" />
          {openMenus.digitalGlobalTax ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openMenus.digitalGlobalTax} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Transfer Pricing" />
            </ListItemButton>
            <Divider />
            <ListItemButton sx={{ pl: 4 }} onClick={() => toggleMenu("otp")}> 
              <ListItemText primary="OTP" />
              {openMenus.otp ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMenus.otp} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Above Market Service" />
                </ListItemButton>
                <Divider />
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Clinical Trials Service" />
                </ListItemButton>
                <Divider />
                <ListItemButton sx={{ pl: 6 }} className="highlighted">
                  <ListItemText primary="Royalties" />
                </ListItemButton>
                <Divider />
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Profit Review" />
                </ListItemButton>
                <Divider />
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Price Adjustments" />
                </ListItemButton>
                <Divider />
                <ListItemButton sx={{ pl: 6 }}>
                  <ListItemText primary="Master Data Management" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton>
          <ListItemText primary="Tax Filing" />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="Tax Reporting" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Main;
