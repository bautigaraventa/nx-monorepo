import { Outlet } from 'react-router-dom';
import { useBreadcrumbs } from '../../lib/breadcrumb-context';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';

export default function BazLayout() {
  const { labels } = useBreadcrumbs();

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-red-600 text-sm">
          {labels.baz} page
        </CardTitle>
      </CardHeader>
      <Separator />
      <CardContent>
        <Outlet />
      </CardContent>
    </Card>
  );
}
