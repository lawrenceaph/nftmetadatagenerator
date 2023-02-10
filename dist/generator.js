"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generator = (input) => {
    const { uniqueTraits = [
        {
            traitType: "Strength",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ],
        },
        {
            traitType: "Agility",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        },
        {
            traitType: "Power",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        },
        {
            traitType: "Intelligence",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        }, {
            traitType: "Charm",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        }, {
            traitType: "Dexterity",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        }, {
            traitType: "Charisma",
            possibleValues: [
                { value: 10, percentage: 20 },
                { value: 12, percentage: 20 },
                { value: 14, percentage: 20 },
                { value: 15, percentage: 20 },
                { value: 17, percentage: 20 },
            ]
        },
    ], incrementImageURLs = false, image = "https://picsum.photos/400", imageSuffix = "", autogenerate = true, collectionSize = 100, name = 'Awesome Collection', description = 'Freely Generated Metadata', compiler = 'Free Metadata Generator', } = input;
    const outputs = [];
    if (autogenerate) {
        for (let seed = 1; seed <= collectionSize; seed++) {
            const output = {
                name: `${name} ${seed}`,
                description,
                compiler,
                image: incrementImageURLs
                    ? `${image}/${seed}${imageSuffix}`
                    : image,
                attributes: [],
            };
            for (const trait of uniqueTraits) {
                const { traitType, possibleValues } = trait;
                const selectedValue = getSelectedValue(possibleValues, Math.random);
                output.attributes.push({
                    trait_type: traitType,
                    value: selectedValue,
                });
            }
            outputs.push(output);
        }
        return outputs;
    }
    else {
        for (let seed = 1; seed <= collectionSize; seed++) {
            const output = {
                name: `${name} ${seed}}`,
                description,
                compiler,
                image: incrementImageURLs
                    ? `${image}/${seed}${imageSuffix}`
                    : image,
                attributes: [],
            };
            for (const trait of uniqueTraits) {
                const { traitType, possibleValues } = trait;
                const selectedValue = getSelectedValue(possibleValues, Math.random);
                output.attributes.push({
                    trait_type: traitType,
                    value: selectedValue,
                });
            }
            outputs.push(output);
        }
        return outputs;
    }
};
function getSelectedValue(possibleValues, randomFunction) {
    var _a;
    const totalPercentage = possibleValues.reduce((sum, value) => sum + value.percentage, 0);
    const randomPercentage = randomFunction() * totalPercentage;
    let currentPercentage = 0;
    for (const value of possibleValues) {
        currentPercentage += value.percentage;
        if (currentPercentage >= randomPercentage) {
            return value.value;
        }
    }
    return (_a = possibleValues[0]) === null || _a === void 0 ? void 0 : _a.value;
}
exports.default = generator;
