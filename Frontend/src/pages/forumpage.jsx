import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PersonalInfo from '../components/forum/technology/personalinfo';
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


export default function ForumPage() {
    return (
        <Routes>
            <Route path="technology/personalinfo" element={<PersonalInfo/>} />
            <Route path="technology/passwords" element={<Password/>} />
            <Route path="selfcare/worklife" element ={<Worklife/>}/>
            <Route path='selfcare/burnout' element={<Burnout/>}/>
            <Route path='selfcare/motivation' element={<Motivation/>}/>
            <Route path='selfcare/confidence' element={<Confidence/>}/>
            <Route path='selfcare/social' element={<Social/>}/>
            <Route path='other/conflict' element={<Conflict/>}/>
            <Route path='other/networking' element={<Networking/>}/>
            <Route path='other/events' element={<Events/>}/>
            <Route path='other/transition' element={<Transition/>}/>
            <Route path='nutrition/mealprep' element={<Mealprep/>}/>
            <Route path='nutrition/snacks' element={<Snacks/>}/>
            <Route path='nutrition/habits' element={<Habits/>}/>
            <Route path='nutrition/diet' element={<Diet/>}/>
            <Route path='nutrition/kitchen' element={<Kitchen/>}/>
            {/* Add more routes as needed */}
        </Routes>
    );
}