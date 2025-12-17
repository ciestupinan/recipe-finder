import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import {
  useQuery,
} from '@tanstack/react-query'

const RecipePage = () => {

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch(
        'https://api.github.com/repos/TanStack/query',
      )
      return await response.json()
    },
  })

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default RecipePage;
