This library provides a utility function called _generator_ that outputs standard NFT metadata based on the input provided. The generator function can produce large amounts of data for testing purposes, making it very useful for web3 developers.

The function takes an Input object as input and returns an array of Output objects, which represent the generated metadata. By default, the input object only requires a collection size, but other customizations are possible if you wish to adjust trait types, rarity, and other NFT details.

Installation:

```
npm i nftmetadatagenerator
```

Import the generator:

```
import generator from 'nftmetadatagenerator/dist/generator'

```

Use it in your code (Input Types are described later):

```

const metadata = generator(
  {collectionSize:100}
  ) 

```

Console logging the first object in the returned array will result in:

```

{"name":"POWER 1",

"description":"Freely Generated Metadata",
"compiler":"Free Metadata Generator",
"image":"https://picsum.photos/400",
"attributes":
[
  {"trait_type":"Strength","value":10},
  {"trait_type":"Agility","value":10},
  {"trait_type":"Power","value":14},
  {"trait_type":"Intelligence","value":15},
  {"trait_type":"Charm","value":12},
  {"trait_type":"Dexterity","value":10},
  {"trait_type":"Charisma","value":12}

]}

```

The input object allows for robust customization. It has the following structure:

```
    {
  uniqueTraits?: Trait[];
  incrementImageURLs?: boolean;
  image?: string;
  imageSuffix?: string;
  name?: string;
  description?: string;
  compiler?: string;
  autogenerate? : boolean
  collectionSize: number
}


```
 
**uniqueTraits:** (optional) an array of Trait objects, which have the following properties:

**traitType:** a string that represents the type of trait

**possibleValues:** an array of objects, each of which has the following properties:

**value:** a string or a number that represents a possible value of the trait
**percentage:** a number that represents the percentage chance of the value being selected

The default value is an array of 7 traits, each with 5 possible values.

**incrementImageURLs:** (optional) a boolean that determines whether to increment the image URL to match common metadata patterns.  The default value is false because the generator uses a placeholder image service.

**image:** (optional) a string that represents the base URL for the image. The default value is "https://picsum.photos/400".


**imageSuffix:** (optional) a string that represents the suffix to be added to the image URL. The default value is an empty string.

**name:** (optional) a string that represents the base name of the generated object. The default value is an empty string.

**description:** (optional) a string that represents the base description of the generated object. The default value is "Freely Generated Metadata".

**compiler:** (optional) a string that represents the compiler of the generated object. The default value is "Free Metadata Generator".

**autogenerate:** (optional) a boolean that determines if the function should generate the data automatically with no further input. The default value is true.

**collectionSize:** a number that represents the number of objects to generate in the output.

The returned Output objects have the following structure:

```
  {
  name: string;
  description: string;
  compiler: string;
  image: string;
  attributes: Attribute[];
}
```

Output objects are returned in an array.

Here is a sample input object:

```
{
            startSeed: 1,
            endSeed: 10,
            uniqueTraits: [
              {
                traitType: "color",
                possibleValues: [
                  { value: "red", percentage: 30 },
                  { value: "blue", percentage: 20 },
                  { value: "green", percentage: 50 }
                ]
              },
              {
                traitType: "size",
                possibleValues: [
                  { value: "small", percentage: 40 },
                  { value: "medium", percentage: 30 },
                  { value: "large", percentage: 30 }
                ]
              }
            ],
            useSeedForImage: true,
            name: "Cool Collection",
            image: "https://picsum.photos/400/",
            imageSuffix: ".jpg"
        }

```
