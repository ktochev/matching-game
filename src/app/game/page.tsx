import Game from "@/components/Game";
import { getCountries } from "@/services/countriesApi";
import { shuffleArray } from "@/utils/shuffleArray.util";

interface IReducedCountries {
    countryNames: string[];
    capitals: string[];
}

export default async function GamePage() {
    const countries = await getCountries();

    const countriesMap = new Map<string, string>();

    countries?.forEach(({ name, capital }) => {
        countriesMap.set(name, capital);
    });

    const countriesReduced = countries?.reduce((acc: IReducedCountries, { name, capital }) => {
        acc.countryNames.push(name);
        acc.capitals.push(capital);
        return acc;
    }, { countryNames: [], capitals: [] });

    const shuffledCapitals = shuffleArray(countriesReduced?.capitals);
    const shuffledCountries = shuffleArray(countriesReduced?.countryNames);

    return (
        <Game capitals={shuffledCapitals} countries={shuffledCountries} countriesMap={countriesMap} />
    );
}
