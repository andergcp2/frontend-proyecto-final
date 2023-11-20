import { Box, Button, CircularProgress, Skeleton, Typography } from "@mui/material";
import { useCandidateTestTaker } from "../context/candidateTestTakerContext";
import { theme } from "@/config/theme";

const InitialStep = () => {
  const { t, handleTestStart, currentTest, isFetchingCandidateTestsData } = useCandidateTestTaker();
  // console.log('Ander currentTest initialStep', currentTest)
  if (isFetchingCandidateTestsData || !currentTest.test) return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={{ xs: '80%', md: '50%' }}
      height={'fit-content'}
      mt={20}
      mx={'auto'}
      p={6}
      border={`2px solid ${theme.palette.primary.main}`}
      borderRadius={2}
    >
      <CircularProgress />
    </Box>
  )

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      width={{ xs: '80%', md: '50%' }}
      height={'fit-content'}
      mt={20}
      mx={'auto'}
      p={6}
      border={`2px solid ${theme.palette.primary.main}`}
      borderRadius={2}
    >
      <Typography
        variant={'h2'}
        gutterBottom
        color={'primary'}
      >
        {t('test')}
      </Typography>
      <Typography
        variant={'body1'}
        gutterBottom
      >
        {currentTest?.test?.name}
      </Typography>
      <Typography
        variant={'h4'}
        gutterBottom
      >
        {t('level')}:
      </Typography>
      <Typography
        variant={'body1'}
        gutterBottom
      >
        {currentTest?.test?.minLevel}
      </Typography>
      <Typography
        variant={'h4'}
        gutterBottom
      >
        {t('questionsQuantity')}:
      </Typography>
      <Typography
        variant={'body1'}
        gutterBottom
      >
        {currentTest?.test?.numQuestions}
      </Typography>
      <Button
        onClick={handleTestStart}
        variant="contained"
      >
        {t('start')}
      </Button>
      <Typography
        variant={'body1'}
        mt={2}
      >
        {t('testWarning')}
      </Typography>
    </Box>
  );
}

export default InitialStep;