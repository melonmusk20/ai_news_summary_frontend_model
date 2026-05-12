function NewsCard({ article }) {

    return (
  
      <div className="bg-white rounded-xl shadow-md p-5">
  
        <h2 className="text-xl font-bold mb-3">
          {article.title}
        </h2>
  
        <p className="text-sm text-gray-500 mb-2">
          {article.source}
        </p>
  
        <div className="mb-3">
  
          <span className="font-semibold">
            Summary:
          </span>
  
          <p className="text-gray-700">
            {article.summary}
          </p>
  
        </div>
  
        <div className="mb-3">
  
          <span className="font-semibold">
            Sentiment:
          </span>
  
          <p>
            {article.sentiment}
          </p>
  
        </div>
  
        <div className="mb-3">
  
          <span className="font-semibold">
            Insights:
          </span>
  
          <p className="whitespace-pre-line">
            {article.insights}
          </p>
  
        </div>
  
        <a
          href={article.articleUrl}
          target="_blank"
          className="text-blue-600"
        >
          Read Full Article
        </a>
  
      </div>
    );
  }
  
  export default NewsCard;