export interface CardItem {
    _id: string,
    img: CardImg,
    description: CardDescription,
    links?: CardLinks[]
}

interface CardImg {
path: string,
title: string,
}

interface CardDescription {
    title: string,
    description: string
}

export interface CardLinks {
    title: string,
    url: string
}