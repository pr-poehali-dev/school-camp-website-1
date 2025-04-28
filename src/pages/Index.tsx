import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />

        {/* Преимущества */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Почему выбирают нас</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Летний лагерь "Солнышко" — это идеальное место для активного и познавательного отдыха ваших детей.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                  <p className="text-gray-500">
                    Полностью безопасное пространство с квалифицированным персоналом и медицинским сопровождением 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Разнообразие</h3>
                  <p className="text-gray-500">
                    Более 20 различных активностей и программ для детей разных возрастов и интересов.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-none">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Гибкий график</h3>
                  <p className="text-gray-500">
                    Возможность выбрать удобный период пребывания, от недели до всего летнего сезона.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Programs />

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Отзывы родителей</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Узнайте, что говорят родители о нашем лагере и почему они выбирают нас каждый год.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-4xl text-primary absolute top-4 left-4">"</div>
                <div className="pl-6 pt-6">
                  <p className="text-gray-600 mb-6">
                    Мой сын провел в лагере две недели и был в восторге! Разнообразные занятия, дружелюбные вожатые и новые друзья. Обязательно запишемся снова в следующем году.
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Елена Иванова</p>
                      <p className="text-gray-500 text-sm">Мама Димы, 9 лет</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-4xl text-primary absolute top-4 left-4">"</div>
                <div className="pl-6 pt-6">
                  <p className="text-gray-600 mb-6">
                    Отлично организованный лагерь с профессиональными педагогами. Дочь научилась многим новым вещам и каждый день рассказывала о своих впечатлениях. Рекомендую всем!
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Сергей Петров</p>
                      <p className="text-gray-500 text-sm">Папа Маши, 11 лет</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="text-4xl text-primary absolute top-4 left-4">"</div>
                <div className="pl-6 pt-6">
                  <p className="text-gray-600 mb-6">
                    Главное для меня - безопасность ребенка, и в "Солнышке" она на высшем уровне. Отличное питание, медицинский контроль и внимательный персонал. Большое спасибо!
                  </p>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Анна Смирнова</p>
                      <p className="text-gray-500 text-sm">Мама Кости, 8 лет</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">Все отзывы</Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 xl:p-16">
                  <h2 className="text-3xl font-bold text-gray-900">Готовы записать ребенка в лагерь?</h2>
                  <p className="mt-4 text-xl text-gray-600">
                    Не упустите возможность подарить вашему ребенку незабываемое лето в лагере "Солнышко"! Места ограничены.
                  </p>
                  <div className="mt-8">
                    <Button size="lg" className="mr-4">Записаться сейчас</Button>
                    <Button variant="outline" size="lg">Задать вопрос</Button>
                  </div>
                  <div className="mt-8 text-sm text-gray-500">
                    * При записи до 15 мая действует скидка 10%
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Дети в лагере"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
