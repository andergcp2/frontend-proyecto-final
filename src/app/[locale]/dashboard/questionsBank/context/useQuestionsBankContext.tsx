import { UploadProps } from "antd/es/upload";
import { message } from 'antd';
import { useTranslations } from "next-intl"
import { UploaderProps } from "@/components/uploader/Uploader";
import { useState } from "react";

const useQuestionsBankContext = () => {
  const t = useTranslations('Dashboard.Modules.QuestionsBank')

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  // UPLOADER PROPS
  const props: UploadProps & UploaderProps = {
    name: 'file',
    multiple: false,
    accept: '.json',
    method: 'POST',
    action: "/api/upload",
    onChange(info: any) {
      const { status, } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} ${t('uploadSuccess')}`); // file uploaded successfully.
        setOpen(true)
      } else if (status === 'error') {
        message.error(`${info.file.name} t('uploadError')`); // file upload failed.
      }
    },
    onDrop(e: any) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    uploadText: t('uploadText'),
    uploadHint: t('uploadHint'),
    maxCount: 1,
  };

  return {
    open,
    props,
    t,
    handleClose,
  }
}

export default useQuestionsBankContext