 

export class IMoviesListTemplate{
    Response: string
    Search: IMoviesSearchTemplate[]
    totalResults: string 
}

export class IMoviesListErrorTemplate{
    Response: string
    Error: string
}

export class IMoviesSearchTemplate{
    MovieData: IMovieDataTemplate | {}
    Expand: boolean
    Title: string
    Poster: string
    Year: string
    imdbID: string
    Type: string
}

export class IMovieDataTemplate{
    Plot: string
    Actors: string
    Ratings: []
}