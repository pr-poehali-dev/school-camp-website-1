import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block text-primary">Летние каникулы</span>
              <span className="block">в лагере "Солнышко"</span>
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              Безопасная и увлекательная среда для развития, отдыха и новых друзей. Наша миссия — сделать лето вашего ребенка незабываемым!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg px-8">Записаться сейчас</Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Подробнее о программах
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center">
                <div className="text-primary text-3xl font-bold mr-2">10+</div>
                <div className="text-sm">лет опыта работы</div>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center">
                <div className="text-primary text-3xl font-bold mr-2">500+</div>
                <div className="text-sm">счастливых детей</div>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-4 flex items-center">
                <div className="text-primary text-3xl font-bold mr-2">20+</div>
                <div className="text-sm">опытных педагогов</div>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Дети в летнем лагере"
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
