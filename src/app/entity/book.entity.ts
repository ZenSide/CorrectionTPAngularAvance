import {Author} from "./author.entity";

export class Book {
  id: number;
  title: string;
  description: string;
  author: Author;
}
