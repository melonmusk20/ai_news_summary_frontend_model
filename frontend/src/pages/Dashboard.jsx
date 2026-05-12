import { useEffect, useState } from "react";
import API from "../services/api";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import StatsCards from "../components/StatsCards";

function Dashboard() {

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {

    try {

      const response =
        await API.get("/articles");

      setArticles(response.data);

    } catch (error) {
      console.log(error);
    }
    finally {

        setLoading(false);
      }
  };

  const filteredArticles =
    articles.filter(article =>
      article.title?.toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-6">
          AI News Intelligence Dashboard
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <StatsCards articles={articles} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

          {filteredArticles.map(article => (
            <NewsCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;