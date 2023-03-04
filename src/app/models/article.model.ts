export class Article {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public image: string,
        public category: number,
        public isFavorite: boolean,
        public categoryName: string) {
    }
}