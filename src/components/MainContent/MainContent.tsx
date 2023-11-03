import {
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import Image from "components/Image";

function MainContent() {
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <Grid container spacing={3} direction="row" alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2, mb: 3 }}>
            <Image
              src=".\src\assets\newplot.png"
              sx={{ width: "100%", maxHeight: "700px" }}
            />
          </Paper>
          <Box display="flex" justifyContent="center" mb={3}>
            <Select
              defaultValue="Store"
              sx={{ minWidth: 120, backgroundColor: "white" }}
            >
              <MenuItem value="Store">Store</MenuItem>
              {/* Add more MenuItems here */}
            </Select>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3} direction="row" wrap="wrap">
            {/* Example of API information box */}
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" align="center">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" align="center">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" align="center">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" align="center">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography align="center" variant="h6">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" align="center">
                  API Information
                </Typography>
              </Paper>
              <Typography variant="body2" align="center">
                Predicción
              </Typography>
            </Grid>
            {/* You can duplicate and modify the above Grid item for more API information boxes */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainContent;
