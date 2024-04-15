import Button from "../../common/Button/Button";
import ButtonList from "../../common/ButtonList/ButtonList";
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
          <br />
          <div className="catalog-links">
            <a href="/assets/Regar_Final.pdf" className="button-link pdf-link">
              get the pdf
            </a>
            <a href="/contact" className="button-link chit-chat">
              queries, ordering, chit chat
            </a>
          </div>
          {/* <ButtonList
            buttons={[
              { text: "get the pdf", link: "/assets/Regar_Final.pdf" },
              { text: "queries, ordering, chit chat", link: "/contact" },
            ]}
          /> */}
        </div>
      </div>
    </PageLayout>
  );
}
