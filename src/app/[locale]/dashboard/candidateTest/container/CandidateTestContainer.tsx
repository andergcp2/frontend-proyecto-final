'use client'

import StyledDataGrid from "@/components/styledDataGrid/StyledDataGrid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useCandidateTest } from "../context/candidateTestContext"

interface CandidateTestContainerProps { }

const CandidateTestContainer = ({ }: CandidateTestContainerProps) => {
  const {
    columns,
    isFetchingCandidateTestsData,
    rows,
    t,
    handleRowClick,
  } = useCandidateTest()
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      height={'fit-content'}
      width={{ xs: '100%', md: '80%' }}
      mt={20}
      px={{
        xs: 2,
        sm: 'auto',
      }}
    >
      <Typography variant={'h2'} component="div" gutterBottom>{t('title')}</Typography>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        autoHeight
        loading={isFetchingCandidateTestsData}
        onRowClick={handleRowClick} {...rows}
        initialState={{
          columns: {
            columnVisibilityModel: {
              idcandidate: false,
              idtest: false,
            }
          }
        }}
      />
    </Box>
  )
}

export default CandidateTestContainer