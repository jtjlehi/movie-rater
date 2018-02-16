export interface MovieObj {
    title: string;
    description: string
    image: {
        link: string;
        description: string;
    }
    public_rating: number;
    app_rating: number
    fireId: string;
}