'use client'

import { useState } from "react";
import { GridEventListener } from "@mui/x-data-grid";
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import { useSearchCandidate } from "../context/searchCandidateContext";
import StyledDataGrid from "../../../../../components/styledDataGrid/StyledDataGrid";
import SearchCandidateForm from "../components/SearchCandidateForm";
import CandidateModal from "../components/ModalCandidate";
import { SearchCandidateRow } from "@/models";
import BasicModal from "@/components/modal/Modal";

interface SearchCandidateContainerProps { }
const SearchCandidateContainer = ({ }: SearchCandidateContainerProps) => {
  const row: SearchCandidateRow = {
    id: 0,
    name: ""
  };
  const [selectedUser, setSelectedUser] = useState(row);
  const {
    columns,
    isFetchingCandidatesData,
    isFetchingProjectsData,
    projects,
    rows,
    t,
    handleProjectChange,
    formik,
    open,
    setOpen,
    openModal,
    setOpenModal
  } = useSearchCandidate()

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
    setSelectedUser(params.row)
    setOpen(true)
  };

  return (
    <>
      <BasicModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleOpen={() => setOpenModal(true)}
        modalTitle={t('candidateAssignedSuccess')}
        modalText=""
      />
      <CandidateModal
        open={open}
        handleClose={() => setOpen(false)}
        handleOpen={() => setOpen(true)}
        candidate={selectedUser}
        projects={projects}
        t={t}
        handleProjectChange={handleProjectChange}
        formik={formik}
        isLoading={isFetchingProjectsData}
      />
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'left'}
        textAlign={'center'}
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