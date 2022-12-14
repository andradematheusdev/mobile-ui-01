import Button from "../components/basic/Button/Button";

export default function Index() {
  return (
    <div className="canva justify-start">
      <div className="flex justify-center items-center overflow-hidden bg-[#f8f8f8] rounded-br-[8rem]">
        <img src="/images/chat.webp" alt="Chatting" className="w-64 h-64" />
      </div>
      <div className="flex flex-col flex-1 bg-[#f8f8f8]">
        <div className="flex flex-col flex-1 items-center justify-center rounded-tl-[8rem] bg-project-primary py-8">
          <span className="flex w-full justify-center text-3xl font-bold text-white text-center mb-16">
            Let's connect <br /> with each other!
          </span>
          <span className="flex w-full justify-center text-white text-center px-8">Meet your friends, join in more than 10k+ active communities and much more!</span>
          <div className="flex w-full mt-8">
            <Button url="/home" className="active:bg-blue-500">
              Let's Go!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
