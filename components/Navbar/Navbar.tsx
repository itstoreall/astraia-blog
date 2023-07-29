import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();

  const navigation = [{ id: 1, title: 'Articles', path: '/articles' }];

  return (
    <nav>
      {navigation.map(
        ({ id, title, path }: { id: number; title: string; path: string }) => {
          return (
            <Link key={id} href={path}>
              {title}
            </Link>
          );
        }
      )}
    </nav>
  );
};

export default Navbar;
