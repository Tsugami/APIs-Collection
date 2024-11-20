import { useGetBlogs } from '../hooks/useGetBlogs';
import { PostCard } from './PostCard';

export const PostList = () => {
  const { data, error, isLoading } = useGetBlogs();

  if (error || !data) return <div>falhou em carregar</div>;
  if (isLoading) return <div>carregando...</div>;
  return (
    <div className='mt-10 flex flex-col gap-6'>
      {data.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};
