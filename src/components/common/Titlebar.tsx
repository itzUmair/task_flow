import Logo from "../../assets/logo.svg"
import Developer from "../../assets/developer.svg"
import Github from "../../assets/github.svg"

const Titlebar = () => {
  return (
    <nav className="flex justify-between items-center mx-auto 2xl:w-[1440px] px-4 py-4 md:px-16 border-b-2 border-clr-100">
      <img src={Logo} alt="Task Flow" />
      <div className="flex items-center gap-x-4">
        <a href="https://muhammadumairkhan.vercel.app" target="_blank" ><img src={Developer} alt="dev" className="w-6" /></a>
        <a href="https://github.com/itzUmair/task_flow" target="_blank" ><img src={Github} alt="github" className="w-6"/></a>
      </div>
    </nav>
  )
}

export default Titlebar