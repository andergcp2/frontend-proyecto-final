import { FC } from 'react';
import { UploadFile } from '@mui/icons-material';
import type { UploadProps, } from 'antd';
import { Upload } from 'antd';
import { Box, Typography } from '@mui/material';

const { Dragger } = Upload;

export interface UploaderProps {
  uploadText?: string
  uploadHint?: string
}

const Uploader: FC<(UploadProps & UploaderProps)> = (props: (UploadProps & UploaderProps)) => {
  return (
    <Box
      width={{
        xs: '90%', md: '80%', lg: '60%', xl: '50%'
      }}
      marginX={'auto'}
      marginY={10}
    >
      <Typography variant="h6" component="div" gutterBottom>

      </Typography>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <UploadFile />
        </p>
        <p className="ant-upload-text">{props.uploadText ? props.uploadText : 'Click or drag file to this area to upload'}</p>
        <p className="ant-upload-hint">
          {props.uploadHint ? props.uploadHint : 'Only json files are accepted. Upload the file with the test questions.'}
        </p>
      </Dragger>
    </Box >
  )
};

export default Uploader;