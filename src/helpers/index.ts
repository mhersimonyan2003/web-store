import { PAGE_SIZE } from '@/constants';
import { Pagination } from '@/types';

export const formatDate = (date: Date) => {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const formatNumber = (num: number) => {
  const strNum = String(num.toFixed(2));
  const [intPart, floarPart] = strNum.split('.');

  const formattedIntPart = intPart
    .split('')
    .reduceRight((acc: Array<Array<string>>, res: string) => {
      if (acc.length === 0 || acc[acc.length - 1].length === 3) {
        acc.push([res]);
      } else {
        acc[acc.length - 1].push(res);
      }

      return acc;
    }, [])
    .reverse()
    .map((numbers) => numbers.reverse().join(''))
    .join(' ');

  return [formattedIntPart, floarPart].join(',');
};

export const queryFilters = <T extends object>(filters: T) => {
  return new URLSearchParams(
    Object.fromEntries(Object.entries(filters).map(([key, value]) => [key, JSON.stringify(value)]))
  );
};

export const getFiltersObj = <T extends object>({ filters, page }: { filters?: T; page?: number }) => {
  const pagination: Omit<Pagination, 'total'> = page
    ? {
        pageSize: PAGE_SIZE,
        pageNumber: page,
      }
    : null;

  return {
    pagination,
    ...filters,
  };
};
