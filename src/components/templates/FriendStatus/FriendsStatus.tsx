import { Eye } from "phosphor-react";
import ScreenTitle from "../../basic/ScreenTitle/ScreenTitle";
import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";
import FriendStatusLink from "../../composite/FriendStatusLink/FriendStatusLink";

export default function FriendsStatus() {
  return (
    <div>
      <div className="flex w-full justify-between items-center">
        <ScreenTitle title="Friends Status" />
        <a href="#">
          <Eye size={28} />
        </a>
      </div>
      <SmallCatTitle title="NEW" className="my-4" />
      <ul className="flex flex-col w-full space-y-3">
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" />
      </ul>
      <SmallCatTitle title="VIEWED" className="my-4" />
      <ul className="flex flex-col w-full space-y-3">
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
        <FriendStatusLink name="John Doe" time="14:17 - 24/08/2022" viewed />
      </ul>
    </div>
  );
}
