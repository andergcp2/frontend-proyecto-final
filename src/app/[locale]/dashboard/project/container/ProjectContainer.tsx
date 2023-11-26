import Typography from "@mui/material/Typography";
import { useProject } from "../context/projectContext";
import Box from "@mui/material/Box";
import StyledDataGrid from "@/components/styledDataGrid/StyledDataGrid";
import CustomLink from "@/components/customLink/CustomLink";

const ProjectContainer = () => {
  const {
    rows,
    columns,
    isFetchingProjectsData,
    handleRowClick,
    t
  } = useProject();
  return (
    <Box
      id="project-list-container"
      width={{
        xs: '90%', md: '80%', lg: '60%', xl: '50%'
      }}
      display={'flex'}
      flexDirection={'column'}
      marginX={'auto'}
      marginTop={20}
    >
      <CustomLink
        redirectPath="/dashboard/project/create"
        linkText={t('createProjectButton')}
      />
      <Typography
        variant="h2"
        gutterBottom
      >
        {t('projectTitle')}
      </Typography>
      <StyledDataGrid
        getRowId={(row) => `${row.id}${row.projectId}${row.rating}`} // TODO change this
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        autoHeight
        loading={isFetchingProjectsData}
        onRowClick={(params) => handleRowClick(params)} {...rows}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              projectId: false,
            }
          }
        }}
      />
    </Box>
  );
};

export default ProjectContainer;