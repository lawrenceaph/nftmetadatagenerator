interface Trait {
    traitType: string;
    possibleValues: {
        value: string | number;
        percentage: number;
    }[];
}
interface Input {
    uniqueTraits?: Trait[];
    incrementImageURLs?: boolean;
    image?: string;
    imageSuffix?: string;
    name?: string;
    description?: string;
    compiler?: string;
    autogenerate?: boolean;
    collectionSize: number;
}
interface Attribute {
    trait_type: string;
    value?: string | number;
}
interface Output {
    name: string;
    description: string;
    compiler: string;
    image: string;
    attributes: Attribute[];
}
declare const generator: (input: Input) => Output[];
export default generator;
