import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">Страница не найдена</h2>
            <p className="mt-4 text-xl text-gray-600">
              Извините, страница, которую вы ищете, не существует или была перемещена.
            </p>
            <div className="mt-10">
              <Link to="/">
                <Button size="lg">Вернуться на главную</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
