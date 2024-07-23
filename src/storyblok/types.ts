type Story = {
  created_at: string;
  published_at: string | null;
  content: {
    title: string;
    description: string;
  };
  slug: string;
  tag_list: string[];
};

type Post = {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags?: string | string[];
};
