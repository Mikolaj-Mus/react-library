class BookModel {
  id: number;
  title: string;
  author?: string;
  description?: string;
  copies?: number;
  copiesAvailable?: number;
  category?: string;
  img?: string;

  constructor(
    id: string,
    title: string,
    author: string,
    description: string,
    copies: string,
    copiesAvailable: string,
    category: string,
    img: string
  ) {
    this.id = parseInt(id);
    this.title = title;
    this.author = author;
    this.description = description;
    this.copies = parseInt(copies);
    this.copiesAvailable = parseInt(copiesAvailable);
    this.category = category;
    this.img = img;
  }
}

export default BookModel;
