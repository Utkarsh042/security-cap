
import './App.css';
import SecurityCaptainForm from './SecurityCaptainForm';
import FAQ from './FAQ';
import React from "react";
import BenefitsSection from "./components/BenefitsSection";
import Footer from "./components/Footer";
function App() {
  return (
    
    <>
    <SecurityCaptainForm></SecurityCaptainForm>
    
    <FAQ></FAQ>
    <div className="App">
      <BenefitsSection />
      <Footer />
    </div>
    </>
  );
}

export default App;
