import { Button } from './ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../lib/breadcrumb-context';
import RandomizeButton from './RandomizeButton';

export default function NavigationMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { labels } = useBreadcrumbs();

  const navRoutes = [
    { label: labels.foo, path: '/foo' },
    { label: labels.bar, path: '/foo/bar' },
    { label: labels.baz, path: '/foo/bar/baz' },
  ];

  return (
    <div className="flex gap-2 justify-between items-center my-10">
      <div className="flex gap-2 justify-center items-center">
        Links to navigate:
        {navRoutes.map(({ label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Button
              key={path}
              onClick={() => navigate(path)}
              variant={isActive ? 'outline' : 'ghost'}
              size="sm"
            >
              {label}
            </Button>
          );
        })}
      </div>
      <RandomizeButton />
    </div>
  );
}
