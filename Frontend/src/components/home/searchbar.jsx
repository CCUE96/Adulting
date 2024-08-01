
import { TextField, Box } from '@mui/material';

export default function SearchBar() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, width:'40vw'}}>
            <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                InputProps={{
                    sx: { backgroundColor: 'white' }
                }}
            />
        </Box>
    );
}