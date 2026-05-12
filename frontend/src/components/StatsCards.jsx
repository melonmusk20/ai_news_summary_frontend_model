function StatsCards({ articles }) {

    const positive =
      articles.filter(a =>
        a.sentiment?.toLowerCase()
          .includes("positive")
      ).length;
  
    const negative =
      articles.filter(a =>
        a.sentiment?.toLowerCase()
          .includes("negative")
      ).length;
  
    const neutral =
      articles.filter(a =>
        a.sentiment?.toLowerCase()
          .includes("neutral")
      ).length;
  
    return (
  
      <div className="grid md:grid-cols-3 gap-4 mb-6">
  
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            Positive
          </h3>
  
          <p className="text-2xl">
            {positive}
          </p>
        </div>
  
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            Negative
          </h3>
  
          <p className="text-2xl">
            {negative}
          </p>
        </div>
  
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="font-bold">
            Neutral
          </h3>
  
          <p className="text-2xl">
            {neutral}
          </p>
        </div>
  
      </div>
    );
  }
  
  export default StatsCards;