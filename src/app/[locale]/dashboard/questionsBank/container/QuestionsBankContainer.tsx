'use client'

import Uploader from "@/components/uploader/Uploader"
import { Box, Typography } from "@mui/material"
import { useQuestionsBank } from "../context/questionsBankContext"
import BasicModal from "@/components/modal/Modal"

interface QuestionsBankContainerProps { }

const QuestionsBankContainer = ({ }: QuestionsBankContainerProps) => {
  const {
    open,
    props,
    handleClose,
    t
  } = useQuestionsBank();

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      textAlign={'center'}
      marginTop={20}
      width={'100%'}
      px={{
        xs: 2,
        sm: 'auto',
      }}
    >
      <BasicModal
        modalText=""
        open={open}
        modalTitle={t('updaloadSuccessModalText')}
        handleClose={handleClose}
        type="success"
      />
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