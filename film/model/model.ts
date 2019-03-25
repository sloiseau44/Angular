
export class Film{
    constructor(public title:string,
                public releasedate:string,
                public studio:string,
                public poster:string,
                public location:string,
                public rating:Rating,
                public genre:string[],
                public directors:string[],
                public actors:string[],
                public trailers:Trailer[]
    ){}
}

export enum Rating {
    G,
    PG,
    PG13,
    R,
    NC17
}

export class Trailer{
    constructor(public postdate:string,
                public url:string,
                public type:string,
                public exclusive:boolean,
                public hd:boolean){}
}

