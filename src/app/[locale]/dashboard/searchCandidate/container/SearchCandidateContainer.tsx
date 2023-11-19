'use client'

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useSearchCandidate } from "../context/searchCandidateContext";
import StyledDataGrid from "../../../../../components/styledDataGrid/StyledDataGrid";
import SearchCandidateForm from "../components/SearchCandidateForm";
import { GridEventListener } from "@mui/x-data-grid";
import BasicModal from "@/components/modal/Modal";
import { useState } from "react";

interface SearchCandidateContainerProps { }
const SearchCandidateContainer = ({ }: SearchCandidateContainerProps) => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const {
    columns,
    isFetchingCandidatesData,
    rows,
    t,
  } = useSearchCandidate()

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    setSelectedUser(params.row.names)
    setOpen(true)
    alert(`User "${params.row.names}" clicked`);
  };

  return (
    <>
      <BasicModal
        open={open}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
        modalTitle={selectedUser}
        modalText=""
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'left'}
        height={'fit-content'}
        width={{ xs: '100%', md: '80%' }}
        my={20}
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
          onRowClick={handleRowClick} {...rows}
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
    </>

  )
}

export default SearchCandidateContainer