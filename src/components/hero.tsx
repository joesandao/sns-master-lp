import * as motion from "motion/react-client"
export default function Hero() {

  const logoStyle = {
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "3%",
    width: "25%",
    maxWidth: "150px",
    maxHeight: "150px",
  }

  const logos = [
    { src: "/google-biz.png", delay: 0 },
    { src: "/line.png", delay: 0.3 },
    { src: "/instagram.png", delay: 0.6}
  ]
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[#e8e5dc] h-screen flex flex-col justify-center w-full">
      <div className="absolute top-20 left-5 right-5 flex flex-col">
        <h1 className="font-bold text-[6vw] text-center">SNS運用マスター</h1>
      </div>

      <div className="absolute right-0 bottom-0">
      </div>      

      <div className="flex justify-center items-center gap-5">
        {logos.map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{
              duration: 0.4,
              delay: image.delay,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{
              ...logoStyle,
              backgroundImage: `url(${image.src})`,
            }}
          />
        ))}
      </div>
      <div className="absolute flex flex-col gap-5 justify-center writespace-nowrap bottom-10 left-[10%] right-[10%] right text-8xl text-center text-shadow-lg">
        <h2 className="text-5xl text-red-400 text-center">あなたは本業を極め続ける</h2>
        <h2 className="text-5xl text-red-400 text-center">私たちは新たな出会いと絆を作る</h2>
        <h2 className="text-5xl text-red-400 text-center">あなたのSNSで。</h2>
      </div>
    </div>
  );
}