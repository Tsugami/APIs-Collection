import { Blog } from '../api';
import { formatDate } from '../util/date-util';

interface PostCardProps {
  post: Blog;
}

export const PostCard = ({ post }: PostCardProps) => {
  return (
    <article
      className='w-full bg-neutral-800 p-6 rounded shadow-md hover:cursor-pointer'
      aria-labelledby={`post-title-${post.title}`}
      tabIndex={0} // Permite foco para navegação por teclado
    >
      <header>
        <h2 id={`post-title-${post.title}`} className='text-2xl font-bold text-neutral-100'>
          {post.title}
        </h2>
      </header>
      <p className='my-2 text-lg text-neutral-400'>{post.content}</p>
      <footer className='text-xs text-neutral-400'>
        <span>{formatDate(post.created_at)}</span>
        <span aria-label='Tags associadas'>{` | ${post.tags.join(' - ')}`}</span>
      </footer>
    </article>
  );
};
