interface Poem {
  id: number;
  title: string;
  description?: string;
  image: string;
  date?: string;
  user_id?: number;
}

interface PoemWithAuthor extends Poem {
  name: string;
}
