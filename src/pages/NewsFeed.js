import { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import ObserverRef from '../components/ObserverRef';
import { Container, Fab } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { NEWS_GET_ENDPOINT, newsCountPerRequest } from '../config';
import { timeout, formatDate } from '../helpers';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [latestNewsLoading, setLatestNewsLoading] = useState(false);
  const [newsLoading, setNewsLoading] = useState(false);
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
  const fetchLatestNews = async () => {
    try {
      setLatestNewsLoading(true);

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
      setLatestNewsLoading(false);
    }
  };

  return (
    <Container sx={newsContainerStyle}>
      {showButton && (
        <LoadingButton
          sx={loadingButtonStyle}
          loadingPosition="start"
          startIcon={<ArrowUpwardIcon />}
          variant="outlined"
          loading={latestNewsLoading}
          onClick={fetchLatestNews}
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
      <NewsCard
        key={Math.random()}
        title={'News Heading'}
        date={'15.12.2023'}
        content="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное"
      />
      <NewsCard
        key={Math.random()}
        title={'News Heading'}
        date={'15.12.2023'}
        content="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное"
      />{' '}
      <NewsCard
        key={Math.random()}
        title={'News Heading'}
        date={'15.12.2023'}
        content="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное"
      />{' '}
      <NewsCard
        key={Math.random()}
        title={'News Heading'}
        date={'15.12.2023'}
        content="Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное"
      />{' '}
      <ObserverRef />
    </Container>
  );
}
