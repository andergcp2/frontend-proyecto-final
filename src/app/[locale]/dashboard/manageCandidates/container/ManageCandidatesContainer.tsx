import Box from "@mui/material/Box";
import useManageCandidatesContext from "../context/useManageCandidatesContext";
import RatingModal from "@/components/ratingModal/RatingModal";
import Typography from "@mui/material/Typography";
import StyledDataGrid from "@/components/styledDataGrid/StyledDataGrid";

const ManageCandidatesContainer = () => {
  const {
    columns,
    comment,
    // interviewToRate,
    isFetchingCandidatesData,
    isRatingLoading,
    openRate,
    rating,
    rows,
    handleRateChange,
    handleRateClose,
    handleRateCommentChange,
    handleRateCandidate,
    handleRowClick,
    t
  } = useManageCandidatesContext()
  return (
    <Box
      id="interviews-list-container"
      width={{
        xs: '90%', md: '80%', lg: '60%', xl: '50%'
      }}
      display={'flex'}
      flexDirection={'column'}
      marginX={'auto'}
      marginTop={20}
    >
      <RatingModal
        open={openRate}
        handleClose={handleRateClose}
        rating={rating}
        comment={comment}
        handleRateChange={handleRateChange}
        handleCommentChange={handleRateCommentChange}
        handleSubmit={handleRateCandidate}
        modalTitle={t('rateModalTitle')}
        modalText={t('rateModalText')}
        commentLabel={t('commentLabel')}
        submitText={t('sendRateButton')}
        disableButton={isRatingLoading}
      />
      <Typography
        variant="h2"
        gutterBottom
      >
        {t('manageCandidatesTitle')}
      </Typography>
      <StyledDataGrid
        getRowId={(row) => `${row.id}${row.projectId}${row.rating}`}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        autoHeight
        loading={isFetchingCandidatesData}
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
  )
}

export default ManageCandidatesContainer;