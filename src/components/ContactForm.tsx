import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Phone, Mail, MapPin, Calendar } from "lucide-react";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь был бы код отправки формы
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Свяжитесь с нами</h2>
            <p className="mt-4 text-lg text-gray-600">
              Остались вопросы? Заполните форму, и мы свяжемся с вами в ближайшее время. Или используйте наши контактные данные для прямой связи.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Телефон</h3>
                  <p className="mt-1 text-gray-600">+7 (347) 273-43-46</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@shik-camp.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Адрес</h3>
                  <p className="mt-1 text-gray-600">ул. Пушкина 108, г. Уфа</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Время работы</h3>
                  <p className="mt-1 text-gray-600">
                    Пн-Пт: 9:00 - 18:00<br />
                    Сб: 10:00 - 15:00<br />
                    Вс: Выходной
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Запись в лагерь</h3>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                  <Check className="h-8 w-8 text-green-500 mr-4" />
                  <div>
                    <h4 className="font-medium text-green-800">Форма отправлена!</h4>
                    <p className="text-green-600">Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя ребенка</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Возраст</Label>
                      <Input id="age" type="number" min="6" max="16" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="parentName">Имя родителя</Label>
                      <Input id="parentName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Выберите программу</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите программу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="creative">Творческая мастерская</SelectItem>
                        <SelectItem value="sports">Спортивная олимпиада</SelectItem>
                        <SelectItem value="music">Музыкальная студия</SelectItem>
                        <SelectItem value="all">Комплексная программа</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea id="message" rows={4} />
                  </div>

                  <Button type="submit" className="w-full">Отправить заявку</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
