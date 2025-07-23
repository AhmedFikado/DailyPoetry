interface PoemCardProps {
  id: number;
  title: string;
  image: string;
  name: string;
}

interface Poem {
  poem_id: number;
  title: string;
  description?: string;
  poem_image: string;
  date?: string;
  user_id?: number;
}

interface PoemWithAuthor extends Poem {
  user_name: string;
}
