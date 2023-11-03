import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Select,
  Button,
  Box,
} from "@mui/material";

function Top() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#0a4f8a" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Proyecto Final</Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Select
            defaultValue="Categoría"
            style={{ backgroundColor: "white", marginRight: "10px" }}
          >
            <MenuItem value="Categoría">Categoría</MenuItem>
            {/* Add more MenuItems here */}
          </Select>
          <Select
            defaultValue="Subcategoría"
            style={{ backgroundColor: "white", marginRight: "10px" }}
          >
            <MenuItem value="Subcategoría">Subcategoría</MenuItem>
            {/* Add more MenuItems here */}
          </Select>
          <Select
            defaultValue="Producto"
            style={{ backgroundColor: "white", marginRight: "10px" }}
          >
            <MenuItem value="Producto">Producto</MenuItem>
            {/* Add more MenuItems here */}
          </Select>
          <Button variant="contained" color="primary">
            BUSCAR
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Top;
