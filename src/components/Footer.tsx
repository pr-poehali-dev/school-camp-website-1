import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Школьный лагерь "Солнышко"</h3>
            <p className="text-gray-300 mb-4">
              Мы создаем яркие воспоминания и помогаем детям расти и развиваться в дружеской атмосфере.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-primary text-2xl font-bold">Солнышко</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  О лагере
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-primary transition-colors">
                  Программы
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary transition-colors">
                  Галерея
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-300 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">ул. Пушкина 108, г. Уфа</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-300">+7 (347) 273-43-46</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <span className="text-gray-300">camp@sunshine.ru</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Пн-Пт: 8:00 - 19:00<br />Сб-Вс: Выходной</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Оставайтесь на связи</h3>
            <p className="text-gray-300 mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о наших программах и мероприятиях.
            </p>
            <form className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Подписаться
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Школьный лагерь "Солнышко". Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
