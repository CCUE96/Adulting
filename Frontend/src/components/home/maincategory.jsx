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

    const handleFinanceClick = () => {
        setShowAll(false);
        setShowFinance(true);
    };

    const handleHealthClick = () => {
        setShowAll(false)
        setShowHealth(true)
    }
    const handleTechClick = () => {
        setShowAll(false)
        setShowTech(true)
    }

    const handleEducationClick = () => {
        setShowEducation(true)
        setShowAll(false)
    }
    const handleHomeClick = () => {
        setShowAll(false)
        setShowHome(true)
    }

    const handleSelfClick = () => {
        setShowAll(false)
        setShowSelf(true)
    }
    const handleNutritionClick = () => {
        setShowAll(false)
        setShowNutrition(true)
    }
    const handleOtherClick = () => {
        setShowAll(false)
        setShowOther(true)
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
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
        }}>
            <SearchBar />
            {showAll && <AllCategories onFinanceClick={handleFinanceClick} onHealthClick ={handleHealthClick} onTechClick={handleTechClick} onEducationClick = {handleEducationClick} onHomeClick={handleHomeClick} onNutritionClick={handleNutritionClick} onSelfClick={handleSelfClick} onOtherClick={handleOtherClick}/>}
            {showFinance && <FinanceBox goBack = {handleGoBack} />}
            {showHealth && <HealthBox goBack = {handleGoBack} />}
            {showTech && <TechBox goBack={handleGoBack}/>}
            {showEduction && <EducationBox goBack={handleGoBack} />}
            {showHome && <HomeBox goBack={handleGoBack} />}
            {showSelf && <SelfBox goBack={handleGoBack} />}
            {showNutrition && <NutritionBox goBack={handleGoBack} />}
            {showOther && <OtherBox goBack={handleGoBack} />}
        </Box>
    );
}