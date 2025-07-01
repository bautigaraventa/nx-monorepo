import { createContext, useContext, useState, ReactNode } from 'react';

type BreadcrumbLabels = {
  foo: string;
  bar: string;
  baz: string;
};

const defaultLabels: BreadcrumbLabels = {
  foo: 'Foo',
  bar: 'Bar',
  baz: 'Baz',
};

const randomLabels = [
  ['Foo', 'Bar', 'Baz'],
  ['One', 'Two', 'Three'],
  ['Alpha', 'Beta', 'Gamma'],
  ['Cat', 'Dog', 'Bird'],
  ['Uno', 'Dos', 'Tres'],
];

function getRandomLabels(prev?: BreadcrumbLabels): BreadcrumbLabels {
  let choices = randomLabels;
  if (prev) {
    choices = randomLabels.filter(
      ([foo, bar, baz]) =>
        foo !== prev.foo || bar !== prev.bar || baz !== prev.baz
    );
  }

  const [foo, bar, baz] = choices[Math.floor(Math.random() * choices.length)];
  return { foo, bar, baz };
}

const BreadcrumbContext = createContext<{
  labels: BreadcrumbLabels;
  randomize: () => Promise<void>;
}>({
  labels: defaultLabels,
  randomize: async () => {},
});

export const useBreadcrumbs = () => useContext(BreadcrumbContext);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [labels, setLabels] = useState(defaultLabels);

  const randomize = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setLabels(getRandomLabels(labels));
        resolve();
      }, 1000);
    });
  };

  return (
    <BreadcrumbContext.Provider value={{ labels, randomize }}>
      {children}
    </BreadcrumbContext.Provider>
  );
}
