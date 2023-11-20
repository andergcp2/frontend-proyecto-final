import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCandidateTestTaker } from "../context/candidateTestTakerContext";
import { theme } from "@/config/theme";

const ResultsStep = () => {
  const { t, testResults } = useCandidateTestTaker();
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
        variant="h2"
        color={'primary'}
        gutterBottom
      >
        {t('testEnd')}
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
      >
        {t('score')}
      </Typography>
      <Typography variant="body1">{testResults?.result}/5</Typography>
    </Box>);
}

export default ResultsStep;