'use client'

import SearchBar from "@/components/searchBar/SearchBar"
import candidates from "@/data/candidates"
import Box from "@mui/material/Box"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


interface SearchCandidateContainerProps { }
const SearchCandidateContainer = ({ }: SearchCandidateContainerProps) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'names', headerName: 'Names', flex: 1 },
    { field: 'lastNames', headerName: 'Last Names', flex: 1 },
    { field: 'identificationType', headerName: 'ID Type', flex: 1 },
    { field: 'identificationNumber', headerName: 'ID Number', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'country', headerName: 'Country', flex: 1 },
    { field: 'city', headerName: 'City', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'photo', headerName: 'Photo', flex: 1 },
    { field: 'profession', headerName: 'Profession', flex: 1 },
  ];

  const rows = candidates.map((candidate) => {
    return {
      id: candidate.id,
      names: candidate.names,
      lastNames: candidate.lastNames,
      identificationType: candidate.identificationType,
      identificationNumber: candidate.identificationNumber,
      email: candidate.email,
      phoneNumber: candidate.phoneNumber,
      country: candidate.country,
      city: candidate.city,
      address: candidate.address,
      photo: candidate.photo,
      profession: candidate.profession,
    }
  })
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'fit-content'}
      width={'100%'}
      py={4}
      px={{ xs: 2, sm: 4 }}
    >
      <SearchBar />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </Box>
  )
}

export default SearchCandidateContainer