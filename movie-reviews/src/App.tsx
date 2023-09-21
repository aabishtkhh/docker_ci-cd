import { Routes, Route } from "react-router-dom";
// Pages:
import HomePage from "./components/pages/HomePage";
import ContactMe from "./components/pages/ContactMe";
import GetByID from "./components/pages/userCrud/GetByID";
import NotFound from "./components/pages/NotFound";
import Registration from "./components/pages/Registration";
import AdminPage from "./components/pages/admin/AdminPage";
import PutReview from "./components/pages/admin/PutReview";
import PostReview from "./components/pages/admin/PostReview";


function App() {
  return (
    <>
      <Routes>
        <Route path="/reviews" element={<HomePage />} />
        <Route path="/reviews/:id" element={<GetByID />} />
        <Route path="/reviews/sign-in" element={<Registration />} />
        <Route path="/reviews/contact" element={<ContactMe />} />
        {/* admin + crud operation */}
        <Route path="/reviews/admin" element={<AdminPage />} />
        <Route path="/reviews/admin/create-review" element={<PostReview/>} />
        <Route path="/reviews/admin/update-review/:id" element={<PutReview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
