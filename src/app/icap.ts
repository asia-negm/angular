export interface IAuthor {
    name:string;
    avatar:string;
    role:string
}

export interface ICap{
id:number;
slug:string;
title:string;
 excerpt: string;
    content: string;
    category: string;
    author: IAuthor;
    image: string;
    date: string;
    readTime: string;
    featured: boolean;
    tags: string[];
}

