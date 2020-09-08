import capitalize from './capitalize';

export default (pathname) => {
  const splitName = pathname.split('/');
  const page = splitName[splitName.length - 1];
  return page.length > 0 ? capitalize(page.replace('-', ' ')) : 'Home';
};
