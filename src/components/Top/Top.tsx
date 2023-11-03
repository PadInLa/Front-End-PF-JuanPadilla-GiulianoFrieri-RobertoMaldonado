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
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-evenly" }}>
        <Typography variant="h6">Proyecto Final</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            defaultValue="Option 1"
            sx={{ mr: 2, backgroundColor: "#FFFFFF" }}
          >
            <MenuItem value="Option 1">Categoría</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
          </Select>
          <Select
            defaultValue="Option 1"
            sx={{ mr: 2, backgroundColor: "#FFFFFF" }}
          >
            <MenuItem value="Option 1">Subcategoría</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
          </Select>
          <Select
            defaultValue="Option 1"
            sx={{ mr: 2, backgroundColor: "#FFFFFF" }}
          >
            <MenuItem value="Option 1">Producto</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
          </Select>
          <Button variant="contained" color="secondary">
            Buscar
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Top;
