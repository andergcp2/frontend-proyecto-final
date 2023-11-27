import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

interface CustomLinkProps {
  redirectPath: string
  linkText: string
}

const CustomLink = ({ linkText, redirectPath }: CustomLinkProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'flex-end'}
    >
      <Link
        href={redirectPath}
        type="button"
        underline="none"
      >
        <Typography
          gutterBottom
          variant="body1"
          border={1}
          px={2}
          py={1}
          borderColor={'primary.main'}
          borderRadius={1}
          color={'primary.main'}
        >
          {linkText}
        </Typography>
      </Link>
    </Box>
  )
}

export default CustomLink