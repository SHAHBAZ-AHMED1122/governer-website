import React from "react";
import Image from "next/image";
import Logo from "/public/governer-logo.png";
import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
function Header() {
  return (
    <div>
      <div className="header-box">
        <div className="logo">
          <Image src={Logo} alt="logo" width={90} height={120}></Image>
        </div>
        <h1 className="header-heading">
          Tuition Free Education Program on Latest Technologies
        </h1>
          <nav>
            <ul className="list">
              <li>
                <Link href="/" className="link">home</Link>
              </li>
              <li>
                <Link href="/" className="link">apply</Link>
              </li>
              <li>
                <Link href="/" className="link">jobs</Link>
              </li>
              <li>
                <Link href="/" className="link">results</Link>
              </li>
              <li>
                <Link href="/" className="link">courses</Link>
              </li>
            </ul>
          </nav>
        </div>
        
      </div>
  );
}

export default Header;
