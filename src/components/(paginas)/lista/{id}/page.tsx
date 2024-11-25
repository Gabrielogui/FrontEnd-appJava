import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;  // Obtém o parâmetro de URL 'id'
  
  // Acessando os search params (parâmetros de consulta)
  const searchParams = new URLSearchParams(router.asPath.split('?')[1]);
  const search = searchParams.get('search');  // Parâmetro 'search'
  const category = searchParams.get('category');  // Parâmetro 'category'

  return (
    <div>
      <h1>Detalhes do Produto {id}</h1>
      <p>Search: {search}</p>
      <p>Category: {category}</p>
    </div>
  );

}

export default Page;