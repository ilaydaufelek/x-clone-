import { useState, useRef } from "react";
import classNames from "classnames";
import { numberFormat } from "../../uilts/format";
import { Icon } from "../../assets/css/icons";


export default function UserHoverCard({ user, followStates, setFollowStates }) {
  const ref = useRef(null);
  const timeoutRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 200);
  };

  const handleClick = (userId) => {
    setFollowStates((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => handleMouseEnter(user.id)}
      onMouseLeave={handleMouseLeave}
      className={classNames(
        "absolute right-36 bottom-full w-[18.75rem] h-[14.64rem] rounded-2xl bg-[color:var(--background-primary)] shadow-box-shadow z-10",
        {
          "opacity-100 transition delay-300 duration-300": hoveredId === user.id,
          "opacity-0 pointer-events-none": hoveredId !== user.id,
        }
      )}
    >
      {hoveredId === user.id && (
        <div className="relative h-full">
          <div className="w-full h-14 py-3 px-4 flex justify-between">
            <img className="w-[58px] h-[58px] rounded-full" src={user.avatar} alt="" />
            {followStates[user.id] ? (
              <Button
                onClick={() => handleClick(user.id)}
                size="small"
                variant="white-outline"
                className="ml-auto shrink-0 group whitespace-nowrap"
              >
                <div className="flex group-hover:hidden">Takip ediliyor</div>
                <div className="hidden group-hover:flex">Takibi bırak</div>
              </Button>
            ) : (
              <Button
                onClick={() => handleClick(user.id)}
                size="small"
                variant="white"
                className="ml-auto shrink-0"
              >
                Takip et
              </Button>
            )}
          </div>
          <div className="h-9 w-full text-left py-3 px-4">
            <div className="text-[15px] hover:underline font-bold flex items-center">
              {user.fullName}
              {user.verified && <Icon />}
            </div>
            <div className="text-[14px] text-[color:var(--color-baseSecondary)]">@{user.userName}</div>
            <div className="mt-3 text-sm text-[color:var(--color-base)]">{user.info}</div>
            <div className="absolute bottom-4 left-4 right-4 flex">
              <div className="text-[14px] text-[color:var(--color-baseSecondary)] hover:underline">
                <span className="text-[color:var(--color-base)]">{numberFormat(user.followed)}</span> Takip edilen
              </div>
              <div className="text-[14px] ml-3 text-[color:var(--color-baseSecondary)] hover:underline">
                <span className="text-[color:var(--color-base)]">{numberFormat(user.follower)}</span> Takipçi
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
