import { Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage";
import Feed from "./pages/Feed";
import FriendInbox from "./pages/FriendInbox";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import RegisterForm from "./pages/Registration";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<RegisterForm />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="feed" element={<Feed />} />
        <Route path="friends" element={<FriendInbox />} />
        <Route path="home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
      {/* fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
