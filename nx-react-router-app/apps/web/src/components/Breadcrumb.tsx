import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { Link, useLocation } from 'react-router-dom';
import { useBreadcrumbs } from '../lib/breadcrumb-context';

export default function Breadcrumbs() {
  const location = useLocation();
  const { labels } = useBreadcrumbs();

  const pathParts = location.pathname.split('/').filter(Boolean);

  const breadcrumbMap: Record<string, string> = {
    foo: labels.foo,
    bar: labels.bar,
    baz: labels.baz,
  };

  const paths: string[] = [];
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathParts.map((part, idx) => {
          paths.push(part);
          const fullPath = '/' + paths.join('/');

          const isLast = idx === pathParts.length - 1;
          return (
            <React.Fragment key={fullPath}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{breadcrumbMap[part]}</BreadcrumbPage>
                ) : (
                  <Link to={fullPath}>{breadcrumbMap[part]}</Link>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
