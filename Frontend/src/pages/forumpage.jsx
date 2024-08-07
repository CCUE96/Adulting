import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PersonalInfo from '../components/forum/technology/personalinfo';
import Password from '../components/forum/technology/passwords';

export default function ForumPage() {
    return (
        <Routes>
            <Route path="personalinfo" element={<PersonalInfo/>} />
            <Route path="passwords" element={<Password/>} />
            {/* Add more routes as needed */}
        </Routes>
    );
}