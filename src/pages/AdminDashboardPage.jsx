import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../authContext";
import update from "immutability-helper";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MkdSDK from "../utils/MkdSDK";
import { LeaderBox } from "../components/LeaderBox";

const AdminDashboardPage = () => {
  const { dispatch } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);

  let sdk = new MkdSDK();

  const getData = () => {
    sdk
      .callRestAPI({ page: page, limit: 10 }, "GET")
      .then((res) => {
        setPage(res.page);
        setList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/admin/login");
  };
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setList((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  const renderCard = useCallback((item, index) => {
    return (
      <LeaderBox
        id={item.id}
        index={index}
        photo={item.photo}
        title={item.title}
        username={item.username}
        like={item.like}
        moveCard={moveCard}
        key={item.id}
      />
    );
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-black w-full text-opacity-50 text-white px-[8%] pt-10 pb-40">
        <div className="flex justify-between">
          <h1 className="font-black text-5xl text-white">APP</h1>
          <div
            className="w-32 bg-[#9BFF00] rounded-full flex justify-center items-center gap-2 cursor-pointer"
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
        <div>{list.map((card, i) => renderCard(card, i))}</div>
        <div className="flex justify-center items-center gap-8 pt-12">
          <button
            className="flex justify-center items-center py-3 px-6 w-[128px] text-black bg-[#9bff00] rounded-[40px] "
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
          <button
            className="flex justify-center items-center py-3 px-6 w-[128px] text-black bg-[#9bff00] rounded-[40px] "
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default AdminDashboardPage;
