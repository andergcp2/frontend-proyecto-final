'use client'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
}
const SearchBar = ({
  placeholder,
  onChange,
  onClick,
  ariaLabel
}: SearchBarProps) => {
  return (
    <Box
      component="form"
      display={'flex'}
      alignItems={'left'}
      justifyContent={'left'}
      width={{ xs: '100%', sm: '50%' }}
      my={2}
      px={2}
      border={'1px solid #ccc'}
      borderRadius={'5px'}
    >
      <InputBase
        sx={{ flex: 1 }}
        placeholder={placeholder || ''}
        inputProps={{ 'aria-label': ariaLabel || '' }}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Box >
  );
}

export default SearchBar;