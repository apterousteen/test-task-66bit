import { useEffect, useRef, useState } from 'react';
import NewsCard from '../components/NewsCard';
import InfoContainer from '../components/InfoContainer';
import { Container } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NEWS_GET_ENDPOINT, newsCountPerRequest } from '../config';
import { timeout, formatDate } from '../helpers';
import PullToRefresh from 'react-pull-to-refresh';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const newsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  py: 3,
};

const loadingButtonStyle = {
  position: 'fixed',
  m: 'auto',
  left: 0,
  right: 0,
  width: 'fit-content',
  bgcolor: 'secondary.main',
  border: '2px solid',
  borderColor: 'primary.dim',
  color: 'primary.dim',
  textTransform: 'none',
  '&:hover': {
    bgcolor: 'secondary.main',
    border: '2px solid',
    color: 'textColor.main',
  },
};

export default function NewsFeed() {
  const [showButton, setShowButton] = useState(false);
  const [news, setNews] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [newsRefreshing, setNewsRefreshing] = useState(false);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsErrorMsg, setNewsErrorMsg] = useState('');

  const filterUniqueNews = (news, rawData) => {
    const ids = news.map((newsItem) => newsItem.id);
    const uniqueData = rawData.filter((dataItem) => !ids.includes(dataItem.id));

    return uniqueData;
  };

  // Для появления кнопки получения свежих новостей
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Получение свежих новостей
  const handleRefresh = async () => {
    try {
      setNewsRefreshing(true);

      const fetchPromise = fetch(
        `${NEWS_GET_ENDPOINT}?page=${1}&count=${newsCountPerRequest}`
      );

      const res = await Promise.race([fetchPromise, timeout(4)]);

      if (!res.ok) throw new Error(`Latest news fetch error`);

      const data = await res.json();

      setNews((news) => {
        // Устранение дубликатов
        const uniqueNews = filterUniqueNews(news, data);
        return [...uniqueNews, ...news];
      });
    } catch (e) {
      console.error(e.message);
    } finally {
      window.scrollTo({ top: 0 });
      setNewsRefreshing(false);
      setCurPage((cp) => cp - 1);
    }
  };

  // Бесконечный скролл с использованием Intersection Observer
  const observerTarget = useRef(null);
  const isIntersecting = useIntersectionObserver(observerTarget, {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0,
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        setNewsErrorMsg('');

        const fetchPromise = fetch(
          `${NEWS_GET_ENDPOINT}?page=${curPage}&count=${newsCountPerRequest}`
        );
        const res = await Promise.race([fetchPromise, timeout(4)]);

        if (!res.ok) throw new Error(`Что-то пошло не так. Попробуйте снова`);

        const data = await res.json();
        console.log(data);

        setNews((news) => {
          // Устранение дубликатов
          const uniqueNews = filterUniqueNews(news, data);
          return [...news, ...uniqueNews];
        });

        setCurPage((cp) => cp + 1);

        setNewsErrorMsg('');
      } catch (e) {
        setNewsErrorMsg(e.message);
      } finally {
        setNewsLoading(false);
      }
    };

    setNewsLoading(true);

    if (isIntersecting && newsLoading) {
      fetchNews();
    }
  }, [isIntersecting]);

  return (
    <PullToRefresh onRefresh={handleRefresh} className="ptr-container">
      <Container sx={newsContainerStyle}>
        {showButton && (
          <LoadingButton
            sx={loadingButtonStyle}
            loadingPosition="start"
            startIcon={<ArrowUpwardIcon />}
            variant="outlined"
            loading={newsRefreshing}
            onClick={handleRefresh}
          >
            Свежие новости
          </LoadingButton>
        )}
        {news?.map((n) => (
          <NewsCard
            key={n.id}
            title={n.title}
            date={formatDate(n.createdAt)}
            content={n.content}
          />
        ))}
        <InfoContainer
          ref={observerTarget}
          newsLoading={newsLoading}
          newsErrorMsg={newsErrorMsg}
        />
      </Container>
    </PullToRefresh>
  );
}
