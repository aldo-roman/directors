/**
 * Created by aldo on 1/21/16.
 */

export interface IDirector {
    name:string;
    fullName: string;
    image: string;
    sex: string;
    nationality: string;
    state: string;
    city: string;
    dob: number; // birthday timestamp
    birthday: Date;
    age: number;
    blockbuster: string;
    blockbusters: IBlockbuster[];
    bio: string;
    spouse: string;
    children: string[];
}

export interface IBlockbuster {
    movieName: string;
    release: number; // year of movie release
}