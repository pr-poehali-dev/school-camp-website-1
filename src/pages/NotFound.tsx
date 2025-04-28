import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-4">Страница не найдена</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-md mx-auto">
            Извините, но страница, которую вы пытаетесь найти, не существует или была перемещена.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button size="lg">
                Вернуться на главную
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
