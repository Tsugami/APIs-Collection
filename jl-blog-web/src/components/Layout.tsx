import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex justify-center'>
      <main className='max-w-screen-lg w-full flex flex-col items-center'>
        <Header />
        <div className='max-w-screen-md w-full mt-14 p-6'>{children}</div>
      </main>
    </div>
  );
};
