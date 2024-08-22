import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Privacy from '../components/forum/technology/privacy';
import Password from '../components/forum/technology/passwords';
import Worklife from '../components/forum/selfcare/worklife';
import Burnout from '../components/forum/selfcare/burnout';
import Motivation from '../components/forum/selfcare/motivation';
import Confidence from '../components/forum/selfcare/confidence';
import Social from '../components/forum/selfcare/social';
import Transportation from '../components/forum/other/transportation';
import Networking from '../components/forum/other/networking';
import Conflict from '../components/forum/other/conflict';
import Transition from '../components/forum/other/transition';
import Events from '../components/forum/other/events';
import Mealprep from '../components/forum/nutrition/mealprep';
import Snacks from '../components/forum/nutrition/snacks';
import Diet from '../components/forum/nutrition/diet';
import Kitchen from '../components/forum/nutrition/kitchen';
import Habits from '../components/forum/nutrition/habits';
import Scams from '../components/forum/technology/scams';
import Upgrade from '../components/forum/technology/upgrade';
import Troubleshoot from '../components/forum/technology/troubleshoot';
import Repair from '../components/forum/home/repair';
import People from '../components/forum/home/people';
import Cooking from '../components/forum/home/cooking';
import Insurance from '../components/forum/home/insurance';
import Budget from '../components/forum/home/budget';
import Plan from '../components/forum/health/plan';
import Mental from '../components/forum/health/mental';
import Care from '../components/forum/health/care';
import FirstAid from '../components/forum/health/firstaid';
import BudgetMeals from '../components/forum/health/budgetmeals';
import Loans from '../components/forum/finance/loans';
import Banking from '../components/forum/finance/banking';
import Taxes from '../components/forum/finance/taxes';
import Credit from '../components/forum/finance/credit';
import HomeBuying from '../components/forum/finance/homebuying';
import Path from '../components/forum/education/path';
import Time from '../components/forum/education/time';
import Internship from '../components/forum/education/internship';
import Aid from '../components/forum/education/aid';
import Testing from '../components/forum/education/testing';

import CommentSection from '../components/comments/comments';
import PostSection from '../components/comments/commentpost';



export default function ForumPage() {
    return (
        <>
        
        <Routes>
            <Route path="technology/privacy" element={<Privacy/>} />
            <Route path="technology/passwords" element={<Password/>} />
            <Route path='technology/scams' element={<Scams/>}/>
            <Route path='technology/upgrade' element={<Upgrade/>}/>
            <Route path='technology/troubleshoot' element={<Troubleshoot/>}/>

            <Route path="selfcare/worklife" element ={<Worklife/>}/>
            <Route path='selfcare/burnout' element={<Burnout/>}/>
            <Route path='selfcare/motivation' element={<Motivation/>}/>
            <Route path='selfcare/confidence' element={<Confidence/>}/>
            <Route path='selfcare/social' element={<Social/>}/>

            <Route path='other/conflict' element={<Conflict/>}/>
            <Route path='other/networking' element={<Networking/>}/>
            <Route path='other/events' element={<Events/>}/>
            <Route path='other/transition' element={<Transition/>}/>
            <Route path='other/transportation' element={<Transportation/>}/>

            <Route path='nutrition/mealprep' element={<Mealprep/>}/>
            <Route path='nutrition/snacks' element={<Snacks/>}/>
            <Route path='nutrition/habits' element={<Habits/>}/>
            <Route path='nutrition/diet' element={<Diet/>}/>
            <Route path='nutrition/kitchen' element={<Kitchen/>}/>

            <Route path='home/repairs' element={<Repair/>}/>
            <Route path='home/budget' element={<Budget/>}/>
            <Route path='home/cooking' element={<Cooking/>}/>
            <Route path='home/people' element={<People/>}/>
            <Route path='home/insurance' element={<Insurance/>}/>
        
            <Route path='health/plan' element={<Plan/>}/>
            <Route path='health/mental' element={<Mental/>}/>
            <Route path='health/care' element={<Care/>}/>
            <Route path='health/firstaid' element={<FirstAid/>}/>
            <Route path='health/budgetmeals' element={<BudgetMeals/>}/>

            <Route path='finance/loans' element={<Loans/>}/>
            <Route path='finance/banking' element={<Banking/>}/>
            <Route path='finance/taxes' element={<Taxes/>}/>
            <Route path='finance/credit' element={<Credit/>}/>
            <Route path='finance/homebuying' element={<HomeBuying/>}/>

            <Route path='education/path' element={<Path/>}/>
            <Route path='education/time' element={<Time/>}/>
            <Route path='education/internship' element={<Internship/>}/>
            <Route path='education/aid' element={<Aid/>}/>
            <Route path='education/testing' element={<Testing/>}/>
           
        </Routes>
        
        <PostSection/>
        <CommentSection/>
        </>
    );
}