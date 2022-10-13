import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Navbar = ({authenticate, setAuthenticate}) => {

    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }

    const search = (event) => {
        if (event.key == "Enter"){
            // 입력한 검색어를 읽어와서
            let keyword = event.target.value
            console.log("keyword", keyword);
            // url을 바꿔준다
            navigate(`/?q=${keyword}`)
        }
    }

    return (
    <div>
      <div>
        {authenticate?
            <div className="login-button" onClick={()=>{setAuthenticate(false)}}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
            </div>
            :
            <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
            </div> 
        }
            
      </div>

      <div className="nav-section">
            <img
                width={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png"
                onClick={() => {
                    navigate('/');
                }}    
            />
      </div>

      <div className="menu-area">
          
            <ul className="menu-list">
                {menuList.map((menu) => (
                 <li>{menu}</li>
                ))}
            </ul>
        
            <div className="search-box">
                <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                <input type="text" onKeyDown={(event)=>search(event)} placeholder="제품검색"/>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
