import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationComponent = ({currentPage}) => {
  const totalPages = 4;

  return (
    <Stack spacing={2}>
      <Pagination 
        count={totalPages} 
        page={currentPage} 
        color="primary"
        variant="outlined" 
      />
    </Stack>
  );
};