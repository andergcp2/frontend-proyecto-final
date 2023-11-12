import { theme } from "@/config/theme";
import styled from "@mui/material/styles/styled";
import { DataGrid } from "@mui/x-data-grid/DataGrid/DataGrid";

const StyledDataGrid = styled(DataGrid)(() => ({
  "& .MuiDataGrid-sortIcon": {
    color: theme.palette.secondary.main,
  },
  "& .MuiDataGrid-menuIconButton": {
    color: theme.palette.secondary.main,
  },
  '& .search-candidate-header': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    fontSize: theme.typography.body1.fontSize,
  },
}))

export default StyledDataGrid;