import Rating from "@mui/material/Rating";
import BasicModal from "../modal/Modal";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface RatingModalProps {
  comment: string
  commentLabel?: string
  disableButton?: boolean
  modalText?: string
  modalTitle?: string
  open: boolean
  rating: number
  submitText: string
  handleClose: () => void
  handleCommentChange: (event: any) => void
  handleRateChange: (event: any) => void
  handleSubmit: () => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const RatingModal = ({
  comment,
  commentLabel,
  disableButton = false,
  modalText,
  modalTitle,
  open,
  rating,
  submitText,
  handleClose,
  handleCommentChange,
  handleRateChange,
  handleSubmit,
}: RatingModalProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        display={'flex'}
        flexDirection={'column'}
        gap={1}
        alignItems={'center'}
      >
        <Typography id="modal-modal-title" variant="h3">
          {modalTitle}
        </Typography>
        <Typography
          id="modal-modal-description"
        >
          {modalText}
        </Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={handleRateChange}
          sx={{ py: 2 }}
          size="large"
        />
        <TextField
          fullWidth
          label={commentLabel}
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          onChange={handleCommentChange}
          value={comment}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={disableButton}
        >
          {submitText}
        </Button>
      </Box>
    </Modal >
  )
};

export default RatingModal;