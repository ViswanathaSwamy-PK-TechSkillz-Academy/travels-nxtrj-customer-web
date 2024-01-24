'use server'

import { Country, PagedResult } from "@/types";
import { fetchWrapper } from "../lib/fetchWrapper";

export async function getData(query: string): Promise<PagedResult<Country>> {
    console.log('getData(). Query:', query);

    return fetchWrapper.get(`/api/countries`);
}
