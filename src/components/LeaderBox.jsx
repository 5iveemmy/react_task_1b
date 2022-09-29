import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export const LeaderBox = ({
  id,
  title,
  username,
  like,
  photo,
  index,
  moveCard,
}) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div
      className={`border-[#fff] w-full border p-4 rounded-2xl mt-4 border-opacity-50 flex justify-between items-center cursor-pointer ${
        isDragging ? "opacity-40" : "opacity-100"
      }`}
      ref={ref}
      data-handler-id={handlerId}
    >
      <div className="flex items-center gap-6">
        <span>{id}</span> <img src={photo} alt="alt image" />
        <p className="w-[364px]">{title}</p>
        <div className="flex gap-2">
          <img src={photo} alt="alt image" />
          <p>{username}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p>{like}</p>
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
