'use client'

import Uploader from "@/components/uploader/Uploader"
import { Box, Typography } from "@mui/material"

interface QuestionsBankContainerProps { }

const QuestionsBankContainer = ({ }: QuestionsBankContainerProps) => {

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      py={10}
    >
      <Typography variant="h3" component="div" gutterBottom>
        Here you can upload your question bank
      </Typography>
      <Uploader />
    </Box>
  )
}

export default QuestionsBankContainer