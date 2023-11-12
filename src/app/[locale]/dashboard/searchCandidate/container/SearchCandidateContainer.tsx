'use client'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useSearchCandidate } from "../context/searchCandidateContext";
import StyledDataGrid from "../../../../../components/styledDataGrid/StyledDataGrid";
import SearchCandidateForm from "../components/SearchCandidateForm";

interface SearchCandidateContainerProps { }
const SearchCandidateContainer = ({ }: SearchCandidateContainerProps) => {
  const {
    columns,
    isFetchingCandidatesData,
    rows,
    t,
  } = useSearchCandidate()

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'left'}
      height={'fit-content'}
      width={{ xs: '100%', md: '80%' }}
      py={4}
      px={{ xs: 2, sm: 4 }}
    >
      <Typography variant={'h2'}>{t('title')}</Typography>
      <SearchCandidateForm />
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        autoHeight
        loading={isFetchingCandidatesData}
        onCellClick={() => alert('click')}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              // names: false,
              // lastNames: false,
              identificationType: false,
              identificationNumber: false,
              // email: false,
              // phoneNumber: false,
              country: false,
              city: false,
              address: false,
              photo: false,
              profession: false,
            }
          }
        }}
      />
    </Box>
  )
}

export default SearchCandidateContainer