'use client'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginX: 'auto' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder || ''}
        inputProps={{ 'aria-label': ariaLabel || '' }}
        onChange={onChange}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;