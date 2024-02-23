import { ICountry } from "@/typings/country.interface";

export async function getCountries() {
    try {
        const countriesResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}getCountiesData/`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            },
        });

        if (!countriesResponse.ok) {
            throw new Error('Failed to fetch countries');
        }

        const countries: ICountry[] = await countriesResponse.json()

        return countries;
    } catch (error) {
        console.error(error);
        return null;
    }
}