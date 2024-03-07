import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SvgIconComponent } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";

interface ListItemType {
  text: String | number;
  Icon: SvgIconComponent;
}

type MenuType = ListItemType[];

const menu: MenuType = [
  {
    text: "Accueil",
    Icon: HomeIcon,
  },
  {
    text: "Paiement",
    Icon: PaymentIcon,
  },
  {
    text: "Course",
    Icon: AccessTimeIcon,
  },
  {
    text: "Messages",
    Icon: MailOutlineIcon,
  },
  {
    text: "Mentions Légales",
    Icon: InfoIcon,
  },
  {
    text: "Application web",
    Icon: LanguageIcon,
  },
];

const displayMenu = menu.map(({ text, Icon }) => (
  <List key={String(text)}>
    <ListItemButton>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </List>
));

export const DrawerMain = () => {
  return displayMenu;
};
