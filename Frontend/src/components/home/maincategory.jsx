import SearchBar from "./searchbar";
import AllCategories from "./categories/allcategories";
import { Box } from '@mui/material';
import FinanceBox from "./categories/finance";
import { useEffect } from "react";
import { useState } from "react";
import HealthBox from "./categories/health";
import TechBox from "./categories/technology";
import EducationBox from "./categories/education";
import HomeBox from "./categories/home";
import OtherBox from "./categories/other";
import SelfBox from "./categories/self";
import NutritionBox from "./categories/nutrition";
import SearchResults from "./searchResults";



export default function MainCategory() {
    const [showAll, setShowAll] = useState(true);
    const [showFinance, setShowFinance] = useState(false);
    const [showHealth, setShowHealth] = useState(false);
    const [showTech, setShowTech] = useState(false)
    const [showEduction, setShowEducation] = useState(false)
    const [showHome, setShowHome]  = useState(false)
    const [showSelf, setShowSelf]  = useState(false)
    const [showNutrition, setShowNutrition]  = useState(false)
    const [showOther, setShowOther]  = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

 

    const handleFinanceClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowFinance(true);
        }, 1000);
    };
    
    const handleHealthClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowHealth(true);
        }, 1000);
    };
    
    const handleTechClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowTech(true);
        }, 1000);
    };
    
    const handleEducationClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowEducation(true);
        }, 1000);
    };
    
    const handleHomeClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowHome(true);
        }, 1000);
    };
    const handleSelfClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowSelf(true);
        }, 1000);
    };
    
    const handleNutritionClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowNutrition(true);
        }, 1000);
    };
    
    const handleOtherClick = () => {
        setTimeout(() => {
            setShowAll(false);
            setShowOther(true);
        }, 1000);
    };

    const handleSearchClick = () => {
        setShowAll(false)
        setShowFinance(false)
        setShowHealth(false)
        setShowTech(false)
        setShowEducation(false)
        setShowHome(false)
        setShowOther(false)
        setShowNutrition(false)
        setShowSelf(false)
        setShowSearch(true)
    }


    const handleGoBack = () => {
        setShowAll(true)
        setShowFinance(false)
        setShowHealth(false)
        setShowTech(false)
        setShowEducation(false)
        setShowHome(false)
        setShowOther(false)
        setShowNutrition(false)
        setShowSelf(false)
        setShowSearch(false)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
        }}>
            <SearchBar setSearchTerm={setSearchTerm} onSearch={handleSearchClick} />
          
            {showAll && <AllCategories onFinanceClick={handleFinanceClick} onHealthClick ={handleHealthClick} onTechClick={handleTechClick} onEducationClick = {handleEducationClick} onHomeClick={handleHomeClick} onNutritionClick={handleNutritionClick} onSelfClick={handleSelfClick} onOtherClick={handleOtherClick}/>}
            {showFinance && <FinanceBox goBack = {handleGoBack} />}
            {showHealth && <HealthBox goBack = {handleGoBack} />}
            {showTech && <TechBox goBack={handleGoBack}/>}
            {showEduction && <EducationBox goBack={handleGoBack} />}
            {showHome && <HomeBox goBack={handleGoBack} />}
            {showSelf && <SelfBox goBack={handleGoBack} />}
            {showNutrition && <NutritionBox goBack={handleGoBack} />}
            {showOther && <OtherBox goBack={handleGoBack} />}
            {showSearch && <SearchResults searchTerm={searchTerm} goBack={handleGoBack}/>}
        </Box>
    );
}