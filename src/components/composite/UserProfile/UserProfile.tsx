import SmallCatTitle from "../../basic/SmallCatTitle/SmallCatTitle";
import UserStatus from "../../composite/UserStatus/UserStatus";

export default function UserProfile() {
  return (
    <div className="flex flex-col w-full items-center mb-8">
      <img src="https://github.com/Heloriel.png" className="rounded-2xl w-28 h-28 object-cover" />
      <span className="text-white text-2xl mt-4 font-bold">Matheus Andrade</span>
      <SmallCatTitle title="@andradematheus" className="flex w-full justify-center my-0 mb-6 font-normal text-white" />
      <UserStatus friendsSince="24/08/2022" totalCalls={12} />
    </div>
  );
}
