import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";
import { useCandidateTestTaker } from "../context/candidateTestTakerContext";
import { theme } from "@/config/theme";
import { TestAnswer } from "@/models";

const MockAnswerOptions: TestAnswer[] = [
  {
    id: 1,
    answer: 'Es una hoja de estilos',
  },
  {
    id: 2,
    answer: 'Es un lenguaje de programación',
  },
  {
    id: 3,
    answer: 'Es un lenguaje de estilos',
  },
  {
    id: 4,
    answer: 'Es un lenguaje de queries',
  },
]

const QuestionStep = () => {
  // TODO Quitar la data fake cuando funcionen los endpoints
  const {
    currentQuestion,
    currentAnswerOptions,
    isFinalQuestion,
    selectedAnswerId,
    handleChange,
    handleNextQuestion,
    handleTestEnd,
    t,
  } = useCandidateTestTaker();

  const answerOptions =
    (currentAnswerOptions && currentAnswerOptions.length > 0) ?
      currentAnswerOptions : MockAnswerOptions

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
      <FormControl>
        <FormLabel>
          <Typography
            variant="h2"
            color="primary"
            gutterBottom
          >
            {currentQuestion.question ?? '¿Qué es css?'}
          </Typography>
        </FormLabel>
        <RadioGroup
          aria-labelledby="test-question"
          name="test-question"
          value={selectedAnswerId}
          onChange={handleChange}
        >
          {answerOptions.map((answerOption) => (
            <FormControlLabel
              key={answerOption.id}
              value={answerOption.id}
              control={<Radio />}
              label={answerOption.answer}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button
        variant={'contained'}
        sx={{ mt: 2 }}
        onClick={isFinalQuestion ? handleTestEnd : handleNextQuestion}
      >
        {isFinalQuestion ? t('submit') : t('next')}
      </Button>
    </Box>


  );
}

export default QuestionStep;