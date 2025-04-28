import React from "react";
import { NewsBlock } from "./NewsBlock";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { getPopularAnime, searchAnime } from "./api/animeApi"; // <== use your backend!
import defaultImage from "./assets/default-image.jpg";

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  id: string;
}

export const Home: React.FC = () => {
  const [newspaper, setNewspaper] = React.useState<Article[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const pageCount = React.useRef<number>(5); // you can make it dynamic later

  React.useEffect(() => {
    setLoading(true);
    const uniqueId = () =>
      String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, "");

    const fetchAnimeData = async () => {
      try {
        let data;
        console.log('Fetched anime:', data);
        if (searchValue) {
          data = await searchAnime(searchValue);
        } else {
          data = await getPopularAnime();
        }

        const articles: Article[] = data.map((anime: any) => ({
          url: "", // not needed yet
          urlToImage: anime.images?.jpg?.image_url || defaultImage,
          title: anime.title,
          description: anime.synopsis || "No description available",
          publishedAt: anime.aired?.from || "Unknown date",
          author: anime.studios?.[0]?.name || "Unknown studio",
          id: uniqueId(),
        }));

        setNewspaper(articles);
        pageCount.current = 5; // Or calculate later if you add real pagination
      } catch (error) {
        console.error("Error fetching anime data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeData();
  }, [searchValue, currentPage]);

  return (
    <>
      <Search setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
      <div className="content">
        {loading ? (
          <div>Loading...</div>
        ) : newspaper.length ? (
          newspaper.map((obj) => <NewsBlock key={obj.id} {...obj} />)
        ) : (
          <div className="not-found">
            <h1>
              <span>😕</span>
              <br />
              Nothing found
            </h1>
          </div>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount.current}
        onChangePage={(number) => setCurrentPage(number)}
      />
    </>
  );
};
