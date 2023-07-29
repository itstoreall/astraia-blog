const Title = ({ tag, text }: { tag: any; text: string }) => {
  const Tag = tag || 'h1';

  return <Tag>{text}</Tag>;
};

export default Title;
