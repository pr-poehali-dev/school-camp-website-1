import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Trophy, Music, Book, Activity, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Творческая мастерская",
      description: "Рисование, лепка, мозаика и другие творческие занятия для развития фантазии и мелкой моторики",
      icon: <Palette className="h-10 w-10 text-primary" />,
      age: "7-14 лет",
      duration: "2 недели",
      image: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Спортивная олимпиада",
      description: "Командные и индивидуальные соревнования, эстафеты, игры на свежем воздухе для физического развития",
      icon: <Trophy className="h-10 w-10 text-primary" />,
      age: "8-16 лет",
      duration: "3 недели",
      image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Музыкальная студия",
      description: "Игра на музыкальных инструментах, вокал, танцы и постановка музыкальных номеров",
      icon: <Music className="h-10 w-10 text-primary" />,
      age: "9-15 лет",
      duration: "2 недели",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Наши программы</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            В лагере "ШИК" каждый ребенок найдет занятие по душе. Мы предлагаем разнообразные программы для детей разных возрастов и интересов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="pt-6">
                <div className="flex items-center mb-2">
                  {program.icon}
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted mb-2">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{program.age}</span>
                  </div>
                  <div className="flex items-center">
                    <Activity className="h-4 w-4 mr-1" />
                    <span>{program.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="default" size="lg" className="px-8">Все программы</Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
