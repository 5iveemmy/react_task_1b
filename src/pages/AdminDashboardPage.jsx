import React from "react";
import imageOne from "../images/image1.png";
import imageTwo from "../images/image2.png";
import imageThree from "../images/image3.png";
import imageFour from "../images/image4.png";
import imageFive from "../images/image5.png";
import avatarOne from "../images/avatar1.png";
import avatarTwo from "../images/avatar2.png";
import avatarThree from "../images/avatar3.png";
import avatarFour from "../images/avatar4.png";
import avatarFive from "../images/avatar5.png";
import { useNavigate } from "react-router";
import { AuthContext } from "../authContext";

const LeaderBox = ({ text, name, number, image, avatar }) => {
  return (
    <div className="border-[#fff] w-full border p-4 rounded-2xl mt-4 border-opacity-50 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <img src={image} alt="alt image" />
        <p className="w-[364px]">{text}</p>
        <div className="flex gap-2">
          <img src={avatar} alt="alt image" />
          <p>{name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p>{number}</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1735_1113)">
            <path
              d="M10.0085 3.75833V16.25"
              stroke="#9BFF00"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.01929 8.76167L10.0001 3.74834L14.981 8.76167"
              stroke="#9BFF00"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1735_1113">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/admin/login");
  };

  return (
    <div className="bg-black w-full text-opacity-50 text-white px-[8%] pt-10 pb-40">
      <div className="flex justify-between">
        <h1 className="font-black text-5xl text-white">APP</h1>
        <div
          className="w-32 bg-[#9BFF00] rounded-full flex justify-center items-center gap-2"
          onClick={handleLogout}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1735_592)">
              <path
                d="M5 20C5 17.544 6.991 15.553 9.447 15.553H14.553C17.009 15.553 19 17.544 19 20"
                stroke="#696969"
                stroke-width="1.4824"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448"
                stroke="#696969"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1735_592">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-[#1D1D1D]">Logout</p>
        </div>
      </div>

      <div className="flex justify-between pt-32">
        <h3 className="text-[40px] font-thin">TODAY'S LEADERBOARD</h3>
        <div className="w-[418px] bg-[#1D1D1D] flex justify-around items-center rounded-2xl px-6 py-[18px]">
          <p>30 May 2022</p>
          <span>.</span>
          <div className="bg-[#9BFF00] text-[#1D1D1D] rounded-lg px-3 py-1">
            SUBMISSIONS OPEN
          </div>
          <span>.</span>
          <p>11:34</p>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <div className="flex gap-7">
          <p>#</p>
          <p>Title</p>
        </div>
        <p>Author</p>
        <div className="flex items-center gap-2">
          <p>Most Liked</p>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#696969"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <LeaderBox
        image={imageOne}
        avatar={avatarOne}
        text="Rune raises $100,000 for marketing through NFT butterflies sale"
        name="ninjanft"
        number="254"
      />
      <LeaderBox
        image={imageTwo}
        avatar={avatarTwo}
        text="The Cryptocurrency Trading Bible"
        name="deniscrypto"
        number="205"
      />
      <LeaderBox
        image={imageThree}
        avatar={avatarThree}
        text="Designing our new company brand Meta"
        name="meta_world98"
        number="134"
      />
      <LeaderBox
        image={imageFour}
        avatar={avatarFour}
        text="Connect media partners, earn exciting rewards for today"
        name="kingdom43world"
        number="99"
      />
      <LeaderBox
        image={imageFive}
        avatar={avatarFive}
        text="Designing a more effective projects"
        name="sjkj3987423kjbdfsf"
        number="88"
      />
    </div>
  );
};

export default AdminDashboardPage;
