import { CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const DrawerHeader = () => {
  return (
    <Container sx={{ padding: "0.5em" }}>
      <Card>
        <CardMedia
          component="img"
          alt="profil picture"
          image="https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography>test</Typography>
          <Typography>numéro</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
