import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { generatePDF } from './utils/generatePDF';
import { CompanyDetails, InvoiceDetails, StyleOptions } from './types';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/tools/ToolsPage';
import InvoicePage from './pages/tools/InvoicePage';
import AboutPage from './pages/AboutPage';

function App() {
  const handleGenerateInvoice = (data: {
    company: CompanyDetails;
    invoice: InvoiceDetails;
    style: StyleOptions;
  }) => {
    generatePDF(data.company, data.invoice, data.style);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="tools" element={<ToolsPage />} />
          <Route path="tools/invoice" element={<InvoicePage onGenerate={handleGenerateInvoice} />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;