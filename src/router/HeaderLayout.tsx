import { SvgIcon, Typography, Box } from "@mui/material";
import headerImage from "src/assets/bgcurves.png";
import logo from "src/assets/logo.png";
import { styled } from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material";

const StyledIcon = styled("img")`
  width: 8em;
  height: 8em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 5em;
    height: 5em;
  }
`;

const StyledBorder = styled("div")`
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: white;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
`;
const StyledTitle = styled(Typography)`
  color: white;
  margin-right: 10px;
  margin-top: 1em;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: 2.5em;
  }

  ${({ theme }) => theme.breakpoints.down("lg")} {
    font-size: 2.2em;
  }
`;

export const Header = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "block", flex: "wrap" }}>
      <Box>
        <Box
          sx={{
            width: "100vw",
            backgroundImage: `url(${headerImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            display: "flex",
            height: "11em",
            justifyContent: "space-between",
          }}
          onClick={(e) => {
            console.log("logo");
            e.stopPropagation();
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StyledIcon src={logo} alt="logo" />
            <StyledTitle variant="h3">
              Transport{" "}
              <span style={{ color: theme.palette.secondary.main }}>
                Concept
              </span>
            </StyledTitle>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginRight: "1em",
              marginTop: "1em",
            }}
          >
            <StyledBorder>
              <SvgIcon
                sx={{
                  transform: "scale(1.3)",
                  color: "black",
                }}
                component={LocalPhoneIcon}
                onClick={(e) => {
                  console.log("phone");
                  e.stopPropagation();
                }}
              />
            </StyledBorder>
            <StyledBorder>
              <SvgIcon
                sx={{
                  transform: "scale(1.3)",
                  color: "black",
                }}
                component={EmailIcon}
                onClick={(e) => {
                  console.log("email");
                  e.stopPropagation();
                }}
              />
            </StyledBorder>
          </Box>
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
