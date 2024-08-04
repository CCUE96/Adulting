import SearchBar from "./searchbar";
import AllCategories from "./categories/allcategories";
import { Box } from '@mui/material';

export default function MainCategory() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
        }}>
            <SearchBar />
            <AllCategories />
        </Box>
    );
}