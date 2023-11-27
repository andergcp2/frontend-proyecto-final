import Box from "@mui/material/Box";
import { useInterview } from "../context/interviewContext";
import Typography from "@mui/material/Typography";
import StyledDataGrid from "@/components/styledDataGrid/StyledDataGrid";
import CustomLink from "@/components/customLink/CustomLink";
import RatingModal from "@/components/ratingModal/RatingModal";

const InterviewContainer = () => {
  const {
    columns,
    comment,
    interviewToRate,
    isFetchingInterviewsData,
    isRatingLoading,
    openRate,
    rating,
    rows,
    handleRateChange,
    handleRateClose,
    handleRateCommentChange,
    handleRateInterview,
    handleRowClick,
    t
  } = useInterview()
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
        handleSubmit={handleRateInterview}
        modalTitle={t('rateModalTitle')}
        modalText={t('rateModalText')}
        commentLabel={t('commentLabel')}
        submitText={t('sendRateButton')}
        disableButton={isRatingLoading}
      />
      <CustomLink
        redirectPath="/dashboard/interview/create"
        linkText={t('createInterviewButton')}
      />
      <Typography
        variant="h2"
        gutterBottom
      >
        {t('interviewsListTitle')}
      </Typography>
      <StyledDataGrid
        getRowId={(row) => `${row.candidateId}${row.projectId}${row.interviewDate}`}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
        autoHeight
        loading={isFetchingInterviewsData}
        onRowClick={(params) => handleRowClick(params)} {...rows}
        initialState={{
          columns: {
            // columnVisibilityModel: {
            //   idcandidate: false,
            //   idtest: false,
            // }
          }
        }}
      />
    </Box>
  );
};

export default InterviewContainer;