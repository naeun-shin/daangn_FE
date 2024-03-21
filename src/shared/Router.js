import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "../pages/Community";
import CommunityCreate from "../pages/community/CommunityCreate";
import CommunityDetail from "../pages/community/CommunityDetail";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Community />} />
          <Route path="/communityCreate" element={<CommunityCreate />} />
          <Route path="/CommunityDetail" element={<CommunityDetail />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
