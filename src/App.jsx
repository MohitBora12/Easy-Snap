import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Upload from "./pages/upload";
import MyFiles from "./pages/myfiles";
import Transactions from "./pages/transactions";
import Subscription from "./pages/subscription";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/upload" element={<Upload/>} />
                <Route path="/my-files" element={<MyFiles/>} />
                <Route path="/subscription" element={<Subscription/>} />
                <Route path="/transactions" element={<Transactions/>} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default App;
