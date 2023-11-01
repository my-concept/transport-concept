import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { SvgIcon, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import logo from "../assets/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import DraftsIcon from "@mui/icons-material/Drafts";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const CustomBox = styled(Box)`
  background-color: black;
  width: 100%;
`;

const CustomImage = styled("img")`
  width: 5em;
  self-align: start;
  display: block;
  margin-left: 20%;
  margin-bottom: 3em;
`;
const CustomSvgIcon = styled(SvgIcon)`
  width: 0.7em;
  margin: 0 0.5em 0 0;
`;

const CustomTextField = styled(TextField)`
  & .MuiInputBase-root {
    color: grey;
  }
  background-color: black;
  border: "none";
`;

const CustomButton = styled(Button)`
  margin: 3em 0 1em 0;
  background-color: #0d0c0c;
  &:hover {
    background-color: green;
  }
`;

export const Footer = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <CustomBox>
      <Grid container sx={{ padding: "2em 2em 0em 2em" }} spacing={0.5}>
        <Grid item xs={5}>
          <CustomImage src={logo} alt="logo" />
          <Typography sx={{ textAlign: "start", width: "80%" }}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            similique excepturi nihil dicta deserunt ipsa labore facere qui
            dolores et. Illum, incidunt voluptatem.
          </Typography>
        </Grid>

        <Grid sx={{ p: 7, width: "300em" }} item xs={3}>
          <Typography sx={{ marginBottom: "3em", color: "yellow" }}>
            Contactez-nous
          </Typography>
          <ListItem sx={{ p: 0 }}>
            <CustomSvgIcon component={LocalPhoneIcon} />
            <ListItemText primary="Téléphone" />
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <CustomSvgIcon component={DraftsIcon} />
            <ListItemText primary="Canabis@test.fr" />
          </ListItem>
          <ListItem sx={{ p: 0 }}>
            <CustomSvgIcon component={FmdGoodIcon} />
            <ListItemText primary="239 rue cambrai, 75012 Paris" />
          </ListItem>
        </Grid>

        <Grid item xs={3}>
          <Typography sx={{ marginBottom: "3em", color: "yellow" }}>
            S'enregistrer
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              id="filled-basic"
              label="Nom/Prenom"
              {...register("Name")}
              variant="filled"
              InputLabelProps={{ style: { color: "grey" } }}
            />

            <CustomTextField
              sx={{ borderBottom: "1px solid grey" }}
              id="filled-basic"
              label="Email"
              {...register("email")}
              variant="filled"
              InputLabelProps={{ style: { color: "grey" } }}
            />
            <CustomButton variant="contained" type="submit">
              Créer
            </CustomButton>
          </form>
        </Grid>
        <Grid item xs={1}>
          <CustomImage src={logo} alt="logo" />
        </Grid>
        <Grid
          container
          sx={{ borderTop: "2px dotted #736D6D", paddingTop: "1em" }}
        >
          <Grid item xs={10}>
            <Item>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ducimus autem. Atque.
            </Item>
          </Grid>
          <Grid item xs={2}>
            <CustomSvgIcon component={FacebookIcon} />
            <CustomSvgIcon component={TwitterIcon} />
          </Grid>
        </Grid>
      </Grid>
    </CustomBox>
  );
};
