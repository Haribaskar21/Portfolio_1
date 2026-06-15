import profilepic from "../assets/profilepic.png";

const Hero = () => {
  return (
<div className="relative overflow-hidden py-24 min-h-screen bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
  
  <div className="absolute z-0 rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-1/2 -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

  <div className="relative z-10 flex flex-col items-center">
    
    <div className="text-center font-bold">
      <h1 className="text-5xl md:text-8xl text-[#98B4CE]">
        Hi, I am
      </h1>

      <h1 className="text-5xl md:text-8xl text-[#E48A57] mt-2">
        Haribaskar
      </h1>
    </div>

    <p className="text-center text-lg md:text-xl max-w-2xl px-6 mt-8 text-white/80 leading-relaxed">
      I'm a Full Stack Developer focused on creating modern,
      responsive, and user-friendly web applications that
      deliver exceptional user experiences.
    </p>


    <div className="mt-12">
      <img
        src={profilepic}
        alt="Haribaskar"
        className="w-[280px] md:w-[420px] object-contain mx-auto"
      />
    </div>

  </div>
</div>
  )
}

export default Hero