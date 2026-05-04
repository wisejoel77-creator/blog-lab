import Article from "./Article";

function ArticleList() {
  const articles = [
    {
      id: 1,
      title: "First Article",
      content: "This is the first article."
    },
    {
      id: 2,
      title: "Second Article",
      content: "This is the second article."
    },
    {
      id: 3,
      title: "Third Article",
      content: "This is the third article."
    }
  ];

  return (
    <div>
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          content={article.content}
        />
      ))}
    </div>
  );
}

export default ArticleList;