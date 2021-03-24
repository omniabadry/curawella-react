import React from 'react'
import { Header } from "./header";
import { Footer } from "./footer";
import { SearchPart } from "./SearchPart";
import { SecondNav } from "./SecondNav";


export const SearchPage = () => {
    return (
      <div>
        <div class="container-fluid" id="background">
          <Header />
          <SearchPart />
          <SecondNav />
        </div>
        <Footer />
      </div>
    );
}
