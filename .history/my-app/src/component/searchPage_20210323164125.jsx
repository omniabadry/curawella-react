import React from 'react'
import { Header } from "./header";
import { Footer } from "./footer";
import { SearchPart } from "./SearchPart";
import { SecondNav } from "./SecondNav";
import Books from "./books"

export const SearchPage = () => {
    return (
      <>
        <div class="container-fluid" id="background">
          <Header />
          <SearchPart />
          <SecondNav />
        </div>
        <div style={{width:'100%',height:"auto"}}>
          <Books />
          <br />
          <br />
        </div>
        <Footer />
      </>
    );
}
