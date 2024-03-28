import { PageLayout } from "../../common/Layout/PageLayout";
import "./Catalog.css";
export default function Catalog() {
  return (
    <PageLayout>
      <div className="catalog-content">
        <img src="/assets/CatalogCover.jpg" className="catalog-photo"></img>

        <div className="catalog-title">The Catalog</div>
        <div className="catalog-description">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
          <a href="/assets/Regar_Final.pdf" className="pdf-link">
            {" "}
            <p>{"\u00B7"} </p> get the pdf <p>{"\u00B7"} </p>
          </a>
          <a href="/contact" className="chit-chat">
            <p>{"\u00B7"} </p> queries, ordering, chit chat <p>{"\u00B7"} </p>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
