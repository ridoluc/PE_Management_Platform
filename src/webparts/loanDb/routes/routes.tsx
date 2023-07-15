import * as React from 'react';
import {MemoryRouter, Routes,Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import AdditionalPage from '../pages/NewPage/AdditionalPage';


const AppRouter: React.FC = () => {
   return (
      <MemoryRouter>
         <Routes>

            <Route path='/' element={<Dashboard />}>
            </Route>
            <Route path="/dashboard" element={<Dashboard/>}/>

            <Route 
               path="/additional/:id" 
               
               loader={async ({ params }) => {
                  
                  console.log(params.id);
                  
               }}
               element={<AdditionalPage/>}
         
            />
         </Routes>
      </MemoryRouter>
   );
 };
 
 export default AppRouter;