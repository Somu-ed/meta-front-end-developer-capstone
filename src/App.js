import {
  Route, 
  Routes
} from 'react-router-dom';
import pages from './Components/Layout/utils/pages';
import Layout from './Components/Layout/Layout';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          {/* <Route 
            path={pages.get('about').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
