export interface ContentItem {
    img: ContentItemImg,
    description: ContentItemDescription,
    links?: ContentItemLinks[]
}

interface ContentItemImg {
    path: string,
    title: string,
}

interface ContentItemDescription {
    title: string,
    description: string
}

export interface ContentItemLinks {
    title: string,
    url: string
}

export interface UserProfile {
    name: string,
    description: string,
    img: string
}

export interface UserContent {
    contentTypes: ContentType[]
}

export interface ContentType {
    type: string,
    content: ContentItem[]
}