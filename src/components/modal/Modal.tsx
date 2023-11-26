import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useMemo } from 'react';

type ModalType = 'success' | 'error' | 'warning' | 'info' | 'question'
interface BasicModalProps {
  modalText: string,
  modalTitle: string,
  open: boolean,
  type: ModalType
  handleClose: () => void
  handleOpen?: () => void
}

export default function BasicModal({ modalText, modalTitle, open, handleClose, handleOpen, type = 'info' }: BasicModalProps) {
  const borderColor = useMemo(
    () => {
      switch (type) {
        case 'success':
          return '#4caf50'
        case 'error':
          return '#f44336'
        case 'warning':
          return '#ff9800'
        case 'question':
          return '#2196f3'
        default:
          return 'primary.main'
      }
    },
    [type],
  )
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid ' + borderColor,
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {modalText}
        </Typography>
      </Box>
    </Modal>
  );
}
