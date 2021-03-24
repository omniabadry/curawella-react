import React from 'react'
import { Header } from "./header";
import { Footer } from "./footer";
import { SearchPart } from "./SearchPart";
import Books from "./books"

export const SearchPage = () => {
    return (
      <>
        <div class="container-fluid" id="background">
          <Header />
          <SearchPart />
          {/* <Books /> */}
        </div>
        <Footer />
      </>
    );
}
