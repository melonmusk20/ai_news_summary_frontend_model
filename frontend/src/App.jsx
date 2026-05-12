import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState("");
  const [sentimentFilter, setSentimentFilter] = useState("All");

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    setLoading(true);
    API.get("/articles")
      .then((res) => {
        setArticles(res.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const fetchFreshNews = () => {
    setFetching(true);
    API.get("/fetch-news")
      .then(() => {
        loadArticles();
        setFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setFetching(false);
      });
  };

  const getSentimentColor = (sentiment) => {
    if (!sentiment) return "bg-gray-100 text-gray-700";
    const s = sentiment.toLowerCase();
    if (s.includes("positive")) return "bg-green-100 text-green-700";
    if (s.includes("negative")) return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesSentiment =
      sentimentFilter === "All" ||
      article.sentiment?.toLowerCase().includes(sentimentFilter.toLowerCase());
    return matchesSearch && matchesSentiment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              AI News Intelligence
            </h1>
            <p className="text-sm text-gray-500">
              {articles.length} articles processed with AI insights
            </p>
          </div>
          <button
            onClick={fetchFreshNews}
            disabled={fetching}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            {fetching ? "Fetching..." : "Fetch Fresh News"}
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search articles by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={sentimentFilter}
            onChange={(e) => setSentimentFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Sentiments</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
            <option value="Neutral">Neutral</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500">
            Loading articles...
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No articles match your filter. Try Fetch Fresh News.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                    {article.title}
                  </h2>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${getSentimentColor(
                      article.sentiment
                    )}`}
                  >
                    {article.sentiment?.split(/\s+/)[0] || "N/A"}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium text-gray-800">Summary: </span>
                  {article.summary}
                </p>

                {article.insights && (
                  <div className="text-sm text-gray-600 mb-3 bg-gray-50 p-3 rounded-lg">
                    <span className="font-medium text-gray-800 block mb-1">
                      Key Insights:
                    </span>
                    <div className="whitespace-pre-line">{article.insights}</div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-500 mt-3">
                  <span>Source: {article.source || "Unknown"}</span>
                  {article.articleUrl && (
                    <a
                      href={article.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Read original →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
export default App;
