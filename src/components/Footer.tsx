import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, YouTube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Летний лагерь "ШИК"</h3>
            <p className="text-gray-300 mb-4">
              Школа Идеальных Каникул — место, где дети находят новых друзей, развиваются и получают яркие эмоции каждый день.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-primary text-2xl font-bold">ШИК</span>
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
                <span className="text-gray-300">info@shik-camp.ru</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 15:00<br />Вс: Выходной</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <p className="text-gray-300 mb-4">
              Следите за новостями лагеря в социальных сетях и присоединяйтесь к нашему сообществу.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-opacity-80 transition-colors">
                <YouTube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Летний лагерь "ШИК". Все права защищены.
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
