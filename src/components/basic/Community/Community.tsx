type Props = {
  id: string;
  name: string;
  url: string;
};

export default function Community({ id, name, url}: Props) {
  return (
    <a href={url} className="flex rounded-lg overflow-hidden relative min-h-[150px]">
      <img src={`/images/community/${id}.jpg`} className="object-cover mx-auto lg:rounded-lg" />
      <span className="flex items-center absolute bottom-2 right-1/2 translate-x-1/2 text-white bg-project-primary rounded-full px-2">{name}</span>
    </a>
  );
}
