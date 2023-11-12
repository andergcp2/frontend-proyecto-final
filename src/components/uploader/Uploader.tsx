// Use antd Upload component to upload files
// https://ant.design/components/upload/
import React, { FC } from 'react';
// import './index.css';
// import { InboxOutlined } from '@ant-design/icons';
import { UploadFile } from '@mui/icons-material';
import type { UploadProps, } from 'antd';
import { message, Upload } from 'antd';
import { Box, Typography } from '@mui/material';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: false,
  accept: '.json',
  method: 'POST',
  action: `${process.env.NEXT_PUBLIC_API_URL}candidates/upload`,
  onChange(info: any) {
    const { status, } = info.file;
    console.log('Ander status ', status)
    console.log('Ander status ', info.file)
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      console.log('Ander ', info.file.response);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e: any) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const Uploader: FC<UploadProps> = ({ }: UploadProps) => (
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
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Only json files are accepted. Upload the file with the test questions.
      </p>
    </Dragger>
  </Box >
);

export default Uploader;