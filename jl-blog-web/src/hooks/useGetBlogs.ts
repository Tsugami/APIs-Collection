import useSWR from "swr"
import { fetcher } from "../util/fetcher"
import { Blog } from "../api"

export const useGetBlogs = () => {
    return useSWR<Blog[]>('/blogs', fetcher)
}