import { Container, Grid, Typography, Select, MenuItem } from "@mui/material";
import Image from "components/Image";

function MainContent() {
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Image src="src\assets\newplot.png" sx={{ width: "45vw" }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginLeft: "40px" }}>
            API Information will be here
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Select
            placeholder="Store"
            defaultValue="Option 1"
            sx={{ backgroundColor: "#FFFFFF" }}
          >
            <MenuItem value="Option 1">Store</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainContent;
