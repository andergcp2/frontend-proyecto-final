'use client'

import Uploader from "@/components/uploader/Uploader"
import { Box, Typography } from "@mui/material"
import { useQuestionsBank } from "../context/questionsBankContext"

interface QuestionsBankContainerProps { }

const QuestionsBankContainer = ({ }: QuestionsBankContainerProps) => {
  const { props, t } = useQuestionsBank();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      py={10}
    >
      <Typography variant="h3" component="div" gutterBottom>
        {t('uploadTitle')}
      </Typography>
      <Uploader
        {...props}
      />
    </Box>
  )
}

export default QuestionsBankContainer