export type AnimeSummary = {
mal_id: number
title: string
images?: { jpg?: { image_url?: string } }
synopsis?: string
}

export type SearchResponse = {
data: AnimeSummary[]
pagination?: { last_visible_page?: number }
}

export async function searchAnime(query: string, page = 1, signal?: AbortSignal): Promise<SearchResponse> {
const q = encodeURIComponent(query)
const url = `https://api.jikan.moe/v4/anime?q=${q}&page=${page}`
const res = await fetch(url, { signal })
if (!res.ok) throw new Error(`API error ${res.status}`)
const json = await res.json()
return json
}

export async function getAnimeById(id: number, signal?: AbortSignal) {
const url = `https://api.jikan.moe/v4/anime/${id}/full`
const res = await fetch(url, { signal })
if (!res.ok) throw new Error(`API error ${res.status}`)
return res.json()
}