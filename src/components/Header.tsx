import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">ШИК</span>
              <span className="ml-2 text-sm font-medium text-muted-foreground">летний лагерь</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              О лагере
            </Link>
            <Link to="/programs" className="text-sm font-medium hover:text-primary transition-colors">
              Программы
            </Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
              Галерея
            </Link>
            <Link to="/contacts" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </Link>
            <Button size="sm">Записаться</Button>
          </nav>

          {/* Contact info - desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-1" />
              <span>+7 (347) 273-43-46</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <span className="sr-only">Открыть меню</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              О лагере
            </Link>
            <Link 
              to="/programs" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Программы
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Галерея
            </Link>
            <Link 
              to="/contacts" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="pt-2">
              <Button className="w-full">Записаться</Button>
            </div>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Phone className="h-4 w-4" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">+7 (347) 273-43-46</div>
              </div>
            </div>
            <div className="flex items-center px-5 mt-2">
              <div className="flex-shrink-0">
                <MapPin className="h-4 w-4" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">ул. Пушкина 108</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
