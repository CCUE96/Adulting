
import { TextField, Box } from '@mui/material';

export default function SearchBar({setSearchTerm, onSearch}) {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
        if(event.target.value) {
            onSearch()
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, width:'40vw'}}>
            <TextField
                variant="outlined"
                placeholder="Search..."
                fullWidth
                type='text'
                onChange={handleSearchChange}
                InputProps={{
                    sx: { backgroundColor: 'white' }
                }}
            />
        </Box>
    );
}