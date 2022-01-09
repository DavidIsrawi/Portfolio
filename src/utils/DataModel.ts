export interface UserContent {
    contentTypes: ContentType[]
}

export interface ContentType {
    type: string,
    content: ContentItem[]
}

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

export interface MapsList {
    title: string,
    url: string
}

export interface ContentItemLinks {
    title: string,
    url: string
}

export interface UserProfile {
    name: string,
    about: string[],
    description: string,
    email: string,
    img: string,
    resume: string
}

export interface MapsListsCategory {
    name: string,
    description: string,
    mapsLists: MapsList[]
}