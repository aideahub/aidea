export type Category = {
    id: number;
    name: string;
    slug: string;
};

export type SeriesInfo = {
    title: string;
    slug: string;
    part_number: number;
};

export type PostDetails = {
    id: number;
    intro_image: string;
    title: string;
    slug: string;
    created_on: string; // ISO 8601 date-time string
    categories: Category[];
    series_info: SeriesInfo | null; // Optional, in case some posts don't have series info
};