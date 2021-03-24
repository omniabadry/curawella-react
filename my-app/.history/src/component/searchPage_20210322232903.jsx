import React from 'react'
import { Header } from "./header";
import { Footer } from "./footer";
import { Form } from "./form";

export const SearchPage = () => {
    return (
      <div>
        <div class="container-fluid" id="background">
          <Header />
         
      
          <Form />
        </div>
        <Footer />
      </div>
    );
}
