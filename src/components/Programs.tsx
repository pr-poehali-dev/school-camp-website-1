import { BookOpen, Music, Users, Palette, Code, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const programsData = [
  {
    title: "Творческая мастерская",
    description: "Рисование, лепка, аппликации и другие виды творчества для развития креативности.",
    icon: <Palette className="h-10 w-10 text-primary" />,
    color: "bg-pink-50"
  },
  {
    title: "Спортивные игры",
    description: "Активные командные игры, эстафеты и соревнования для физического развития.",
    icon: <Users className="h-10 w-10 text-primary" />,
    color: "bg-blue-50"
  },
  {
    title: "Образовательные занятия",
    description: "Интерактивные уроки и мастер-классы для расширения кругозора и получения новых знаний.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    color: "bg-green-50"
  },
  {
    title: "Музыка и танцы",
    description: "Возможность проявить себя в музыке, пении и танцах под руководством профессионалов.",
    icon: <Music className="h-10 w-10 text-primary" />,
    color: "bg-purple-50"
  },
  {
    title: "Робототехника",
    description: "Основы программирования и конструирования роботов для технически увлеченных детей.",
    icon: <Code className="h-10 w-10 text-primary" />,
    color: "bg-yellow-50"
  },
  {
    title: "Личностный рост",
    description: "Тренинги и игры на развитие лидерских качеств, коммуникативных навыков и командной работы.",
    icon: <Award className="h-10 w-10 text-primary" />,
    color: "bg-red-50"
  }
];

const Programs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Наши программы</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Разнообразные активности для всестороннего развития детей, которые помогут им провести лето с пользой и удовольствием.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className={`${program.color} flex flex-row items-center space-y-0 gap-4`}>
                <div className="bg-white rounded-full p-2 shadow-sm">
                  {program.icon}
                </div>
                <CardTitle>{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base">{program.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
