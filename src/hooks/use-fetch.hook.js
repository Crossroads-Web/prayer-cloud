import { useEffect, useState } from "react";

export const useFetch = (url, dependency) => {
    const [data, setData] = useState();
    const [error, setError] = useState(false)
}