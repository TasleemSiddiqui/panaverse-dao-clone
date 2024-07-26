import Image from "next/image";
import Logo from "../../../../public/panaverse-logo.webp";
import Wrapper from "../shared/Wrapper";
const Header = () => {
  return (
    <header className="  sticky top-0 z-10 bg-gradient-to-b from-white to-transparent">
      <Wrapper>
        <div className=" flex justify-between items-center ">
          <div>
            <Image src={Logo} alt="panaverse dao" height={100} width={100} />
          </div>
          <ul className="flex gap-2">
            <li>Home</li>
            <li>
              <select name="Courses" id="">
                <option>Courses</option>
                <option value="option1">Gen AI</option>
              </select>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
