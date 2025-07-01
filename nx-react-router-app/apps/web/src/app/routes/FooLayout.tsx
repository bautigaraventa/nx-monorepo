import { Outlet } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import Breadcrumbs from '../../components/Breadcrumb';
import { useBreadcrumbs } from '../../lib/breadcrumb-context';
import NavigationMenu from '../../components/NavigationMenu';

export default function FooLayout() {
  const { labels } = useBreadcrumbs();

  return (
    <div className="space-y-2 max-w-3xl mx-auto">
      <NavigationMenu />
      <Card className="max-w-3xl mx-auto mt-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Breadcrumbs />
          </div>
          <CardTitle className="text-blue-600 text-sm mt-6">
            {labels.foo} page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Outlet />
        </CardContent>
      </Card>
    </div>
  );
}
