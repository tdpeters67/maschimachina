import "./Header.css";
import { PrimaryNav } from "../PrimaryNav/PrimaryNav";

export default function Header() {
  return <div className="header">
    <div className="container">
      <a href="/">
        <img className="header-img" src="/assets/header-img.jpg" />
      </a>
      <PrimaryNav />
    </div>
  </div>
    
}
